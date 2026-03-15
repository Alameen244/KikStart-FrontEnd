import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "@emotion/react";
import App from "./App.jsx";
import { theme } from "./theme.js";
import { StyledEngineProvider } from "@mui/material/styles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./Context/AuthContext.jsx";
import { Auth0Provider } from "@auth0/auth0-react";
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StyledEngineProvider injectFirst>
    <ThemeProvider theme={theme}>
      <Auth0Provider
        domain="dev-2yibojpzhpritks2.us.auth0.com"
        clientId="zGPH7YsSUOEQP4011jieSdZc5TX8R0sz"
        authorizationParams={{ redirect_uri: "http://localhost:5100" }}
      >
        <AuthProvider>
          <QueryClientProvider client={queryClient}>
            <App />
            <ToastContainer
              position="top-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={true}
              closeOnClick={true}
              rtl={false}
              pauseOnFocusLoss={true}
              draggable={true}
              pauseOnHover={true}
              theme="light"
              transition={Bounce}
            />
          </QueryClientProvider>
        </AuthProvider>
      </Auth0Provider>
    </ThemeProvider>
  </StyledEngineProvider>,
);
