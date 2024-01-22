import { useUser } from "@clerk/clerk-react";
import { useState } from "react";
import { getUserFromClerkId } from "../lib/auth";

export default function CommentsPage() {
    const { user } = useUser();
    const [comments, setComments] = useState<CommentType[]>([]);

    useState(() => {
        const getComments = async () => {
            console.log(user?.id);
            const userId = await getUserFromClerkId(user?.id || "");
            const apiLink =
                process.env.NODE_ENV === "production"
                    ? `/api/user/comments/${userId}`
                    : `http://localhost:3000/api/comments/user/${userId}`;
            try {
                const res = await fetch(apiLink, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                const data = await res.json();
                setComments(data);
            } catch (err) {
                console.log(err);
            }
        };

        getComments();
    });

    return (
        <>
            <h1>My Recent Posts</h1>
            <div>
                {comments.map((comment) => (
                    <div key={comment._id}>
                        <p>{comment.comment}</p>
                    </div>
                ))}
            </div>
        </>
    );
}
