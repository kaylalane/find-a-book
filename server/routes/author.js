import express from "express";
import db from "../db/conn.js";
import { ObjectId } from "mongodb";

const router = express.Router();

router.get("/:id", async (req, res) => {
    try {
        const authorCollection = db.collection("Author");
        const bookCollection = db.collection("Book");
        const author = await authorCollection.findOne({
            _id: new ObjectId(req.params.id),
        });
        const books = await bookCollection
            .find({
                authorId: author._id.toString(),
            })
            .toArray();

        res.send({ author: author, books: books }).status(200);
    } catch (e) {
        console.error("Can't get author", e);
        res.sendStatus(500);
    }
});
export default router;
