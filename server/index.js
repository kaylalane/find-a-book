import express from "express";
import cors from "cors";
import path from "path";
import books from "./routes/book.js";
import reviews from "./routes/review.js";
import comments from "./routes/comment.js";
import users from "./routes/user.js";
import { fileURLToPath } from "url";
import jwt from "jsonwebtoken";

const { sign, verify } = jwt;

const PORT = 3000;
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.static(path.join(__dirname, "../client/public")));

app.use("/api/books/", books);
app.use("/api/reviews/", reviews);
app.use("/api/comments/", comments);
app.use("/api/user/", users);

app.get("/", (req, res) => {
    res.sendFile(path.resolve("../client/dist/index.html"));
});

app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
