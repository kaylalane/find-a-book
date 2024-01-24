export const fetchBooks = async () => {
    const apiLink =
        process.env.NODE_ENV === "production"
            ? `/api/books`
            : `http://localhost:3000/api/books`;

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

export const fetchBookById = async ({ queryKey }: { queryKey: string[] }) => {
    const id = queryKey[1];
    const apiLink =
        process.env.NODE_ENV === "production"
            ? `/api/books/${id}`
            : `http://localhost:3000/api/books/${id}`;

    const book = await fetch(apiLink, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!book.ok) {
        throw new Error(`/blog/${id} is not okay`);
    }

    return book.json();
};

export const fetchAuthorById = async ({ queryKey }: { queryKey: string[] }) => {
    const id = queryKey[1];
    const apiLink =
        process.env.NODE_ENV === "production"
            ? `/api/author/${id}`
            : `http://localhost:3000/api/author/${id}`;

    const author = await fetch(apiLink, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!author.ok) {
        throw new Error(`/blog/${id} is not okay`);
    }

    return author.json();
};

export const fetchBookReviews = async ({
    queryKey,
}: {
    queryKey: string[];
}) => {
    const id = queryKey[1];
    const apiLink =
        process.env.NODE_ENV === "production"
            ? `/api/comments/${id}`
            : `http://localhost:3000/api/comments/${id}`;
    const req = await fetch(apiLink, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    return req.json();
};

export const fetchAllUserComments = async ({
    queryKey,
}: {
    queryKey: string[];
}) => {
    const id = queryKey[1];

    const apiLink =
        process.env.NODE_ENV === "production"
            ? `/api/user/comments/user/${id}`
            : `http://localhost:3000/api/comments/user/${id}`;

    const res = await fetch(apiLink, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!res.ok) {
        throw new Error("Network response was not ok");
    }

    return res.json();
};

export const fetchReviews = async () => {
    const apiLink =
        process.env.NODE_ENV === "production"
            ? `/api/reviews`
            : `http://localhost:3000/api/reviews`;

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
