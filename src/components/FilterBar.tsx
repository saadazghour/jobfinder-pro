import React, { useState } from "react";

interface FilterBarProps {
  onApplyFilters: (filters: any) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ onApplyFilters }) => {
  const [searchText, setSearchText] = useState<string>("");
  const [category, setCategory] = useState<string | undefined>(undefined);

  const [orderBy, setOrderBy] = useState<"asc" | "desc">("desc");
  const [sortBy, setSortBy] = useState<string>("created_at");

  // Function to handle applying filters, when the user interacts with the elements.
  const handleApplyFilters = () => {
    onApplyFilters({
      searchText,
      category,
      order_by: orderBy,
      sort_by: sortBy,
    });
  };

  return (
    <div className="flex flex-col items-center gap-4 p-4 mb-4 bg-gray-100 rounded-md sm:flex-row">
      {/* Search Input */}
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Search jobs by name..."
        className="w-full p-2 border rounded-md sm:w-auto"
      />

      {/* Category Dropdown */}
      <select
        onChange={(e) => setCategory(e.target.value)}
        value={category}
        className="p-2 border rounded-md"
      >
        <option value="">All Categories</option>
        <option value="AI / Research & Development">
          AI / Research & Development
        </option>
        <option value="Artificial intelligence">Artificial Intelligence</option>
        <option value="Financial Services">Financial Services</option>
        <option value="Human resources">Human Resources</option>
        <option value="Software engineering">Software Engineering</option>
      </select>

      {/* Sorting Options */}
      <select
        onChange={(e) => setOrderBy(e.target.value as "asc" | "desc")}
        value={orderBy}
        className="p-2 border rounded-md"
      >
        <option value="desc">Descending</option>
        <option value="asc">Ascending</option>
      </select>

      <select
        onChange={(e) => setSortBy(e.target.value)}
        value={sortBy}
        className="p-2 border rounded-md"
      >
        <option value="created_at">Creation Date</option>
        <option value="name">Name</option>
        <option value="category">Category</option>
      </select>

      {/* Apply Filters Button */}
      <button
        onClick={handleApplyFilters}
        className="p-2 text-white bg-blue-500 rounded-md"
      >
        Apply Filters
      </button>
    </div>
  );
};

export default FilterBar;
