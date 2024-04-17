import express from "express";
import db from "../db/conn.js";
import { ObjectId } from "mongodb";

const router = express.Router();

router.get("/user/:id", async (req, res) => {
    try {
        let shelfCollection = await db.collection("Shelf");
        let shelves = await shelfCollection
            .find({ userId: new ObjectId(req.params.id) })
            .toArray();

        if (shelves) {
            res.status(200).send(shelves);
        }
    } catch (error) {
        console.log("Failed to fetch user shelves. ", error);
    }
});

router.get("/:id", async (req, res) => {
    try {
        let shelfCollection = await db.collection("Shelf");
        let shelf = await shelfCollection.find({
            _id: new ObjectId(req.params.id),
        });

        if (shelf) {
            res.status(200).send(shelf);
        }
    } catch (error) {
        console.log("Failed to fetch shelf. ", error);
    }
});

router.post("/new-user", async (req, res) => {
    try {
        let shelfCollection = await db.collection("Shelf");
        const defaultShelves = [
            {
                name: "All",
                userId: new ObjectId(req.body.userId),
                books: [],
            },
            {
                name: "Currently Reading",
                userId: new ObjectId(req.body.userId),
                books: [],
            },
            {
                name: "Want to Read",
                userId: new ObjectId(req.body.userId),
                books: [],
            },
            {
                name: "Read",
                userId: new ObjectId(req.body.userId),
                books: [],
            },
        ];

        let result = await shelfCollection.insertMany(defaultShelves);

        if (result) {
            res.status(200).send(result);
        }
    } catch (error) {
        console.log("Default shelves creation failed. ", error);
    }
});

router.post("/add-to-shelf", async (req, res) => {
    try {
        const { userId, bookId, shelfName } = req.body;
        console.log(userId, bookId, shelfName);
        let shelfCollection = await db.collection("Shelf");
        let userShelves = await shelfCollection
            .find({
                userId: new ObjectId(userId),
            })
            .toArray();
        const shelf = userShelves.filter((s) => s.name === shelfName);

        let result = await shelfCollection.updateOne(
            { _id: new ObjectId(shelf[0]._id) },
            {
                $push: {
                    books: bookId,
                },
            }
        );

        if (result) {
            res.status(200).send(result);
        }
    } catch (error) {
        console.log("Failed to add book to shelf. ", error);
    }
});

export default router;
