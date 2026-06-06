export default function SummaryCards({ summary }) {
  return (
    <div className="grid md:grid-cols-3 gap-6">

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

      

    </div>
  );
}