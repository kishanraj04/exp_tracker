import { useState } from "react";

export default function FilterBar({
  onFilter,
}) {
  const [filters, setFilters] = useState({
    category: "All",
    startDate: "",
    endDate: "",
  });

  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-md mb-6">
      <div className="grid md:grid-cols-4 gap-4">

        <select
          name="category"
          value={filters.category}
          onChange={handleChange}
          className="border p-3 rounded"
        >
          <option value="All">
            All Categories
          </option>
          <option value="Food">
            Food
          </option>
          <option value="Transport">
            Transport
          </option>
          <option value="Bills">
            Bills
          </option>
          <option value="Entertainment">
            Entertainment
          </option>
          <option value="Other">
            Other
          </option>
        </select>

        <input
          type="date"
          name="startDate"
          value={filters.startDate}
          onChange={handleChange}
          className="border p-3 rounded"
        />

        <input
          type="date"
          name="endDate"
          value={filters.endDate}
          onChange={handleChange}
          className="border p-3 rounded"
        />

        <button
          onClick={() =>
            onFilter(filters)
          }
          className="bg-blue-600 text-white rounded"
        >
          Apply Filters
        </button>

      </div>
    </div>
  );
}