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
    // Unique query key that depends on all parameters
    ["jobs", page, limit, order_by, sort_by, category, searchText],

    async () => {
      const res = await fetchJobs(
        page,
        limit,
        order_by,
        sort_by,
        category,
        searchText
      );

      const { jobs } = res.data;
      const { meta } = res;

      return { jobs, meta };
    },

    {
      keepPreviousData: true, // Optional: Keeps the previous data while fetching new data
    }
  );
};
