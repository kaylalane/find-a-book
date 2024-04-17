import { FormEvent, Suspense } from "react";
import { useParams } from "react-router-dom";
import "../styles/book-page.scss";
import ReviewsContainer from "../components/ReviewsContainer";
import { useClerk } from "@clerk/clerk-react";
import NewReviewStars from "../components/NewReviewStars";
import { fetchBookById } from "../lib/queryFunctions";
import { useQuery } from "@tanstack/react-query";
import BookPageSkeleton from "../components/skeletons/BookPageSkeleton";
import { getUserFromClerkId } from "../lib/auth";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import Markdown from "react-markdown";

export default function BookPage() {
    const { user } = useClerk();
    const params = useParams();

    const results = useQuery({
        queryKey: ["book", params.id || ""],
        queryFn: fetchBookById,
    });

    if (results.isLoading) {
        return <BookPageSkeleton />;
    }
    const book = results.data;

    const markBookAsWantToRead = async (e: FormEvent) => {
        e.preventDefault();
        const userId = await getUserFromClerkId(user?.id || "");
        const apiLink =
            process.env.NODE_ENV === "production"
                ? `/api/shelf/add-to-shelf`
                : `http://localhost:3000/api/shelf/add-to-shelf`;
        await fetch(apiLink, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                userId: userId,
                bookId: book?._id,
                shelfName: "Want To Read",
            }),
        });
    };

    return (
        <>
            <div className="book-page">
                <div className="book-page__cover-container">
                    <Suspense fallback={<div>Loading...</div>}>
                        <img
                            src={book?.cover || ""}
                            alt={`${book?.title} cover`}
                            className="book-page__cover"
                        />
                    </Suspense>
                    <div className="default-list-buttons">
                        <button
                            className="default-list-buttons"
                            onClick={(e) => markBookAsWantToRead(e)}
                        >
                            Want to Read
                        </button>
                        <DropdownMenu.Root>
                            <DropdownMenu.Trigger className=" default-list-buttons">
                                <img
                                    className="svg-icon"
                                    src="/chevron-down.svg"
                                />
                            </DropdownMenu.Trigger>

                            <DropdownMenu.Portal>
                                <DropdownMenu.Content className="dropdown-container">
                                    <DropdownMenu.Group>
                                        <DropdownMenu.Item className=" dropdown__item">
                                            Read
                                        </DropdownMenu.Item>
                                        <DropdownMenu.Item className=" dropdown__item">
                                            Currently Reading
                                        </DropdownMenu.Item>
                                    </DropdownMenu.Group>
                                </DropdownMenu.Content>
                            </DropdownMenu.Portal>
                        </DropdownMenu.Root>
                    </div>
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
                        <Markdown>{book.description}</Markdown>
                    ) : (
                        <p>There&apos;s no book description</p>
                    )}
                    <h2 className="heading">Ratings & Reviews</h2>
                    <div className="book-page__review">
                        <p>What do you think?</p>
                        <img
                            src={user?.imageUrl}
                            className="avatar-image avatar-image--large"
                        />
                        {book && <NewReviewStars book={book} />}
                        <a
                            href={`/review/${book?._id || ""}`}
                            className="btn btn-primary"
                        >
                            Create a Review
                        </a>
                    </div>

                    <ReviewsContainer />
                </div>
            </div>
        </>
    );
}
