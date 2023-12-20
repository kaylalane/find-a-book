import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/book-page.scss";
import Layout from "../components/Layout";

export default function BookPage() {
    const [book, setBook] = useState<Book | undefined>();
    const pathname = useParams();
    useEffect(() => {
        const getBook = async () => {
            const apiLink =
                process.env.NODE_ENV === "production"
                    ? `/api/books/${pathname.id}`
                    : `http://localhost:3000/api/books/${pathname.id}`;

            fetch(apiLink, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }).then(async (res) => {
                const data = await res.json();
                setBook(data);
            });
        };

        getBook();
    }, []);

    return (
        <Layout>
            <div className="book-page">
                <div className="book-page__cover-container">
                    <img
                        src={book?.cover || ""}
                        alt={`${book?.title} cover`}
                        className="book-page__cover"
                    />
                </div>
                <div className="book-page__information">
                    <h1 className="book-page__title">{book?.title}</h1>
                    <p className="book-page__author">
                        by{" "}
                        <a href={`/author/${book?.authorId}`}>
                            {book?.authorName}
                        </a>
                    </p>
                    {book?.description ? (
                        <p>{book.description}</p>
                    ) : (
                        <p>There&apos;s no book description</p>
                    )}
                </div>
                <div>
                    <h2 className="heading">Book Reviews</h2>
                    <a
                        href={`/review/new/${book?._id || ""}`}
                        className="btn btn-primary"
                    >
                        Create a Review
                    </a>
                </div>
            </div>
        </Layout>
    );
}
