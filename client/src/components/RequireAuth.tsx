import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import LoginPage from "../routes/LoginPage";

export default function RequireAuth({
    children,
}: {
    children: React.ReactNode;
}) {
    const [user, setUser] = useState<User | undefined>();
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUser = async () => {
            const accessToken = localStorage.getItem("accessToken");
            try {
                const req = await fetch(
                    `http://localhost:3000/api/user/${params.id}`,
                    {
                        method: "GET",
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                        },
                    }
                );

                setUser(await req.json());
            } catch (err) {
                navigate("/login");
            }
        };
        fetchUser();
    }, [params]);
    return <>{user ? children : <LoginPage />}</>;
}
