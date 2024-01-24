import { useQuery } from "@tanstack/react-query";
import { fetchReviews } from "../lib/queryFunctions";
import FeedItemCard from "./FeedItemCard";

export default function Feed() {
    const results = useQuery({ queryKey: ["reviews"], queryFn: fetchReviews });
    if (results.isLoading) {
        return <div>Loading...</div>;
    }
    const reviews = results.data;

    return (
        <div className="feed">
            <h2 className="text-xl mb-2">Updates</h2>
            <div className="reviews-container">
                {reviews &&
                    reviews.map((review: Book_ReviewType) => {
                        return (
                            <FeedItemCard key={review._id} review={review} />
                        );
                    })}
            </div>
        </div>
    );
}
