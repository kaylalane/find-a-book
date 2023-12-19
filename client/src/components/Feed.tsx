import ReviewCard from "./ReviewCard";
import { useState, useEffect } from "react";

export default function Feed() {
    const [reviews, setReviews] = useState<Book_Review[]>();

    useEffect(() => {
        async function fetchReviews() {
            const apiLink =
                process.env.NODE_ENV === "production"
                    ? `/api/reviews`
                    : `http://localhost:3000/api/reviews`;
            const req = await fetch(apiLink, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const res = await req.json();
            console.log(res);
            setReviews(res);
        }
        fetchReviews();
    }, []);
    return (
        <div className="feed">
            <h2 className="text-xl mb-2">Updates</h2>
            <div className="reviews-container">
                {reviews &&
                    reviews.map((review) => {
                        return <ReviewCard key={review.id} review={review} />;
                    })}
            </div>
        </div>
    );
}
