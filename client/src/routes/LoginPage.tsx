import { FormEvent, useState } from "react";
import { redirect } from "react-router-dom";

const initialState = {
    username: "",
    password: "",
};
export default function LoginPage() {
    const [form, setForm] = useState(initialState);

    const handleLogin = async (e: FormEvent) => {
        e.preventDefault();
        try {
            await fetch("http://localhost:3000/api/user/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            }).then(async (res) => {
                const data = await res.json();
                localStorage.setItem("accessToken", data.accessToken);
                localStorage.setItem("refreshToken", data.refreshToken);

                redirect("/");
            });
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div>
            <form onSubmit={(e) => handleLogin(e)}>
                <label htmlFor="">
                    Username
                    <input
                        type="text"
                        autoComplete="username"
                        onChange={(e) =>
                            setForm({ ...form, username: e.target.value })
                        }
                    />
                </label>
                <label htmlFor="">
                    Password
                    <input
                        type="password"
                        autoComplete="current-password"
                        onChange={(e) =>
                            setForm({ ...form, password: e.target.value })
                        }
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
