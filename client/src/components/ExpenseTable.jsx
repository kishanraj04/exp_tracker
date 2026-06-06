import { deleteExpense } from "../services/expenseService";
import { toast } from "react-toastify";

export default function ExpenseTable({
  expenses,
  onRefresh,
}) {
  const handleDelete = async (id) => {
    const response = await deleteExpense(id);
    if(response?.status === 201){
      toast.error("Expense deleted successfully");
    }
    onRefresh();
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">

  <table className="w-full">

    <thead className="bg-slate-100">
      <tr>
        <th className="p-4 text-left">Date</th>
        <th className="p-4 text-left">Category</th>
        <th className="p-4 text-left">Amount</th>
        <th className="p-4 text-left">Note</th>
        <th className="p-4 text-left">Action</th>
      </tr>
    </thead>

    <tbody>
      {expenses.map((expense) => (
        <tr
          key={expense._id}
          className="border-t"
        >
          <td className="p-4">
            {new Date(
              expense.date
            ).toLocaleDateString()}
          </td>

          <td className="p-4">
            {expense.category}
          </td>

          <td className="p-4 font-semibold">
            ₹{expense.amount}
          </td>

          <td className="p-4">
            {expense.note}
          </td>

          <td className="p-4">
            <button
              className="bg-red-500 text-white px-3 py-1 rounded"
             onClick={()=>{handleDelete(expense._id)
                
             }}>
              Delete
            </button>
          </td>
        </tr>
      ))}
    </tbody>

  </table>

</div>
  );
}