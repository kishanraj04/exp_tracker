import { useState } from "react";
import { handleExportCSV } from "../services/exportCsv";

export default function FilterBar({ onFilter }) {
  const [filters, setFilters] = useState({
    category: "All",
    startDate: "",
    endDate: "",
  });

  const handleChange = (e) => {
    setFilters((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleApply = () => {
    onFilter(filters);
  };

  const handleReset = () => {
    const reset = {
      category: "All",
      startDate: "",
      endDate: "",
    };
    setFilters(reset);
    onFilter(reset);
  };

  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-4">
      {/* Top Row */}
      <div className="flex flex-col md:flex-row md:items-center gap-3">
        {/* Category */}
        <select
          name="category"
          value={filters.category}
          onChange={handleChange}
          className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="All">All Categories</option>
          <option value="Food">Food</option>
          <option value="Transport">Transport</option>
          <option value="Bills">Bills</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Other">Other</option>
        </select>

        {/* Date Range Group */}
        <div className="flex flex-1 gap-2">
          <input
            type="date"
            name="startDate"
            value={filters.startDate}
            onChange={handleChange}
            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="date"
            name="endDate"
            value={filters.endDate}
            onChange={handleChange}
            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-2">
          <button
            onClick={handleApply}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl text-sm font-medium transition"
          >
            Apply
          </button>

          <button
            onClick={handleReset}
            className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-5 py-3 rounded-xl text-sm font-medium transition"
          >
            Reset
          </button>

          <button
            onClick={handleExportCSV}
            className="bg-green-600 hover:bg-green-700 text-gray-700 px-5 py-3 rounded-xl text-sm font-medium transition"
          >
            Export CSV
          </button>
        </div>
      </div>
    </div>
  );
}
