// API service

import axios from "axios";

const API_KEY = "askr_dbfb6f33e7d3c6b6e334b2d420f81465";
const USER_EMAIL = "saad.azghour@gmail.com";
const BOARD_KEY = "887595b735d68f0bc0b0b0535f7d8f7d158a3f4e";

export const fetchJobs = async (
  page: number = 1,
  limit: number = 10,
  order_by: "asc" | "desc" = "desc",
  sort_by: string = "created_at",
  category?: string,
  searchText?: string
) => {
  const response = await axios.get("https://api.hrflow.ai/v1/jobs/searching", {
    headers: {
      "X-API-KEY": API_KEY,
      "X-USER-EMAIL": USER_EMAIL,
    },
    params: {
      board_keys: JSON.stringify([BOARD_KEY]),
      page,
      limit,
      order_by,
      sort_by,
      names: searchText ? `[${searchText}]` : undefined,
    },
  });
  return response.data;
};
