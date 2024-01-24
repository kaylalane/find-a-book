// Type definitions for global variables
type AccountType = {
    _id: string;
    userId: string;
};

type UserType = {
    _id: string;
    name: string;
    email: string;
    password: string;
    profileImg?: string;
    bio?: string;
    refreshToken: string;
};

type AuthorType = {
    _id: string;
    name: string;
    bio: string;
    profileImg?: string;
};

type BookType = {
    _id: string;
    ISBN: string;
    title: string;
    publishedAt: Date;

    overallRating: number;
    numberOfReviews: number;
    description: string;
    cover: string;
    price: number;
    genres: string[];
    pages?: number;
    authorName: string;
    authorId: string;
};

type Book_ReviewType = {
    _id: string;
    review: string;
    createdAt: string;
    updatedAt: string;

    overallRating: number;

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

    username: string;
    reviewId: string;
    userId: string;
};

type ShelfType = {
    _id: string;
    name: string;
    description: string;
    books: BookType[];
    userId: string;
};
