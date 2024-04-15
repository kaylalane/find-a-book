import { useUser } from "@clerk/clerk-react";

export default function CommentCard({ comment }: { comment: CommentType }) {
    const { user } = useUser();
    const isUserComment = user?.username === comment.username;

    const deleteComment = async () => {
        const apiLink =
            process.env.NODE_ENV === "production"
                ? `/api/comment/${comment._id}`
                : `http://localhost:3000/api/comment/${comment._id}`;
        await fetch(apiLink, {
            method: "DELETE",
        });
    };

    const commentAge = "some hours ago";
    return (
        <div className="comment">
            <div className="comment__meta">
                <img
                    src={`${user?.imageUrl || ""}`}
                    alt="user avatar"
                    className="comment__avatar"
                />
                <p className="comment__author">
                    <a href={`/user/${comment.userId}`} className="link">
                        {comment.username}
                    </a>
                </p>
                <p className="comment__text">{comment.comment}</p>
            </div>

            <div className="comment__div flex-column">
                <p className="comment__date">{commentAge}</p>
                {isUserComment && (
                    <button
                        className="comment__delete"
                        onClick={() => deleteComment()}
                    >
                        Delete
                    </button>
                )}
            </div>
        </div>
    );
}
