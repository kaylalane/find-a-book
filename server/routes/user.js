import express from "express";
import {
    authenticateToken,
    generateAccessToken,
    hashPassword,
} from "../auth.js";
import jwt from "jsonwebtoken";
import db from "../db/conn.js";

const { sign, verify } = jwt;

const router = express.Router();

router.get("/auth", authenticateToken, async (req, res) => {
    return res.send(req.user);
});

router.get("/:id", async (req, res) => {
    let userCollection = await db.collection("User");
    let userExists = await userCollection.findOne({ clerkId: req.params.id });

    if (userExists) {
        res.status(200).send(userExists);
    }
});

//GET A USER, IF EXISTS
router.post("/login", async (req, res) => {
    const { username, email, password } = req.body;

    let collection = await db.collection("User");
    let userExists = await collection.findOne({ username: req.body.username });

    if (userExists) {
        const accessToken = generateAccessToken(userExists);
        const refreshToken = sign(userExists, process.env.REFRESH_TOKEN_SECRET);

        res.status(200).send(
            JSON.stringify({
                userExists,
                accessToken: accessToken,
                refreshToken: refreshToken,
            })
        );
    }
});

//CREATE A USER
router.post("/", async (req, res) => {
    const { username, email, clerkId } = req.body;

    try {
        const userCollection = await db.collection("User");
        const shelfCollection = await db.collection("Shelf");

        const usernameExists = await userCollection.findOne({
            username: username,
        });

        const emailExists = await userCollection.findOne({
            email: email,
        });

        if (!usernameExists && !emailExists) {
            const u = {
                username: username,
                email: email,
                clerkId: clerkId,
                isAdmin: false,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
            };
            const user = await userCollection.insertOne(u);

            await shelfCollection.insertOne({
                userId: user.insertedId,
                books: [],
                name: "All",
            });
            await shelfCollection.insertOne({
                userId: user.insertedId,
                books: [],
                name: "Currently Reading",
            });
            await shelfCollection.insertOne({
                userId: user.insertedId,
                books: [],
                name: "Read",
            });

            res.status(201);
            res.json(user);
        }
    } catch (err) {
        res.status(401).send("Not Allowed");
    }
});

router.post("/refreshToken", (req, res) => {
    const refreshToken = req.body.token;
    if (refreshToken == null) return res.sendStatus(401);

    verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        const accessToken = generateAccessToken({ name: user.username });
        res.json({ accessToken: accessToken });
    });
});

export default router;
