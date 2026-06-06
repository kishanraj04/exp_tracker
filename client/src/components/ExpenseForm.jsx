import { useState } from "react";
import { createExpense } from "../services/expenseService";

export default function ExpenseForm({
  onSuccess,
}) {
  const [form, setForm] = useState({
    amount: "",
    category: "Food",
    date: "",
    note: "",
  });

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
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="Amount"
        value={form.amount}
        onChange={(e) =>
          setForm({
            ...form,
            amount: e.target.value,
          })
        }
      />

      <select
        value={form.category}
        onChange={(e) =>
          setForm({
            ...form,
            category: e.target.value,
          })
        }
      >
        <option>Food</option>
        <option>Transport</option>
        <option>Bills</option>
        <option>Entertainment</option>
        <option>Other</option>
      </select>

      <input
        type="date"
        value={form.date}
        onChange={(e) =>
          setForm({
            ...form,
            date: e.target.value,
          })
        }
      />

      <input
        placeholder="Note"
        value={form.note}
        onChange={(e) =>
          setForm({
            ...form,
            note: e.target.value,
          })
        }
      />

      <button type="submit">
        Add Expense
      </button>
    </form>
  );
}