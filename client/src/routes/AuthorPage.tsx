import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import { useQuery } from "@tanstack/react-query";
import { fetchAuthorById } from "../lib/queryFunctions";
import BookTable from "../components/BookTable";

export default function AuthorPage() {
    const params = useParams();
    const results = useQuery({
        queryKey: ["author", params.id || ""],
        queryFn: fetchAuthorById,
    });

    if (results.isLoading) {
        return <div>Loading...</div>;
    }

    const author = results.data.author;
    const books = results.data.books;

    return (
        <Layout className="author-page">
            <h1>{author?.name}</h1>
            {author.bio && <p> {author.bio}</p>}
            <p>{author?.name}'s Books</p>
            <BookTable books={books} />
        </Layout>
    );
}
