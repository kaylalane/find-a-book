import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import BookCard from "../components/BookCard";

export default function Recommendations() {
    const [books, setBooks] = useState<BookType[]>([]);
    useEffect(() => {
        const getBooks = async () => {
            const apiLink =
                process.env.NODE_ENV === "production"
                    ? `/api/books`
                    : `http://localhost:3000/api/books`;

            fetch(apiLink, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }).then(async (res) => {
                const data = await res.json();
                setBooks(data);
            });
        };

        getBooks();
    }, [books]);
    return (
        <Layout>
            <h1>Recommendations</h1>
            <div className="recommendations__list">
                {books.map((book) => (
                    <BookCard key={book._id} book={book} />
                ))}
            </div>
        </Layout>
    );
}
