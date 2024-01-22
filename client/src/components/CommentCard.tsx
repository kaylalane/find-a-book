import { useUser } from "@clerk/clerk-react";

export default function CommentCard({ comment }: { comment: CommentType }) {
    const { user } = useUser();
    const isUserComment = user?.username === comment.username;

    const commentAge = "some hours ago";
    return (
        <div className="comment">
            <div className="comment__meta">
                <p className="comment__author">{comment.username}</p>
                <p className="comment__text">{comment.comment}</p>
            </div>

            <div className="comment__div">
                <p className="comment__date">{commentAge}</p>
                {isUserComment && (
                    <button className="comment__delete">Delete</button>
                )}
            </div>
        </div>
    );
}
