export default function ReviewCard({ review }: { review: Book_ReviewType }) {
    return (
        <div className="review-card">
            <p className="review-card__author">{review.userName}</p>
            <p>{review.review}</p>
        </div>
    );
}
