import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import RoutesConfig from "./config/routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 20, // 20 min
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RoutesConfig />
    </QueryClientProvider>
  </StrictMode>
);
