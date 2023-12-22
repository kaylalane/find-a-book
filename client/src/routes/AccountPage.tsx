import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function AccountPage() {
    const [user, setUser] = useState<User>();
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
    return <div>{user && <div>{user.email}</div>}</div>;
}
