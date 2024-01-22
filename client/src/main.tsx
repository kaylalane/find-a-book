import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/globals.scss";
import { ClerkProvider } from "@clerk/clerk-react";
import { dark } from "@clerk/themes";
import App from "./App";
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key");
}

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ClerkProvider
            publishableKey={PUBLISHABLE_KEY}
            appearance={{
                baseTheme: dark,
            }}
        >
            <App />
        </ClerkProvider>
    </React.StrictMode>
);
