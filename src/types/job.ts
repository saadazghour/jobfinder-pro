export interface Job {
  id: string;
  name: string;
  created_at: string;
  summary?: string;
  skills?: { name: string }[];
  location?: {
    text: string;
  };
  tags?: { name: string; value: string }[];

  // start_date?: string;
  // salary?: string;
  // category?: string;
  // company?: string;
}
