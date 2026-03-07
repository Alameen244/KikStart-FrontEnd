import Cookies from "js-cookie";
import axios from "axios";

// Central API base URL used by all requests through this instance.
const baseURL = import.meta.env.BASE_URL;

export const axiosInstance = axios.create({
    baseURL
});

axiosInstance.interceptors.request.use(
    (config) => {
        // Read login token from cookie before each outgoing request.
        const token = Cookies.get("loginToken");
        // const token = localStorage.getItem("token")

        if (token) {
            // Attach JWT in Authorization header for protected endpoints.
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => {
        // Forward request setup errors to the calling layer.
        return Promise.reject(error);
    }
);


