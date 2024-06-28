import React from "react";
import { router } from "@/router";
import { RouterProvider } from "@tanstack/react-router";
import ReactDOM from "react-dom/client";

import "@/assets/styles/index.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
);
