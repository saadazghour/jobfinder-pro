import { render, fireEvent, screen } from "@testing-library/react";
import JobCard from "./JobCard";
import { Job } from "../types/job";

// Mock data for a job
const mockJob: Job = {
  id: "1",
  name: "Software Developer",
  created_at: "2023-08-01T00:00:00.000Z",
  summary: "Develop amazing applications.",
  skills: [{ name: "React" }, { name: "TypeScript" }],
  location: { text: "New York" },
  tags: [
    { name: "category", value: "IT" },
    { name: "company", value: "Tech Corp" },
  ],
};

describe("JobCard", () => {
  test("renders job details correctly", () => {
    render(<JobCard job={mockJob} isDragging={false} />);

    expect(screen.getByText(/Software Developer/i)).toBeInTheDocument();
    expect(screen.getByText(/Created on/i)).toBeInTheDocument();
  });

  test("expands and collapses details on click", () => {
    render(<JobCard job={mockJob} isDragging={false} />);
    const jobCard = screen.getByText(/Software Developer/i);

    expect(screen.queryByText(/Develop amazing applications/i)).toBeNull();

    fireEvent.click(jobCard);

    expect(
      screen.getByText(/Develop amazing applications/i)
    ).toBeInTheDocument();

    fireEvent.click(jobCard);

    expect(screen.queryByText(/Develop amazing applications/i)).toBeNull();
  });
});
