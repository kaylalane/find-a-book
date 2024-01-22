import BookCard from "./BookCard";

export default function CurrentlyReading(books: { books: BookType[] }) {
    return (
        <div className="currently-reading">
            <h2 className=" text-xl mb-2">Currently Reading</h2>
            <ul className=" currently-reading__container">
                {books.books.map((book) => (
                    <BookCard key={book._id} book={book} />
                ))}
            </ul>
        </div>
    );
}
