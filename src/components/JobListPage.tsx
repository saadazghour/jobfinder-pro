import React, { useEffect, useState } from "react";
import { useJobs } from "../hooks/useJobs";
import JobList from "./JobList";
import FilterBar from "./FilterBar"; // Component for filtering jobs
import { Job } from "../types/job";

// Define types for filter options
type OrderByType = "asc" | "desc";
type SortByType = "created_at" | "updated_at";

interface FilterOptions {
  limit: number;
  order_by: OrderByType;
  sort_by: SortByType;
  category?: string;
  searchText: string;
}

const JobListPage: React.FC = () => {
  const [page, setPage] = useState(1);

  const [filters, setFilters] = useState<FilterOptions>({
    limit: 10,
    order_by: "desc", // Default value
    sort_by: "created_at",
    category: undefined,
    searchText: "",
  });

  const [isDragging, setIsDragging] = useState(false); // Track dragging state
  const [jobs, setJobs] = useState<Job[]>([]);

  // Using the useJobs hook with the correct types
  const { data, isLoading, isError } = useJobs(
    page,
    filters.limit,
    filters.order_by,
    filters.sort_by,
    filters.category,
    filters.searchText
  );

  // Update local state with fetched jobs data
  useEffect(() => {
    if (data) {
      setJobs(data);
    }
  }, [data]);

  const handleFiltersChange = (newFilters: any) => {
    // Reset to the first page when filters change
    setPage(1);
    setFilters({ ...filters, ...newFilters });
  };

  const handlePageChange = (newPage: number) => setPage(newPage);

  return (
    <div>
      <FilterBar onApplyFilters={handleFiltersChange} />

      {isLoading && <p>Loading...</p>}
      {isError && <p>Error fetching jobs</p>}

      {jobs && (
        <JobList
          jobs={jobs}
          setJobs={setJobs}
          // onDragEnd={handleDragEnd}
          isDragging={isDragging}
          setIsDragging={setIsDragging}
        />
      )}

      {/* Pagination controls */}

      <div className="flex justify-center mt-4">
        <button
          className="px-4 py-2 mr-2 text-white bg-blue-500 rounded disabled:bg-gray-300"
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}
        >
          Previous
        </button>

        <button
          className="px-4 py-2 text-white bg-blue-500 rounded disabled:bg-gray-300"
          onClick={() => handlePageChange(page + 1)}
          disabled={jobs && jobs.length < filters.limit}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default JobListPage;
