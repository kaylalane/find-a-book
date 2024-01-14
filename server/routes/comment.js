import express from "express";
import { ObjectId } from "mongodb";
import db from "../db/conn.js";

const router = express.Router();


router.post("/", async (req, res) => {
    try {
        const commentCollection = db.collection("Comment");
        const { comment, userName, reviewId, userId } = req.body;
        const newComment = {
            comment,
            userName,
            reviewId,
            userId,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        };
        const result = await commentCollection.insertOne(newComment);
        res.send(result).status(200);
    } catch (e) {
        console.error("Can't create comment", e);
        res.sendStatus(500);
    }
});

router.get("/", async (req, res) => {
    try {
        const commentCollection = db.collection("Comment");
        const comments = await commentCollection.find().toArray();
        res.send(comments).status(200);
    } catch (e) {
        console.error("Can't get comments", e);
        res.sendStatus(500);
    }
});

export default router;
