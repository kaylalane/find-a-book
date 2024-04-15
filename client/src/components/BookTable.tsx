import BookTableItem from "./BookTableItem";

export default function BookTable({
    bookIds,
    books,
}: {
    bookIds?: string[];
    books?: BookType[];
}) {
    return (
        <table className="book-table">
            <tbody>
                {bookIds &&
                    bookIds.map((bookId) => (
                        <BookTableItem key={bookId} bookId={bookId} />
                    ))}
                {books &&
                    books.map((book) => (
                        <BookTableItem key={book._id} bookId={book._id} />
                    ))}
            </tbody>
        </table>
    );
}
