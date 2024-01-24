import NewReviewStars from "./NewReviewStars";
import ReviewStars from "./ReviewStars";
import Button from "./ui/Button";

export default function BookTable({ books }: { books: BookType[] }) {
    return (
        <table className="book-table">
            <tbody>
                {books.map((book: BookType) => (
                    <tr key={book._id}>
                        <td width="5%">
                            <img
                                src={book.cover}
                                alt={`${book.title} cover`}
                                className="book-card__cover--small"
                            />
                        </td>
                        <td className="">
                            <a href={`/book/${book._id}`} className="book-table__author"> {book.title}</a>
                            <br></br>
                            by{" "}
                            <a href={`/author/${book.authorId}`}>
                                {book.authorName}
                            </a>
                            <br></br>
                            <div className="mini-ratings">
                                {book.overallRating && (
                                    <ReviewStars rating={book.overallRating} />
                                )}
                                {book.overallRating} avg ratings -{" "}
                                {book.numberOfReviews} ratings - published{" "}
                                {new Date(book.publishedAt).getFullYear()}
                            </div>
                        </td>
                        <td width="130px">
                            <div className="rate-button-container">
                                <Button size={"large"}>Want to Read</Button>
                                <p>Rate this book</p>
                                <NewReviewStars book={book} size="small" />
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
