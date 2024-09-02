// Custom hooks for data fetching, caching, etc.

import { useQuery } from "react-query";
import { fetchJobs } from "../services/hrflowService";

export const useJobs = (
  page: number = 1,
  limit: number = 10,
  order_by: "asc" | "desc" = "desc",
  sort_by: string = "created_at",
  category?: string,
  searchText?: string
) => {
  return useQuery(
    ["jobs", page, limit, order_by, sort_by, category, searchText], // Unique query key
    () => fetchJobs(page, limit, order_by, sort_by, category, searchText),
    {
      keepPreviousData: true, // Optional: Keeps the previous data while fetching new data
    }
  );
};
