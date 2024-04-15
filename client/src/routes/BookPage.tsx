import { Suspense } from "react";
import { useParams } from "react-router-dom";
import "../styles/book-page.scss";
import ReviewsContainer from "../components/ReviewsContainer";
import { useClerk } from "@clerk/clerk-react";
import NewReviewStars from "../components/NewReviewStars";
import { fetchBookById } from "../lib/queryFunctions";
import { useQuery } from "@tanstack/react-query";
import BookPageSkeleton from "../components/skeletons/BookPageSkeleton";

export default function BookPage() {
    const { user } = useClerk();
    const params = useParams();

    const results = useQuery({
        queryKey: ["book", params.id || ""],
        queryFn: fetchBookById,
    });

    if (results.isLoading) {
        return <BookPageSkeleton />;
    }
    const book = results.data;

    return (
        <>
            <div className="book-page">
                <div className="book-page__cover-container">
                    <Suspense fallback={<div>Loading...</div>}>
                        <img
                            src={book?.cover || ""}
                            alt={`${book?.title} cover`}
                            className="book-page__cover"
                        />
                    </Suspense>
                    <div className="default-list-buttons">
                        <button className="default-list-buttons">
                            Want to Read
                        </button>
                        <button className=" default-list-buttons">
                            <img className="svg-icon" src="/chevron-down.svg" />
                        </button>
                    </div>
                </div>
                <div className="book-page__information">
                    <h1 className="book-page__title">{book?.title}</h1>
                    <p className="book-page__author">
                        by{" "}
                        <a href={`/author/${book?.authorId}`}>
                            {book?.authorName}
                        </a>
                    </p>
                    {book?.description ? (
                        <p>{book.description}</p>
                    ) : (
                        <p>There&apos;s no book description</p>
                    )}
                    <h2 className="heading">Ratings & Reviews</h2>
                    <div className="book-page__review">
                        <p>What do you think?</p>
                        <img
                            src={user?.imageUrl}
                            className="avatar-image avatar-image--large"
                        />
                        {book && <NewReviewStars book={book} />}
                        <a
                            href={`/review/${book?._id || ""}`}
                            className="btn btn-primary"
                        >
                            Create a Review
                        </a>
                    </div>

                    <ReviewsContainer />
                </div>
            </div>
        </>
    );
}
