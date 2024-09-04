import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import JobListPage from "./JobListPage";

const queryClient = new QueryClient();

describe("JobListPage", () => {
  test("renders without crashing", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <JobListPage />
      </QueryClientProvider>
    );

    // Check if filter bar is rendered
    expect(
      screen.getByPlaceholderText(/Search jobs by name/i)
    ).toBeInTheDocument();
  });
});
