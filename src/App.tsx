import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { SnackbarProvider } from "notistack";
import { QuestionsContextProvider } from "./contexts/QuestionsContext";

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <QuestionsContextProvider>
      <SnackbarProvider>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <RouterProvider router={router} />
        </QueryClientProvider>
      </SnackbarProvider>
    </QuestionsContextProvider>
  );
}

export default App;
