import BookCard from "./BookCard";
import ReviewStars from "./ReviewStars";
import Comment from "./Comments";
import ReviewComment from "./ReviewComment";
import { useState, useEffect } from "react";
import "../styles/reviews.scss";

export default function ReviewCard({ review }: { review: Book_Review }) {
    const [book, setBook] = useState<Book>();
    const [comments, setComments] = useState<CommentType[]>();

    useEffect(() => {
        async function fetchBook() {
            const apiLink =
                process.env.NODE_ENV === "production"
                    ? `/api/books/${review.bookId}`
                    : `http://localhost:3000/api/books/${review.bookId}`;
            const req = await fetch(apiLink, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            const book = await req.json();
            setBook(book);
        }
        async function fetchComments() {
            const apiLink =
                process.env.NODE_ENV === "production"
                    ? "/api/comments"
                    : "http://localhost:3000/api/comments";
            const req = await fetch(apiLink, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            setComments(await req.json());
        }
        fetchBook();
        fetchComments();
    }, [review]);
    return (
        <div className="review-card">
            <div className="review-card__header">
                <p className=" ">
                    {review.userName} reviewed{" "}
                    <a
                        href={`/books/${review.bookId}`}
                        className=" review-card__title"
                    >
                        {review.bookName}
                    </a>
                </p>
                {review.overall_rating && (
                    <div className="review-card__rating">
                        <span className="sr-only">
                            {review.overall_rating} out of 5 stars
                        </span>
                        <ReviewStars rating={review.overall_rating} />
                    </div>
                )}
            </div>
            <em className="review-card__review mb-2">{review.review}</em>

            {book && <BookCard book={book} />}
            <div>
                {comments &&
                    comments.map((comment) => {
                        return <Comment comment={comment} key={comment._id} />;
                    })}
            </div>

            <div className="review-card__like-information">
                <p> People have liked this </p>
            </div>
            <ReviewComment />
        </div>
    );
}
