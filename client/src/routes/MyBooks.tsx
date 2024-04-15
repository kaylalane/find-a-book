import BookTable from "../components/BookTable";
import Layout from "../components/Layout";
import { getUserFromClerkId } from "../lib/auth";
import { useClerk } from "@clerk/clerk-react";
import { useEffect, useState } from "react";

export default function MyBooks() {
    const { user } = useClerk();
    const [shelves, setShelves] = useState<ShelfType[]>([]);

    useEffect(() => {
        const fetchShelves = async () => {
            const id = await getUserFromClerkId(user?.id || "");

            const apiLink =
                process.env.NODE_ENV === "production"
                    ? `/api/shelf/user/${id}`
                    : `http://localhost:3000/api/shelf/user/${id}`;

            const req = await fetch(apiLink, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!req.ok) {
                throw new Error("Network response was not ok");
            }

            const data = await req.json();
            setShelves(data);
        };
        fetchShelves();
    }, [user?.id]);
    return (
        <Layout className="page-padding">
            <h1 className="page__title">My Books</h1>
            {shelves && (
                <div className="shelves">
                    {shelves.map((shelf) => (
                        <div className={shelf.name}>
                            <h2>{shelf.name}</h2>
                            <div className="shelf">
                                <BookTable
                                    bookIds={shelf.books}
                                    key={shelf.name}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </Layout>
    );
}
