import Layout from "../components/Layout";
import { getUserFromClerkId } from "../lib/auth";
import { useClerk } from "@clerk/clerk-react";
import { useEffect } from "react";

export default function MyBooks() {
    const { user } = useClerk();

    useEffect(() => {
        const fetchShelves = async () => {
            const id = await getUserFromClerkId(user?.id || "");

            const apiLink =
                process.env.NODE_ENV === "production"
                    ? `/api/shelf/${id}`
                    : `http://localhost:3000/api/shelf/${id}`;

            const req = await fetch(apiLink, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!req.ok) {
                throw new Error("Network response was not ok");
            }

            return req.json();
        };
        fetchShelves();
    });
    return (
        <Layout>
            <h1>My Books</h1>
        </Layout>
    );
}
