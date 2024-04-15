import clsx from "clsx";
import { Suspense } from "react";

export default function BookCard({
    book,
    cover,
}: {
    book: BookType;
    cover?: "small" | "large";
}) {
    return (
        <div className="book-card">
            <Suspense fallback={"loading"}>
                <a href={`/book/${book._id}`}>
                    <img
                        src={book.cover || ""}
                        alt={`${book.title} cover`}
                        className={clsx(
                            "book-card__cover",
                            cover == "small" && "book-card__cover--small"
                        )}
                    />
                </a>
            </Suspense>
            <div className="book-card__description">
                <a className="book-card__title" href={`/book/${book._id}`}>
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
