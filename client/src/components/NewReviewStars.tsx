import clsx from "clsx";
import { useState } from "react";
import { getUserFromClerkId } from "../lib/auth";
import { useClerk } from "@clerk/clerk-react";

export default function NewReviewStars({
    book,
    size,
}: {
    book: BookType;
    size?: "small" | "large";
}) {
    const [rating, setRating] = useState(-1);
    const { user } = useClerk();
    const createReview = async () => {
        const userId = await getUserFromClerkId(user?.id || "");

        try {
            const req = await fetch(`/api/review/${book._id}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    overall_rating: rating,
                    bookId: book._id,
                    authorId: book.authorId,
                    authorName: book.authorName,
                    userId: userId,
                }),
            });
            const res = await req.json();
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className=" my-1 star-container">
            {[...new Array(5)].map((_arr, idx) => {
                return (
                    <button
                        className={clsx(
                            "",
                            size === "small" && "star--small",
                            idx <= rating && "star--selected"
                        )}
                        key={idx}
                        onClick={() => {
                            setRating(idx);
                            createReview();
                        }}
                    >
                        <span className="sr-only">
                            {idx + 1} out of 5 stars
                        </span>
                    </button>
                );
            })}
        </div>
    );
}
