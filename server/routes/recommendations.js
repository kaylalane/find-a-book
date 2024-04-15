import express from "express";
import db from "../db/conn.js";

const router = express.Router();

router.get("/", (req, res) => {
    try {
        const bookCollection = db.collection("Book");
        const books = bookCollection.find({ genre: req.body.genre }).toArray();
        res.send(books);
    } catch (error) {
        console.log("Couldn't get ", req.body.genre, " ", error);
    }
});

router.get("/:id", async (req, res) => {
    try {
        const genreCollection = db.collection("Genre");
        const genre = await genreCollection.findOne({ params: req.params.id });

        const bookCollection = db.collection("Book");
        const books = await bookCollection
            .find({ genres: { $in: [genre.genre] } })
            .toArray();
        console.log(books);
        res.send(books).status(200);
    } catch (error) {
        console.log("Couldn't get ", req.params.id, " ", error);
    }
});

export default router;
