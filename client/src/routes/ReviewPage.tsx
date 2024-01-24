import CreateReview from "../components/CreateReview";
import { useParams } from "react-router-dom";
import "../styles/reviews.scss";
import BookPageSkeleton from "../components/skeletons/BookPageSkeleton";
import { useQuery } from "@tanstack/react-query";
import { fetchBookById } from "../lib/queryFunctions";

export default function ReviewPage() {
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
        <div className="review-page">
            <h1 className="page-title">
                <a href={`/books/${book._id}`} className=" underline">
                    {book.title}
                </a>{" "}
                &gt; Review
            </h1>
            <div className="review-page-information">
                <img
                    src={book.cover}
                    alt={book.title}
                    className="book-cover--small"
                />
                <div>
                    <a href={`/books/${book._id}`} className=" text-xl">
                        {book.title}
                    </a>
                    <p>
                        by{" "}
                        <a href={`/author/${book.authorId}`} className="author-name">
                            {book.authorName}
                        </a>
                    </p>
                </div>
            </div>
            <div className="separator separator--margin"></div>
            <CreateReview book={book} />
        </div>
    );
}
