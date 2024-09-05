import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import JobListPage from "../../components/JobListPage";

const queryClient = new QueryClient();

describe("JobListPage", () => {
  test("renders without crashing", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <JobListPage />
      </QueryClientProvider>
    );

    expect(
      screen.getByPlaceholderText(/Search jobs by name/i)
    ).toBeInTheDocument();
  });
});
