import express from "express";
import cors from "cors";
import books from "./routes/book.js";
import reviews from "./routes/review.js"
import comments from "./routes/comment.js"

const PORT = 3000
const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/books/", books);
app.use("/api/reviews/", reviews);
app.use("/api/comments/", comments);

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
