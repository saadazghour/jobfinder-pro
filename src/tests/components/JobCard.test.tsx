import { render, fireEvent, screen } from "@testing-library/react";
import JobCard from "../../components/JobCard";
import { Job } from "../../types/job";

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

  // TODO:
  // test("expands and collapses details on click", async () => {
  //   render(<JobCard job={mockJob} isDragging={false} />);

  //   const toggleButton = screen.getByRole("button", { name: /Expand/i });

  //   fireEvent.click(toggleButton);

  //   const expandedContent = await screen.findByText(
  //     /Develop amazing applications/i
  //   );
  //   expect(expandedContent).toBeInTheDocument();

  //   fireEvent.click(toggleButton);

  //   expect(screen.queryByText(/Develop amazing applications/i)).toBeNull();
  // });
});
