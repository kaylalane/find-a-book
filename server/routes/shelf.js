import express from "express";
import db from "../db/conn.js";
import { ObjectId } from "mongodb";

const router = express.Router();

router.get("/:id", async (req, res) => {
    try {
        let shelfCollection = await db.collection("Shelf");
        let shelves = await shelfCollection
            .find({ userId: new ObjectId(req.params.id) })
            .toArray();

        if (shelves) {
            res.status(200).send(shelves);
        }
    } catch (error) {
        console.log(error);
    }
});

export default router;
