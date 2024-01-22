import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReviewCard from "./ReviewCard";

export default function ReviewsContainer() {
    const [reviews, setReviews] = useState<Book_ReviewType[]>([]);
    const pathname = useParams();

    useEffect(() => {
        const apiLink =
            process.env.NODE_ENV === "production"
                ? `/api/reviews/${pathname.id}`
                : `http://localhost:3000/api/reviews/${pathname.id}`;
        const getReviews = async () => {
            fetch(`${apiLink}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }).then(async (res) => {
                const data = await res.json();
                setReviews(data);
            });
        };
        getReviews();
    }, [pathname]);

    return (
        <div>
            <h2>Reviews</h2>
            <div>
                {reviews.map((review) => (
                    <ReviewCard review={review} />
                ))}
            </div>
        </div>
    );
}
