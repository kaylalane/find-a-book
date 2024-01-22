import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import CurrentlyReading from "../components/CurrentlyReading";
import Feed from "../components/Feed";
import {
    SignIn,
    SignInButton,
    SignUpButton,
    SignedIn,
    SignedOut,
} from "@clerk/clerk-react";
import Footer from "../components/Footer";

const genres = [
    "Art",
    "Biography",
    "Business",
    "Children's",
    "Christian",
    "Classics",
    "Comics",
    "Contemporary",
    "Cookbooks",
    "Crime",
    "Ebooks",
    "Fantasy",
];

export default function Dashboard() {
    const [currentlyReading, setCurrentlyReading] = useState<BookType[]>([]);
    useEffect(() => {
        const getBooks = async () => {
            const apiLink =
                process.env.NODE_ENV === "production"
                    ? `/api/books`
                    : `http://localhost:3000/api/books`;
            const res = await fetch(apiLink);
            const books = await res.json();
            setCurrentlyReading(books);
        };

        getBooks();
    }, []);

    return (
        <>
            <SignedOut>
                <div id="signedOutHome">
                    <div className="main-content">
                        <div className="hero-section">
                            <div className="promo">
                                <img
                                    src="/book.png"
                                    alt=""
                                    className="headerImage"
                                />
                                <h1>
                                    Find Your Next Great <span>Read.</span>
                                </h1>
                                <p className="description">
                                    You&apos;re in the right place. Tell us what
                                    titles or genres you&apos;ve enjoyed in the
                                    past, and we&apos;ll give you surprisingly
                                    insightful recommendations.
                                </p>
                            </div>
                            <div className="auth-container">
                                <SignIn afterSignUpUrl="/new-user" />

                                <div className="authButtons">
                                    <SignUpButton
                                        afterSignInUrl="/"
                                        afterSignUpUrl="/new-user"
                                    />
                                    <p>Already a member?</p>{" "}
                                    <SignInButton
                                        afterSignInUrl="/"
                                        afterSignUpUrl="/new-user"
                                    />
                                </div>
                            </div>
                        </div>
                        <aside>
                            <h3>New & Interviews</h3>
                            <a href="" className="article__title">
                                Great New Reads for 2024
                            </a>
                            <img
                                src="/book.png"
                                alt=""
                                className="article__cover"
                            />
                            <div className="aside__container">
                                <h3 className="aside__title">
                                    Goodreads Deals Newsletter
                                </h3>
                                <p className="aside__description">
                                    Get notified about sweet deals on books
                                    you&apos;ll love.
                                </p>
                                <form className="aside__form">
                                    <input
                                        type="email"
                                        placeholder="Enter your email address"
                                        className="aside__input"
                                    />
                                    <button className="aside__button">
                                        Sign Up
                                    </button>
                                </form>
                            </div>
                        </aside>
                        <section className="recommendations">
                            <div className="recommendation__container">
                                <h2 className="recommendations__title">
                                    Recommendations For You
                                </h2>
                                <ul className="recommendations__list">
                                    {currentlyReading.map((book) => (
                                        <li key={book._id}>
                                            <a href={`/books/${book._id}`}>
                                                <img
                                                    src={book.cover}
                                                    alt=""
                                                    className="recommendations__card"
                                                />
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="recommendation__container">
                                <h2 className="recommendations__title">
                                    More For You
                                </h2>
                                <ul className="recommendations__list">
                                    {currentlyReading.map((book) => (
                                        <li key={book._id}>
                                            <a href={`/books/${book._id}`}>
                                                <img
                                                    src={book.cover}
                                                    alt=""
                                                    className="recommendations__card"
                                                />
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="recommendation__container">
                                <h2>Recommendations</h2>
                                <ul className="recommendations__list">
                                    {currentlyReading.map((book) => (
                                        <li key={book._id}>
                                            <a href={`/books/${book._id}`}>
                                                <img
                                                    src={book.cover}
                                                    alt=""
                                                    className="recommendations__card"
                                                />
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <h2>Genres</h2>
                            <ul className="genres__list">
                                {genres.map((genre) => (
                                    <li key={genre}>
                                        <a href={`/genres/${genre}`}>{genre}</a>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </div>
                    <Footer />
                </div>
            </SignedOut>
            <SignedIn>
                <Layout>
                    <div className="homepage">
                        <CurrentlyReading
                            books={currentlyReading.slice(0, 3)}
                        />
                        <Feed />
                    </div>
                </Layout>
            </SignedIn>
        </>
    );
}
