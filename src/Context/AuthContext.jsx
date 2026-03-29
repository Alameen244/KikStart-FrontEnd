import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import { getMe } from "../Apis/authApi";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const refreshAuth = useCallback(async () => {
    const token = Cookies.get("token");
    if (!token) {
      setUser(null);
      setIsAuthenticated(false);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    try {
      const res = await getMe();
      setUser(res?.data || null);
      setIsAuthenticated(Boolean(res?.data?.isVerified));
    } catch (_) {
      Cookies.remove("token");
      setUser(null);
      setIsAuthenticated(false);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    refreshAuth();
  }, [refreshAuth]);

  useEffect(() => {
    const handleSessionExpired = () => {
      setUser(null);
      setIsAuthenticated(false);
      setIsLoading(false);
    };

    window.addEventListener("auth:session-expired", handleSessionExpired);
    return () => window.removeEventListener("auth:session-expired", handleSessionExpired);
  }, []);

  const logout = useCallback(({ redirectTo = "/login", showToast = false } = {}) => {
    Cookies.remove("token");
    setUser(null);
    setIsAuthenticated(false);
    if (showToast) {
      toast.info("Logged out successfully.");
    }
    if (redirectTo) {
      window.location.href = redirectTo;
    }
  }, []);

  const value = useMemo(
    () => ({
      user,
      isAuthenticated,
      isLoading,
      refreshAuth,
      logout,
    }),
    [user, isAuthenticated, isLoading, refreshAuth, logout],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return ctx;
};
