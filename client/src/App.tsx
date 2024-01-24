import { Suspense, lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard from "./routes/Dashboard";
import MyBooks from "./routes/MyBooks";
import BookPageSkeleton from "./components/skeletons/BookPageSkeleton";
import Layout from "./components/Layout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThreeDots } from "react-loader-spinner";

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
        element: (
            <Suspense
                fallback={
                    <ThreeDots
                        visible={true}
                        height="80"
                        width="80"
                        color="#4fa94d"
                        radius="9"
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                    />
                }
            >
                <Dashboard />
            </Suspense>
        ),
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
        element: (
            <Layout>
                <Suspense fallback={<BookPageSkeleton />}>
                    <BookPage />
                </Suspense>
            </Layout>
        ),
    },
    {
        path: "/review/:id",
        element: (
            <Layout>
                <ReviewPage />
            </Layout>
        ),
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
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: Infinity,
            gcTime: Infinity,
        },
    },
});

export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
        </QueryClientProvider>
    );
}
