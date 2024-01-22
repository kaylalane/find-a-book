import { FormEvent, useState } from "react";
import Button from "./ui/Button";
import { useUser } from "@clerk/clerk-react";
import { getUserFromClerkId } from "../lib/auth";

export default function ReviewComment({
    review,
    comments,
    setComments,
}: {
    review: Book_ReviewType;
    comments: CommentType[];
    setComments: React.Dispatch<React.SetStateAction<CommentType[]>>;
}) {
    const [showPostComment, setShowPostComment] = useState(false);
    const [comment, setComment] = useState("Write a comment...");
    const { user } = useUser();

    const PostComment = async (e: FormEvent) => {
        e.preventDefault();

        const userId = await getUserFromClerkId(user?.id || "");

        try {
            const apiLink =
                process.env.NODE_ENV === "production"
                    ? "/api/comments"
                    : "http://localhost:3000/api/comments";
            const newComment = await fetch(apiLink, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    comment: comment,
                    userName: user?.username,
                    userId: userId,
                    reviewId: review._id,
                }),
            });

            const newCommentJson = await newComment.json();
            setComments([
                ...comments,
                {
                    _id: newCommentJson._id,
                    comment: comment,
                    username: user?.username || "",
                    userId: userId,
                    reviewId: review._id,
                    createdAt: new Date().toLocaleDateString(),
                    updatedAt: new Date().toLocaleDateString(),
                },
            ]);
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
