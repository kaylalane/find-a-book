import BookCard from "./BookCard";
import ReviewStars from "./ReviewStars";
import CommentCard from "./CommentCard";
import CreateComment from "./CreateComment";
import { useState, useEffect } from "react";
import "../styles/reviews.scss";
import { useQuery } from "@tanstack/react-query";
import { fetchBookById } from "../lib/queryFunctions";

export default function FeedItemCard({ review }: { review: Book_ReviewType }) {
    const bookReq = useQuery({
        queryKey: ["books", review.bookId],
        queryFn: fetchBookById,
    });
    const [comments, setComments] = useState<CommentType[]>([]);

    useEffect(() => {
        async function fetchComments() {
            const apiLink =
                process.env.NODE_ENV === "production"
                    ? `/api/comment/${review._id}`
                    : `http://localhost:3000/api/comment/${review._id}`;
            const req = await fetch(apiLink, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            setComments(await req.json());
        }
        fetchComments();
    }, [review]);

    if (bookReq.isLoading) {
        return <div className="book-card-skeleton"></div>;
    }
    const book = bookReq.data;

    return (
        <div className="feed-card">
            <div className="feed-card__top">
                <div className="feed-card__header space-between-div">
                    <p className=" ">
                        <a href={""} className="link">
                            {review.userName}
                        </a>
                        {"  "}
                        reviewed{" "}
                        <a href={`/book/${review.bookId}`} className="link">
                            {review.bookName}
                        </a>
                    </p>
                    {review.overallRating && (
                        <div className="feed-card__rating">
                            <span className="sr-only">
                                {review.overallRating} out of 5 stars
                            </span>
                            <ReviewStars rating={review.overallRating} />
                        </div>
                    )}
                </div>
                <em className="feed-card__review mb-2">{review.review}</em>

                {book && (
                    <div className="book-card--outline">
                        <BookCard book={book} />
                    </div>
                )}
            </div>
            <div className="feed-card__like-information">
                <p> People have liked this </p>
            </div>

            <div className="comments__container">
                {comments &&
                    comments.map((comment) => (
                        <CommentCard comment={comment} key={comment._id} />
                    ))}
            </div>
            <CreateComment
                review={review}
                comments={comments}
                setComments={setComments}
            />
        </div>
    );
}
