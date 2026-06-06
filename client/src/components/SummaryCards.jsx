import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { formatCurrency } from "../services/formatingCurrency";

export default function SummaryCards({ summary }) {
  console.log(summary);

  const chartData =
    summary?.totalPerCategory?.map((item) => ({
      name: item._id,
      value: item.total,
    })) || [];

  return (
    <div className="grid md:grid-cols-4 gap-6">

      {/* 1. Total This Month */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-gray-500 text-sm">Total This Month</h3>

        <p className="text-3xl font-bold text-green-600 mt-2">
          {formatCurrency(summary?.totalSpentThisMonth || 0)}
        </p>
      </div>

      {/* 2. Highest Expense */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-gray-500 text-sm">Highest Expense</h3>

        <p className="text-lg font-semibold text-gray-800 mt-2">
          {summary?.highestExpense?.name || summary?.highestExpense?.category}
        </p>

        <p className="text-2xl font-bold text-red-500">
          {formatCurrency(
            summary?.highestExpense?.value ||
            summary?.highestExpense?.amount ||
            0
          )}
        </p>
      </div>

      {/* 3. Categories Count */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-gray-500 text-sm">Categories</h3>

      <div className="mt-3 space-y-2">
  {summary?.totalPerCategory?.map((item) => (
    <div
      key={item._id}
      className="flex justify-between items-center bg-gray-50 px-3 py-2 rounded-lg"
    >
      <span className="text-gray-700 font-medium">
        {item._id}
      </span>

      <span className="text-blue-600 font-bold">
        ₹{item.total}
      </span>
    </div>
  ))}
</div>
      </div>

      {/* 4. Bar Chart */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-gray-500 text-sm mb-3">
          Category Wise Spending
        </h3>

        <div style={{ width: "100%", height: 200 }}>
          <ResponsiveContainer>
            <BarChart data={chartData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

    </div>
  );
}