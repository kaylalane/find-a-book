export default function Comment({comment}: {comment: CommentType}) {
 
    const commentAge = "some hours ago";
    console.log(new Date().toDateString());
    return (
        <div className="comment">
            <div className="comment__meta">
                <p className="comment__author">{comment.userName}</p>
                <p className="comment__text">{comment.comment}</p>
            </div>

            <p className="comment__date">{commentAge}</p>
        </div>
    );
}
