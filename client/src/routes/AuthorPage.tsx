import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BookCard from "../components/BookCard";

export default function AuthorPage() {
    const [author, setAuthor] = useState<AuthorType | undefined>();
    const [books, setBooks] = useState<BookType[]>();

    const pathname = useParams();
    useEffect(() => {
        const getAuthor = async () => {
            const apiLink =
                process.env.NODE_ENV === "production"
                    ? `/api/author/${pathname.id}`
                    : `http://localhost:3000/api/author/${pathname.id}`;

            fetch(apiLink, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }).then(async (res) => {
                const data = await res.json();
                setAuthor(data.author);
                setBooks(data.books);
            });
        };

        getAuthor();
    }, []);
    return (
        <>
            {author && (
                <div>
                    {author.name}{" "}
                    <div>
                        {books && (
                            <div>
                                {books.map((book) => (
                                    <BookCard book={book} key={book._id} />
                                ))}
                            </div>
                        )}
                    </div>{" "}
                </div>
            )}
        </>
    );
}
