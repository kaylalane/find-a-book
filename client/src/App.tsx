import { lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard from "./routes/Dashboard";
import MyBooks from "./routes/MyBooks";

const NewUser = lazy(() => import("./routes/NewUser"));
const AccountPage = lazy(() => import("./routes/AccountPage"));
const LoginPage = lazy(() => import("./routes/LoginPage"));
const RegisterPage = lazy(() => import("./routes/RegisterPage"));
const AuthorPage = lazy(() => import("./routes/AuthorPage"));
const BookPage = lazy(() => import("./routes/BookPage"));
const ReviewPage = lazy(() => import("./routes/ReviewPage"));
const CommentsPage = lazy(() => import("./routes/CommentsPage"));
const Recommendations = lazy(() => import("./routes/Recommendations"));

const router = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard />,
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
    {
        path: "/comments",
        element: <CommentsPage />,
    },
    {
        path: "/recommendations",
        element: <Recommendations />,
    },
    {
        path: "/list",
        element: <MyBooks />,
    },
]);

export default function App() {
    return <RouterProvider router={router} />;
}
