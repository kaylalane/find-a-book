import express from "express";
import {
    authenticateToken,
    generateAccessToken,
    hashPassword,
} from "../auth.js";
import jwt from "jsonwebtoken";
import { hash, compare, genSalt } from "bcrypt";
import db from "../db/conn.js";

const { sign, verify } = jwt;

const router = express.Router();

router.get("/:id", authenticateToken, async (req, res) => {
    let userCollection = await db.collection("User");
    let userExists = await userCollection.findOne({ username: req.params.id });

    console.log(req.params.id);
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
    const { username, email, password, name } = req.body;

    try {
        let userCollection = await db.collection("User");
        let userExists = await userCollection.findOne({
            username: req.body.username,
        });

        if (!userExists) {
            const hashedPassword = await hashPassword(password);

            const user = {
                name: name,
                username: username,
                email: email,
                password: hashedPassword,
            };

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
