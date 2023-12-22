// Type definitions for global variables
type Account = {
    _id: string;
    userId: string;
};

type User = {
    _id: string;
    name: string;
    email: string;
    password: string;
    profileImg?: string;
    bio?: string;
    refreshToken: string;
};

type Author = {
    _id: string;
    name: string;
    bio: string;
    profileImg?: string;
};

type Book = {
    _id: string;
    ISBN: string;
    title: string;
    publishedAt: string;

    description: string;
    cover: string;
    price: number;
    genre: string[];
    pages?: number;
    authorName: string;
    authorId: string;
};

type Book_Review = {
    _id: string;
    review: string;
    createdAt: string;
    updatedAt: string;

    overall_rating: number;

    bookId: string;
    bookName: string;

    authorId: string;
    userId: string;
    userName: string;
};

type CommentType = {
    _id: string;
    comment: string;
    createdAt: string;
    updatedAt: string;

    userName: string;
    reviewId: string;
    userId: string;
};
