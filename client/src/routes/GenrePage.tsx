import { useNavigate, useParams } from "react-router-dom";
import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import VerticalBookCover from "../components/VerticalBookCover";

const routes = [
    { link: "/young-adult", title: "Young Adult" },
    { link: "/fantasy", title: "Fantasy" },
    { link: "/romance", title: "Romance" },
];

export default function GenrePage() {
    const params = useParams();
    const navigate = useNavigate();
    const [pageTitle, setPageTitle] = useState<string | null>("");
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const findBooksInGenre = async () => {
            const apiLink =
                process.env.NODE_ENV === "production"
                    ? `/api/genre/${params.id}`
                    : `http://localhost:3000/api/genre/${params.id}`;
            const res = await fetch(apiLink, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const data = await res.json();
            setBooks(data);
        };
        findBooksInGenre();

        const genre = routes.find((route) => route.link === `/${params.id}`);
        setPageTitle(genre?.title as string);
        if (pageTitle === undefined) {
            console.log("here");
            navigate("/recommendations");
        }
    }, [params.id]);

    return (
        <Layout>
            <h1 className="page__title">
                <a href="/recommendations" className="link">
                    Recommendations{" "}
                </a>
                &lt; {pageTitle}
            </h1>
            <div>
                <div className="book-row-container">
                    <div className="book-grid">
                        {books &&
                            books.map((book: BookType) => (
                                <VerticalBookCover key={book._id} book={book} />
                            ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
}
