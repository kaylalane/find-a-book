export async function getUserFromClerkId(clerkId: string) {
    const apiLink =
        process.env.NODE_ENV === "production"
            ? `/api/user/${clerkId}`
            : `http://localhost:3000/api/user/${clerkId}`;
    const user = await fetch(apiLink, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    const userJson = await user.json();
    return userJson._id;
}
