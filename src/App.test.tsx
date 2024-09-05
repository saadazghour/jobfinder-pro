import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

test("renders the Job Finder Pro", () => {
  render(
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  );

  const headingElement = screen.getByText(/Job Finder Pro/i);
  expect(headingElement).toBeInTheDocument();
});
