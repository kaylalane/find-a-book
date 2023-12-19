import { Express } from "express";

const router = Express.Router();

router.get("/:id", async  (req, res) => {
    try {
        const authorCollection = db.collection("Author");
        const author = await authorCollection.findOne({ _id: new ObjectId(req.params.id) });
        res.send(author).status(200);
    } catch (e) {
        console.error("Can't get author", e);
        res.sendStatus(500);
    }

});
export default router;
