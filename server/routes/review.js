import express from "express";
import db from "../db/conn.js";
import { ObjectId } from "mongodb";

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const reviewCollection = db.collection("Book_Review");
        const allReviews = await reviewCollection.find().toArray();
        res.send(allReviews.reverse()).status(200);
    } catch (e) {
        console.error("Can't get reviews", e);
        res.sendStatus(500);
    }
});

router.get("/:id", async (req, res) => {
    try {
        const reviewCollection = db.collection("Book_Review");
        const review = await reviewCollection.findOne({
            _id: new ObjectId(req.params.id),
        });
        res.send(review).status(200);
    } catch (e) {
        console.error("Can't get review", e);
        res.sendStatus(500);
    }
});

export default router;
