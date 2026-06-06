import { deleteExpense } from "../services/expenseService";

export default function ExpenseTable({
  expenses,
  onRefresh,
}) {
  const handleDelete = async (id) => {
    await deleteExpense(id);

    onRefresh();
  };

  return (
    <table border="1">
      <thead>
        <tr>
          <th>Date</th>
          <th>Category</th>
          <th>Amount</th>
          <th>Note</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {expenses.map((expense) => (
          <tr key={expense._id}>
            <td>
              {new Date(
                expense.date
              ).toLocaleDateString()}
            </td>

            <td>{expense.category}</td>

            <td>₹{expense.amount}</td>

            <td>{expense.note}</td>

            <td>
              <button
                onClick={() =>
                  handleDelete(
                    expense._id
                  )
                }
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}