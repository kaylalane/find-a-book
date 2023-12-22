import jwt from "jsonwebtoken";
import "dotenv/config";
import { hash, compare } from "bcrypt";

const { sign, verify } = jwt;

export function authenticateToken(req, res, next) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (token == null) return res.status(401).send("Unauthorized");

    verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.status(403).send("Forbidden");
        req.user = user;
        next();
    });
}

export function verifyRefreshToken(refreshToken) {
    verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        const accessToken = generateAccessToken({ name: user.username });
        return accessToken;
    });
}

export function generateAccessToken(user) {
    return sign(user, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "30m",
    });
}

export async function hashPassword(password) {
    return hash(password, 10);
}

export async function comparePasswords(password, hashedPassword) {
    return compare(password, hashedPassword);
}
