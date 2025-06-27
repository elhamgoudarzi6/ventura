import axios from "axios";

const BASE_URL = "http://localhost:2516";

export interface Admin {
  _id: string;
  userName: string;
  fullName?: string;
  mobile?: string;
  image?: string;
  type: string;
}

export interface CreatePayload {
  userName: string;
  password: string;
  fullName?: string;
  mobile?: string;
}

export interface UpdatePayload {
  userName?: string;
  password?: string;
  fullName?: string;
  mobile?: string;
}

export interface LoginResponse {
  data: Admin;
  token: string;
  success: boolean;
}

const api = axios.create({
  baseURL: `${BASE_URL}/admin`,
  headers: { "Content-Type": "application/json" },
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

export const adminApi = {
  async getAll(): Promise<Admin[]> {
    const res = await api.get<Admin[]>("/getAdmins");
    return res.data;
  },

  async getById(id: string): Promise<Admin> {
    const res = await api.get<Admin>(`/getAdmin/${id}`);
    return res.data;
  },

  async add(data: CreatePayload): Promise<Admin> {
    const res = await api.post<Admin>("/addAdmin", data);
    return res.data;
  },

  async edit(id: string, data: UpdatePayload): Promise<Admin> {
    const res = await api.put<Admin>(`/editAdmin/${id}`, data);
    return res.data;
  },

  async delete(id: string): Promise<void> {
    await api.delete(`/deleteAdmin/${id}`);
  },

  async login(userName: string, password: string): Promise<LoginResponse> {
    const res = await api.post<LoginResponse>("/login", { userName, password });
    return res.data;
  },
};
