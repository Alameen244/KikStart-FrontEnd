import Cookies from "js-cookie";
import axios from "axios";
import { toast } from "react-toastify";

// Central API base URL used by all requests through this instance.
const baseURL = import.meta.env.VITE_API_URL || "http://localhost:3000";
export const axiosInstance = axios.create({
    baseURL
});

const protectedPaths = ["/reset-password", "/become-a-coach", "/subs"];
const isProtectedPath = (pathname) =>
    protectedPaths.some((path) => pathname === path || pathname.startsWith(`${path}/`));

axiosInstance.interceptors.request.use(
    (config) => {
        // Read login token from cookie before each outgoing request.
        const token = Cookies.get("token");
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

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        const status = error?.response?.status;
        if (status === 401) {
            const hadToken = Boolean(Cookies.get("token"));
            Cookies.remove("token");
            window.dispatchEvent(new CustomEvent("auth:session-expired"));

            if (hadToken && !window.__sessionToastShown) {
                window.__sessionToastShown = true;
                toast.error("Session expired. Please login again.");
                setTimeout(() => {
                    window.__sessionToastShown = false;
                }, 2500);
            }

            const pathname = window.location.pathname;
            if (isProtectedPath(pathname)) {
                window.location.href = "/login";
            }
        }

        return Promise.reject(error);
    },
);

