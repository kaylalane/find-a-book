import { FormEvent, useState } from "react";
import Button from "./ui/Button";
import clsx from "clsx";

const initialState = {
    review: "Write your review. (Optional)",
    overallRating: null,
};

export default function CreateReview({ book }: { book: Book }) {
    const TOTAL_STARS = 5;
    const [review, setReview] = useState(initialState);
    const [rating, setRating] = useState(-1);

    const handleReview = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const req = await fetch(`/api/review/${book._id}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    review: review.review,
                    overall_rating: rating,
                    bookId: book._id,
                    authorId: book.authorId,
                    authorName: book.authorName,
                    userId: "657bd9cb20694bcc71eea5e7",
                }),
            });
            const res = await req.json();
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <div className=" my-1">
                {[...new Array(TOTAL_STARS)].map((_arr, idx) => {
                    return (
                        <Button
                            className={clsx(
                                "btn star ",
                                idx <= rating && "star--selected"
                            )}
                            intent={"text"}
                            key={idx}
                            onClick={() => setRating(idx)}
                        >
                            <span className="sr-only">
                                {idx + 1} out of 5 stars
                            </span>
                        </Button>
                    );
                })}
            </div>
            <form
                action=""
                className=" flex flex-col border-t border-slate-600 "
            >
                <label htmlFor="">
                    <p className=" my-2">What did you think?</p>
                    <textarea
                        name=""
                        id=""
                        className=" w-full rounded-sm mb-4 max-w-lg"
                        value={review.review}
                        onChange={(e) =>
                            setReview({ ...review, review: e.target.value })
                        }
                    ></textarea>
                </label>
                <Button intent={"secondary"} onClick={(e) => handleReview(e)}>
                    Post
                </Button>
            </form>{" "}
        </div>
    );
}
