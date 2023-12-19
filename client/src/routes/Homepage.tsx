import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import CurrentlyReading from "../components/CurrentlyReading";
import Feed from "../components/Feed";

export default function Homepage() {
    const [currentlyReading, setCurrentlyReading] = useState([]);
    useEffect(() => {
        const getBooks = async () => {
            const apiLink = process.env.NODE_ENV === "production" ? `/api/books` : `http://localhost:3000/api/books`;
            const res = await fetch(apiLink);
            const books = await res.json();
            console.log(books);
            setCurrentlyReading(books.slice(0, 3));
        };

      getBooks();
    }, []);

    return (
        <Layout>
        <div className="homepage">
            <CurrentlyReading books={currentlyReading} />
            <Feed />
        </div>
        </Layout>
    );
}
