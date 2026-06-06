import { useEffect, useState } from "react";
import { getExpenses, getSummary } from "../services/expenseService";

import ExpenseForm from "../components/ExpenseForm";
import ExpenseTable from "../components/ExpenseTable";
import SummaryCards from "../components/SummaryCards";
import FilterBar from "../components/FilterBar";

export default function Dashboard() {
  const [expenses, setExpenses] = useState([]);
  const [summary, setSummary] = useState({});
  const [filters, setFilters] = useState({
    category: "All",
    startDate: "",
    endDate: "",
  });

  const thisMonth = () => {
    const now = new Date();

    const start = new Date(now.getFullYear(), now.getMonth(), 1);

    const end = new Date(now.getFullYear(), now.getMonth() + 1, 0);

    const updated = {
      ...filters,
      startDate: start.toISOString().split("T")[0],
      endDate: end.toISOString().split("T")[0],
    };

    handleFilter(updated);
  };

  const lastMonth = () => {
    const now = new Date();

    const start = new Date(now.getFullYear(), now.getMonth() - 1, 1);

    const end = new Date(now.getFullYear(), now.getMonth(), 0);

    const updated = {
      ...filters,
      startDate: start.toISOString().split("T")[0],
      endDate: end.toISOString().split("T")[0],
    };

    handleFilter(updated);
  };

  const loadData = async (appliedFilters) => {
    const expenseRes = await getExpenses(appliedFilters || filters);
    const summaryRes = await getSummary();
    console.log(expenseRes.data)
    setExpenses(expenseRes.data);
    setSummary(summaryRes.data);
  };

  const handleFilter = (updatedFilters) => {
    setFilters(updatedFilters);
    loadData(updatedFilters);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-4xl font-bold text-slate-800 mb-8">
          Expense Tracker
        </h1>

        <SummaryCards summary={summary} />

        <div className="mt-8">
          <ExpenseForm onSuccess={loadData} />
        </div>

        <div className="bg-white p-5 rounded-2xl shadow-md mt-6 border border-gray-100">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
            {/* Date Range Buttons */}
            <div className="flex gap-3">
              <button
                onClick={thisMonth}
                className="bg-blue-500 hover:bg-blue-600 transition text-white px-4 py-2 rounded-lg shadow-sm"
              >
                This Month
              </button>

              <button
                onClick={lastMonth}
                className="bg-purple-500 hover:bg-purple-600 transition text-white px-4 py-2 rounded-lg shadow-sm"
              >
                Last Month
              </button>
            </div>

            {/* Filter */}
            <div className="w-full md:w-auto">
              <FilterBar onFilter={handleFilter} />
            </div>
          </div>
        </div>

        <div className="mt-8">
          <ExpenseTable
            expenses={expenses}
            onRefresh={loadData}
            filters={filters}
          />
        </div>
      </div>
    </div>
  );
}
