export default function SummaryCards({
  summary,
}) {
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        marginBottom: "20px",
      }}
    >
      <div>
        <h3>Total This Month</h3>

        <p>
          ₹
          {summary.totalSpentThisMonth || 0}
        </p>
      </div>

      <div>
        <h3>Highest Expense</h3>

        <p>
          ₹
          {summary.highestExpense?.amount ||
            0}
        </p>
      </div>
    </div>
  );
}