import express from "express";
import db from "../db/conn.js";
import { ObjectId } from "mongodb";

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const bookCollection = db.collection("Book");
        const allBooks = await bookCollection.find().toArray();
        res.send(allBooks).status(200);
    } catch (e) {
        console.error("Can't get books", e);
        res.sendStatus(500);
    }
});

router.get("/:id", async (req, res) => {
    try {
        const bookCollection = db.collection("Book");
        const book = await bookCollection.findOne({
            _id: new ObjectId(req.params.id),
        });
        res.send(book).status(200);
    } catch (e) {
        console.error("Can't get book", e);
        res.sendStatus(500);
    }
});
router.post("/", async (req, res) => {
    try {
        const bookCollection = db.collection("Book");
        const {
            title,
            authorName,
            authorId,
            ISBN,
            price,
            publishedAt,
            description,
            cover,
            genres,
            pages,
        } = req.body;
     
        const newBook = await bookCollection.insertOne({
            title: title,
            authorName: authorName,
            authorId: authorId,
            ISBN: ISBN,
            price: price,
            publishedAt: publishedAt,
            description: description,
            genres: genres,
            cover: cover,
            pages: pages,
        });
        res.send(newBook).status(200);
    } catch (e) {
        console.error("Can't get books", e);
        res.sendStatus(500);
    }
});

export default router;
