import Layout from "../components/Layout";
import { fetchBooks } from "../lib/queryFunctions";
import { useQuery } from "@tanstack/react-query";
import VerticalBookCover from "../components/VerticalBookCover";

export default function Recommendations() {
    const results = useQuery({ queryKey: ["reviews"], queryFn: fetchBooks });
    if (results.isLoading) {
        return <div>Loading...</div>;
    }
    const books: BookType[] = results.data;
    const fantastyBooks = books.filter((book: BookType) =>
        book.genres.includes("Fantasy")
    );
    const romanceBooks = books.filter((book: BookType) =>
        book.genres.includes("Romance")
    );
    console.log(books);

    return (
        <Layout className="recommendations-page">
            <h1>Recommendations</h1>
            <h2>Fantasy</h2>

            <div className="book-row-container">
                <div className="book-row">
                    {fantastyBooks.map((book: BookType) => (
                        <VerticalBookCover key={book._id} book={book} />
                    ))}
                </div>
            </div>
            <h2>Romance</h2>

            <div className="book-row-container">
                <div className="book-row">
                    {romanceBooks.map((book: BookType) => (
                        <VerticalBookCover key={book._id} book={book} />
                    ))}
                </div>
            </div>
        </Layout>
    );
}
