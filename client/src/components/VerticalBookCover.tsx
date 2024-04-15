export default function VerticalBookCover({ book }: { book: BookType }) {
    return (
        <a href={`/book/${book._id}`}>
            <img
                src={book.cover}
                alt={`${book.title} cover`}
                className="book-card__cover--large"
            />
        </a>
    );
}
