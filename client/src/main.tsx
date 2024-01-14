import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/globals.scss";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Homepage from "./routes/Dashboard";
import BookPage from "./routes/BookPage";
import LoginPage from "./routes/LoginPage";
import RegisterPage from "./routes/RegisterPage";
import AccountPage from "./routes/AccountPage";
import ReviewPage from "./routes/ReviewPage";
import AuthorPage from "./routes/AuthorPage";
import { ClerkProvider } from "@clerk/clerk-react";
import { dark } from "@clerk/themes";
import NewUser from "./routes/NewUser";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key");
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage />,
    },
    {
        path: "/new-user",
        element: <NewUser />,
    },
    {
        path: "/account",
        element: <AccountPage />,
    },
    {
        path: "/login",
        element: <LoginPage />,
    },
    {
        path: "/register",
        element: <RegisterPage />,
    },
    {
        path: "/author/:id",
        element: <AuthorPage />,
    },
    {
        path: "/books/:id",
        element: <BookPage />,
    },
    {
        path: "/review/:id",
        element: <ReviewPage />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ClerkProvider
            publishableKey={PUBLISHABLE_KEY}
            appearance={{
                baseTheme: dark,
            }}
        >
            <RouterProvider router={router} />
        </ClerkProvider>
    </React.StrictMode>
);
