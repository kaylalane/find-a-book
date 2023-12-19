import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/globals.scss";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Homepage from "./routes/Homepage";
import BookPage from "./routes/BookPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage />,
    },
    {
        path: "/books/:id",
        element: <BookPage />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
