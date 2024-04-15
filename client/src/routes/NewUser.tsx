import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

export default function NewUser() {
    const { user } = useUser();
    const navigate = useNavigate();
    if (!user) return <div>Loading</div>;
    const CreateNewUser = async () => {
        console.log("user", user);

        const apiLink =
            process.env.NODE_ENV === "production"
                ? `/api/user`
                : `http://localhost:3000/api/user`;
        try {
            const newUserReq = await fetch(apiLink, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: user?.emailAddresses[0].emailAddress || "",
                    username: user?.username || "",
                    clerkId: user?.id || "",
                }),
            });
            const newUser = await newUserReq.json();

            const shelfApiLink =
                process.env.NODE_ENV === "production"
                    ? `/api/shelf/new-user`
                    : `http://localhost:3000/api/shelf/new-user`;

            await fetch(shelfApiLink, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    userId: newUser._id,
                }),
            });
        } catch (err) {
            console.log(err);
        }
        navigate("/");
    };
    CreateNewUser();
}
