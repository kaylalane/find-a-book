export const fetchBooks = async () => {
    const apiLink =
        process.env.NODE_ENV === "production"
            ? `/api/book`
            : `http://localhost:3000/api/book`;

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
            ? `/api/book/${id}`
            : `http://localhost:3000/api/book/${id}`;

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
            ? `/api/comment/${id}`
            : `http://localhost:3000/api/comment/${id}`;
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
            ? `/api/user/comment/user/${id}`
            : `http://localhost:3000/api/comment/user/${id}`;

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
            ? `/api/review`
            : `http://localhost:3000/api/review`;

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

export const fetchShelves = async ({ queryKey }: { queryKey: string[] }) => {
    const id = queryKey[1];
    
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
