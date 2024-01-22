import { useEffect, useState } from "react";
import CreateReview from "../components/CreateReview";
import { useParams } from "react-router-dom";
import "../styles/reviews.scss";

export default function ReviewPage() {
    const [book, setBook] = useState<BookType | undefined>();
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
        <>
            {book && (
                <div className="px-4">
                    <h1 className="text-2xl mb-4">
                        <a href={`/books/${book._id}`} className=" underline">
                            {book.title}
                        </a>{" "}
                        &gt; Review
                    </h1>
                    <div className=" flex gap-4">
                        <img src={book.cover} alt={book.title} />
                        <div>
                            <a href={`/books/${book._id}`} className=" text-xl">
                                {book.title}
                            </a>
                            <p>
                                by{" "}
                                <a href={`/author/${book.authorId}`}>
                                    {book.authorName}
                                </a>
                            </p>
                        </div>
                    </div>
                    <CreateReview book={book} />
                </div>
            )}
        </>
    );
}
