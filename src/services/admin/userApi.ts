import axios from "axios";

const BASE_URL = "http://localhost:2516";

export interface User {
    id: number;
    name: string;
    email: string;
    mobile?: string;
}

export interface CreatePayload {
    name: string;
    email: string;
    password: string;
    mobile?: string;
}

export interface UpdatePayload {
    name?: string;
    email?: string;
    password?: string;
    mobile?: string;
}

const api = axios.create({
    baseURL: `${BASE_URL}/admin`,
    headers: { "Content-Type": "application/json" },
    withCredentials: true,
});

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token && config.headers) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

export const userApi = {
    async getAll(): Promise<User[]> {
        const res = await api.get<User[]>("/getUsers");
        return res.data;
    },

    async getById(id: number): Promise<User> {
        const res = await api.get<User>(`/users/${id}`);
        return res.data;
    },

    async add(data: CreatePayload): Promise<User> {
        const res = await api.post<User>("/addUser", data);
        return res.data;
    },

    async edit(id: number, data: UpdatePayload): Promise<User> {
        const res = await api.put<User>(`/editUser/${id}`, data);
        return res.data;
    },

    async delete(id: number): Promise<void> {
        await api.delete(`/deleteUser/${id}`);
    },
};
