import { Suspense } from "react";

export default function BookCard({ book }: { book: Book }) {
    return (
        <div className="book-card">
            <Suspense fallback={"loading"}>
                <a href={`/books/${book.id}`}>
                    <img
                        src={book.cover || ""}
                        alt={`${book.title} cover`}
                        className="book-card__cover"
                    />
                </a>
            </Suspense>
            <div className="book-card__description">
                <a className="book-card__title" href={`/books/${book.id}`}>
                    {book.title}
                </a>
                <p>
                    by{" "}
                    <a
                        href={`/author/${book.authorId}`}
                        className="book-card__author author-name"
                    >
                        {book.authorName}
                    </a>
                </p>
            </div>
        </div>
    );
}
