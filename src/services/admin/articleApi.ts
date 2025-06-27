import axios from "axios";

const BASE_URL = "http://localhost:2516";

export interface Article {
    id: string;
    title: string;
    image?: string;
    description?: string;
    date?: string;
    author?: string;
    cat: string;
}

export interface CreatePayload {
    title: string;
    image?: string;
    description?: string;
    date?: string;
    author?: string;
    cat: string;
}

export interface UpdatePayload {
    title?: string;
    image?: string;
    description?: string;
    date?: string;
    author?: string;
    cat?: string;
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

export const articleApi = {
    async getAll(): Promise<Article[]> {
        const res = await api.get<Article[]>("/getArticles");
        return res.data;
    },

    async getById(id: string): Promise<Article> {
        const res = await api.get<Article>(`/getArticle/${id}`);
        return res.data;
    },

    async add(data: CreatePayload) {
        const res = await api.post("/addArticle", data);
        return res.data;
    },

    async edit(id: string, data: UpdatePayload): Promise<Article> {
        const res = await api.put<Article>(`/editArticle/${id}`, data);
        return res.data;
    },

    async delete(id: string): Promise<void> {
        await api.delete(`/deleteArticle/${id}`);
    },
};
