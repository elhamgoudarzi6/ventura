import axios from "axios";

const BASE_URL = "http://localhost:2516";

export interface Category {
  id: string;
  title: string;
}

export interface CreatePayload {
  title: string;
}

export interface UpdatePayload {
  title?: string;
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

export const categoryApi = {
  async getAll(): Promise<Category[]> {
    const res = await api.get<Category[]>("/getCats");
    return res.data;
  },

  async getById(id: string): Promise<Category> {
    const res = await api.get<Category>(`/getCat/${id}`);
    return res.data;
  },

  async add(data: CreatePayload) {
    const res = await api.post("/addCat", data);
    return res.data;
  },

  async edit(id: string, data: UpdatePayload): Promise<Category> {
    const res = await api.put<Category>(`/editCat/${id}`, data);
    return res.data;
  },

  async delete(id: string): Promise<void> {
    await api.delete(`/deleteCat/${id}`);
  },
  
};
