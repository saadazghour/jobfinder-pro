import { render, screen } from "@testing-library/react";
import JobList from "../../components/JobList";
import { Job } from "../../types/job";

const mockJobs: Job[] = [
  {
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
  },
];

describe("JobList", () => {
  const mockSetJobs = jest.fn();
  const mockSetIsDragging = jest.fn();

  test("renders jobs correctly", () => {
    render(
      <JobList
        jobs={mockJobs}
        setJobs={mockSetJobs}
        isDragging={false}
        setIsDragging={mockSetIsDragging}
      />
    );

    expect(screen.getByText(/Software Developer/i)).toBeInTheDocument();
  });
});
