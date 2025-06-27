import { encrypt, decrypt } from "./storage";

export interface User {
    _id: string;
    fullName?: string;
    userName: string;
    image?: string;
    type:string;
}

const ADMIN_KEY = "admin";
const ADMIN_TOKEN_KEY = "admin_token";
const USER_KEY = "user";
const USER_TOKEN_KEY = "user_token";

export const saveUser = (user: User, token: string) => {
    const encryptedUser = encrypt(JSON.stringify(user));

    if (user.type === "admin") {
        localStorage.setItem(ADMIN_KEY, encryptedUser);
        localStorage.setItem(ADMIN_TOKEN_KEY, token);
    } else {
        localStorage.setItem(USER_KEY, encryptedUser);
        localStorage.setItem(USER_TOKEN_KEY, token);
    }
};

export const getUser = (type: "admin" | "user"): User | null => {
    const raw = localStorage.getItem(type === "admin" ? ADMIN_KEY : USER_KEY);
    if (!raw) return null;
    try {
        const decrypted = decrypt(raw);
        return JSON.parse(decrypted);
    } catch {
        return null;
    }
};

export const getToken = (type: "admin" | "user"): string | null => {
    return localStorage.getItem(type === "admin" ? ADMIN_TOKEN_KEY : USER_TOKEN_KEY);
};

export const logout = (type: "admin" | "user") => {
    if (type === "admin") {
        localStorage.removeItem(ADMIN_KEY);
        localStorage.removeItem(ADMIN_TOKEN_KEY);
    } else {
        localStorage.removeItem(USER_KEY);
        localStorage.removeItem(USER_TOKEN_KEY);
    }
};
