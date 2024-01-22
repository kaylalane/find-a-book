export async function createAuthorResource(url) {
    const resource = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    const resourceJson = await resource.json();

    const apiLink =
        process.env.NODE_ENV === "production"
            ? `/api/author`
            : `http://localhost:3000/api/author`;
    const author = await fetch(apiLink, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: resourceJson.name,
            bio: resourceJson.bio,
            birthDate: resourceJson.birth_date,
        }),
    });
}

export async function createBookResource(url) {
    const resource = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    const resourceJson = await resource.json();

    const apiLink =
        process.env.NODE_ENV === "production"
            ? `/api/book`
            : `http://localhost:3000/api/book`;

    const book = await fetch(apiLink, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title,
            authorName,
            authorId,
            ISBN,
            price,
            publishedAt,
            description,
            cover,
            genres,
            pages,
        }),
    });
}
