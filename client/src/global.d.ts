// interface definitions for global variables
interface AccountType {
    _id: string;
    userId: string;
    bio?: string;
    birthDate?: string;
}

interface UserType {
    _id: string;
    username: string;
    clerkId: string;
    profileImg?: string;
    bio?: string;
}

interface AuthorType {
    _id: string;
    name: string;
    bio: string;
    profileImg?: string;
}

interface BookType {
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
    language: string;
    authorName: string;
    authorId: string;
}

interface Book_ReviewType {
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
}

interface CommentType {
    _id: string;
    comment: string;
    createdAt: string;
    updatedAt: string;

    username: string;
    reviewId: string;
    userId: string;
}

interface ShelfType {
    _id: string;
    name: string;
    books: string[];
    userId: string;
}
