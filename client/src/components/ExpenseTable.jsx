import { useState } from "react";
import { deleteExpense, updateExpense } from "../services/expenseService";
import { toast } from "react-toastify";
import { formValidator } from "../services/formValidator";

export default function ExpenseTable({ expenses, onRefresh }) {
  const [openModal, setOpenModal] = useState(false);

  const [editingId, setEditingId] = useState("");

  const [editForm, setEditForm] = useState({
    amount: "",
    category: "",
    date: "",
    note: "",
  });

  const handleDelete = async (id) => {
    const response = await deleteExpense(id);
    if (response?.status === 201) {
      toast.error("Expense deleted successfully");
    }
    onRefresh();
  };

  const onEdit = (expense) => {
    setEditingId(expense._id);

    setEditForm({
      amount: expense.amount,
      category: expense.category,
      date: expense.date.split("T")[0],
      note: expense.note || "",
    });

    setOpenModal(true);
  };

  const handleUpdate = async () => {
    try {
      formValidator(editForm);
      const response = await updateExpense(editingId, editForm);
      console.log(response);
      if (response.status === 201) {
        toast.success("Expense updated successfully");

        setOpenModal(false);

        onRefresh();
         setOpenModal(false)
      }
    } catch (error) {
      toast.error("Update failed");
    }
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
            <tr key={expense._id} className="border-t">
              <td className="p-4">
                {new Date(expense.date).toLocaleDateString()}
              </td>

              <td className="p-4">{expense.category}</td>

              <td className="p-4 font-semibold">₹{expense.amount}</td>

              <td className="p-4">{expense.note}</td>

              <td className="p-4 flex gap-2">
                <button
                  onClick={() => onEdit(expense)}
                  className="flex-1 bg-yellow-500 text-white py-1 rounded"
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(expense._id)}
                  className="flex-1 bg-red-500 text-white py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {openModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white w-[500px] rounded-xl p-6 shadow-xl">
            <h2 className="text-2xl font-semibold mb-4">Edit Expense</h2>

            <div className="space-y-4">
              <input
                type="number"
                value={editForm.amount}
                onChange={(e) =>
                  setEditForm({
                    ...editForm,
                    amount: e.target.value,
                  })
                }
                placeholder="Amount"
                className="w-full border p-3 rounded"
              />

              <select
                value={editForm.category}
                onChange={(e) =>
                  setEditForm({
                    ...editForm,
                    category: e.target.value,
                  })
                }
                className="w-full border p-3 rounded"
              >
                <option value="Food">Food</option>
                <option value="Transport">Transport</option>
                <option value="Bills">Bills</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Other">Other</option>
              </select>

              <input
                type="date"
                value={editForm.date}
                onChange={(e) =>
                  setEditForm({
                    ...editForm,
                    date: e.target.value,
                  })
                }
                className="w-full border p-3 rounded"
              />

              <input
                type="text"
                value={editForm.note}
                onChange={(e) =>
                  setEditForm({
                    ...editForm,
                    note: e.target.value,
                  })
                }
                placeholder="Note"
                className="w-full border p-3 rounded"
              />
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setOpenModal(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>

              <button
                onClick={handleUpdate}
                className="bg-green-600 text-white px-4 py-2 rounded"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
