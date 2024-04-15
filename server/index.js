import express from "express";
import cors from "cors";
import path from "path";
import books from "./routes/book.js";
import reviews from "./routes/review.js";
import comments from "./routes/comment.js";
import authors from "./routes/author.js";
import users from "./routes/user.js";
import shelves from "./routes/shelf.js";
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

app.use("/api/book/", books);
app.use("/api/review/", reviews);
app.use("/api/comment/", comments);
app.use("/api/user/", users);
app.use("/api/author/", authors);
app.use("/api/shelf", shelves);

//
app.get("*", (req, res) => {
    res.sendFile(path.resolve("../client/dist/index.html"));
});

app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
