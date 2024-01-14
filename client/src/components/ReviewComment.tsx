import { FormEvent, useState } from "react";
import Button from "./ui/Button";

export default function ReviewComment(review: Book_Review) {
    const [showPostComment, setShowPostComment] = useState(false);
    const [comment, setComment] = useState("Write a comment...");

    const PostComment = async (e: FormEvent) => {
        e.preventDefault();

        try {
            const apiLink =
                process.env.NODE_ENV === "production"
                    ? "/api/comments"
                    : "http://localhost:3000/api/comments";
            await fetch(apiLink, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    comment: comment,
                    userName: "Anonymous",
                    userId: "123",
                    reviewId: review._id,
                }),
            });
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <form
                action=""
                className="review-card__form"
                onSubmit={(e) => PostComment(e)}
            >
                <textarea
                    className=" review-card__comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    onFocus={() => setShowPostComment(true)}
                />
                {showPostComment && (
                    <Button intent={"secondary"} size={"small"}>
                        Comment
                    </Button>
                )}
            </form>
        </div>
    );
}
