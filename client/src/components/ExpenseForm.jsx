import { useState } from "react";
import { createExpense } from "../services/expenseService";

export default function ExpenseForm({ onSuccess }) {
  const [form, setForm] = useState({
    amount: "",
    category: "Food",
    date: "",
    note: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await createExpense(form);

    setForm({
      amount: "",
      category: "Food",
      date: "",
      note: "",
    });

    onSuccess();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow-md"
    >
      <h2 className="text-xl font-semibold mb-4">
        Add Expense
      </h2>

      <div className="grid md:grid-cols-5 gap-4 items-center">
  <input
    type="number"
    name="amount"
    placeholder="Amount"
    value={form.amount}
    onChange={handleChange}
    className="border rounded-lg p-3"
  />

  <select
    name="category"
    value={form.category}
    onChange={handleChange}
    className="border rounded-lg p-3"
  >
    <option value="Food">Food</option>
    <option value="Transport">Transport</option>
    <option value="Bills">Bills</option>
    <option value="Entertainment">Entertainment</option>
    <option value="Other">Other</option>
  </select>

  <input
    type="date"
    name="date"
    value={form.date}
    onChange={handleChange}
    className="border rounded-lg p-3"
  />

  <input
    type="text"
    name="note"
    placeholder="Note"
    value={form.note}
    onChange={handleChange}
    className="border rounded-lg p-3"
  />

  <button
    type="submit"
    className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700 h-fit" >
    Add Expense
  </button>
</div>
    </form>
  );
}