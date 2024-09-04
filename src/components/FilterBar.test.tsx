import { render, fireEvent, screen } from "@testing-library/react";
import FilterBar from "./FilterBar";

describe("FilterBar", () => {
  const mockOnApplyFilters = jest.fn();

  test("renders correctly with default values", () => {
    render(<FilterBar onApplyFilters={mockOnApplyFilters} />);

    // Check if search input is rendered
    expect(
      screen.getByPlaceholderText(/Search jobs by name/i)
    ).toBeInTheDocument();
  });

  test("calls onApplyFilters with correct values on button click", () => {
    render(<FilterBar onApplyFilters={mockOnApplyFilters} />);

    // Fill search input
    fireEvent.change(screen.getByPlaceholderText(/Search jobs by name/i), {
      target: { value: "Developer" },
    });

    // Click apply filters
    fireEvent.click(screen.getByText(/Apply Filters/i));

    // Check if the function was called with correct values
    expect(mockOnApplyFilters).toHaveBeenCalledWith({
      searchText: "Developer",
      category: undefined,
      order_by: "desc",
      sort_by: "created_at",
    });
  });
});
