import { FormEvent, useState } from "react";
import { redirect } from "react-router-dom";

const initialState = {
    email: "",
    username: "",
    password: "",
};

export default function RegisterPage() {
    const [form, setForm] = useState(initialState);
    const handleRegister = async (e: FormEvent) => {
        e.preventDefault();
        try {
            await fetch("/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            });

            redirect("/");
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div>
            <form onSubmit={(e) => handleRegister(e)}>
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
                        autoComplete="new-password"
                        onChange={(e) =>
                            setForm({ ...form, password: e.target.value })
                        }
                    />
                </label>
            </form>
        </div>
    );
}
