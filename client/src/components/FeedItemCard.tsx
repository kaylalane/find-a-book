import BookCard from "./BookCard";
import ReviewStars from "./ReviewStars";
import CommentCard from "./CommentCard";
import CreateComment from "./CreateComment";
import { useState, useEffect } from "react";
import "../styles/reviews.scss";

export default function FeedItemCard({ review }: { review: Book_ReviewType }) {
    const [book, setBook] = useState<BookType>();
    const [comments, setComments] = useState<CommentType[]>([]);

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
                    ? `/api/comments/${review._id}`
                    : `http://localhost:3000/api/comments/${review._id}`;
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
        <div className="feed-item-card">
            <div className="feed-item-card__header">
                <p className=" ">
                    {review.userName} reviewed{" "}
                    <a
                        href={`/books/${review.bookId}`}
                        className=" feed-item-card__title"
                    >
                        {review.bookName}
                    </a>
                </p>
                {review.overall_rating && (
                    <div className="feed-item-card__rating">
                        <span className="sr-only">
                            {review.overall_rating} out of 5 stars
                        </span>
                        <ReviewStars rating={review.overall_rating} />
                    </div>
                )}
            </div>
            <em className="feed-item-card__review mb-2">{review.review}</em>

            {book && <BookCard book={book} />}
            <div className="comments__container">
                {comments &&
                    comments.map((comment) => (
                        <CommentCard comment={comment} key={comment._id} />
                    ))}
            </div>

            <div className="feed-item-card__like-information">
                <p> People have liked this </p>
            </div>
            <CreateComment
                review={review}
                comments={comments}
                setComments={setComments}
            />
        </div>
    );
}
