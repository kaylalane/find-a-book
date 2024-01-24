import { useUser } from "@clerk/clerk-react";
import { fetchAllUserComments } from "../lib/queryFunctions";
import { useQuery } from "@tanstack/react-query";

export default function CommentsPage() {
    const { user } = useUser();
    const results = useQuery({
        queryKey: ["comments", user?.id || ""],
        queryFn: fetchAllUserComments,
    });

    if (results.isLoading) {
        return <div>Loading...</div>;
    }
    const comments = results.data;

    return (
        <>
            <h1>My Recent Posts</h1>
            <div>
                {comments.map((comment: CommentType) => (
                    <div key={comment._id}>
                        <p>{comment.comment}</p>
                    </div>
                ))}
            </div>
        </>
    );
}
