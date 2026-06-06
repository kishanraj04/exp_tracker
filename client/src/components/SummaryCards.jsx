import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export default function SummaryCards({ summary }) {
    console.log(summary)
     const chartData = summary?.totalPerCategory?.map(item => ({
    name: item._id,
    value: item.total
  })) || [];

  console.log(chartData)
  return (
    <div className="grid md:grid-cols-4 gap-6">

      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-gray-500 text-sm">
          Total This Month
        </h3>

        <p className="text-3xl font-bold text-green-600 mt-2">
          ₹{summary.totalSpentThisMonth || 0}
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-gray-500 text-sm">
          Highest Expense
        </h3>

        <p className="text-3xl font-bold text-red-500 mt-2">
          ₹{summary.highestExpense?.amount || 0}
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-gray-500 text-sm">
          Categories
        </h3>

        <p className="text-3xl font-bold text-blue-500 mt-2">
          {summary.totalPerCategory?.length || 0}
        </p>
      </div>
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