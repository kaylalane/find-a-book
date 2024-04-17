import { useState } from "react";
import NewReviewStars from "./NewReviewStars";
import ReviewStars from "./ReviewStars";
import Button from "./ui/Button";

export default function BookTableItem({ bookId }: { bookId: string }) {
    const [book, setBook] = useState<BookType>();

    useState(() => {
        const fetchBook = async () => {
            const apiLink =
                process.env.NODE_ENV === "production"
                    ? `/api/book/${bookId}`
                    : `http://localhost:3000/api/book/${bookId}`;
            const req = await fetch(apiLink, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!req.ok) {
                throw new Error("Network response was not ok");
            }

            const data = await req.json();
            setBook(data);
        };
        fetchBook();
    });

    return (
        <>
            {book && (
                <tr key={book._id}>
                    <td width="5%">
                        <img
                            src={book.cover}
                            alt={`${book.title} cover`}
                            className="book-card__cover--small"
                        />
                    </td>
                    <td className="">
                        <a
                            href={`/book/${book._id}`}
                            className="book-table__author"
                        >
                            {" "}
                            {book.title}
                        </a>
                        <br></br>
                        by{" "}
                        <a href={`/author/${book.authorId}`}>
                            {book?.authorName}
                        </a>
                        <br></br>
                        <div className="mini-ratings">
                            {book.overallRating && (
                                <ReviewStars rating={book?.overallRating} />
                            )}
                            {book.overallRating} avg ratings -{" "}
                            {book.numberOfReviews} ratings - published{" "}
                            {new Date(book?.publishedAt || "").getFullYear()}
                        </div>
                    </td>
                    <td width="130px">
                        <div className="rate-button-container">
                            <Button size={"large"}>Want to Read</Button>
                            <p>Rate this book</p>
                            <NewReviewStars book={book} />
                        </div>
                    </td>
                </tr>
            )}
        </>
    );
}
