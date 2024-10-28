import axios from "axios";

export const apiPartners = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL_PARTNERS}`,
});

export const apiCompanies = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL_COMPANIES}`,
});

const handleResponseError = (error: any) => {
  if (
    error.response &&
    (error.response.status === 404 || error.response.status === 500)
  ) {
    console.error("Erro de API:", error.response.status);
  }
  return Promise.reject(error);
};

apiPartners.interceptors.response.use(
  (response) => response,
  handleResponseError
);
apiCompanies.interceptors.response.use(
  (response) => response,
  handleResponseError
);
