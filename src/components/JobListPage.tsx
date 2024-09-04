import React, { useEffect, useState } from "react";
import { useJobs } from "../hooks/useJobs";
import JobList from "./JobList";
import FilterBar from "./FilterBar"; // Component for filtering jobs
import { Job } from "../types/job";
import { Spinner } from "../components/Spinner";

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

  const [meta, setMeta] = useState<any>(null); // State to store meta information

  // Using the useJobs hook with the correct types
  const { data, isLoading, isError, isSuccess } = useJobs(
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
      const { jobs, meta } = data;

      setJobs(jobs);
      setMeta(meta);
    }
  }, [data]);

  const handleFiltersChange = (newFilters: any) => {
    // Reset to the first page when filters change

    // console.log("newFilters logged", newFilters);

    setPage(1);
    setFilters({ ...filters, ...newFilters });
  };

  const handlePageChange = (newPage: number) => setPage(newPage);

  return (
    <div>
      <FilterBar onApplyFilters={handleFiltersChange} />

      {isLoading && (
        <div className="flex items-center justify-center mt-8">
          <Spinner />
        </div>
      )}

      {isError && (
        <p className="mt-8 text-center text-red-500">Error fetching jobs.</p>
      )}

      {isSuccess && jobs.length === 0 && (
        <p className="mt-8 text-center text-gray-500">No jobs found.</p>
      )}

      {isSuccess && jobs.length > 0 && (
        <JobList
          jobs={jobs}
          setJobs={setJobs}
          // onDragEnd={handleDragEnd}
          isDragging={isDragging}
          setIsDragging={setIsDragging}
        />
      )}

      {/* Pagination controls */}

      {isSuccess && meta && meta.maxPage > 1 && (
        <div className="flex justify-center mt-4">
          <button
            className="px-4 py-2 mr-2 text-white bg-blue-500 rounded disabled:bg-gray-300"
            onClick={() => handlePageChange(page - 1)}
            disabled={page === 1}
          >
            Previous
          </button>

          <span className="px-4 py-2">
            Page {meta.page} of {meta.maxPage}
          </span>

          <button
            className="px-4 py-2 text-white bg-blue-500 rounded disabled:bg-gray-300"
            onClick={() => handlePageChange(page + 1)}
            disabled={page === meta.maxPage}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default JobListPage;
