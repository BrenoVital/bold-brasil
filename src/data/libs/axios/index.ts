import axios from "axios";
import { useAuthStore } from "../../store/authStore";

export const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}`,
});

api.interceptors.request.use(
  (config) => {
    const auth = useAuthStore.getState();
    const token = auth.auth?.token.accessToken;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    const auth = useAuthStore.getState();
    if (error.response.status === 401) {
      auth.logout();
    }
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    if (response.status === 401 || response.status === 402) {
      const auth = useAuthStore.getState();
      auth.logout();
    }

    return response;
  },
  (error) => {
    if (error.response.status === 401 || error.response.status === 402) {
      const auth = useAuthStore.getState();
      auth.logout();
    }
    return Promise.reject(error);
  }
);
