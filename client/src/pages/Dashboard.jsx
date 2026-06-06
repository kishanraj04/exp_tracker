import { useEffect, useState } from "react";
import {
  getExpenses,
  getSummary,
} from "../services/expenseService";

import ExpenseForm from "../components/ExpenseForm";
import ExpenseTable from "../components/ExpenseTable";
import SummaryCards from "../components/SummaryCards";

export default function Dashboard() {
  const [expenses, setExpenses] = useState([]);
  const [summary, setSummary] = useState({});

  const loadData = async () => {
    const expenseRes = await getExpenses();
    const summaryRes = await getSummary();

    setExpenses(expenseRes.data);
    setSummary(summaryRes.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Expense Tracker</h1>

      <SummaryCards summary={summary} />

      <ExpenseForm onSuccess={loadData} />

      <ExpenseTable
        expenses={expenses}
        onRefresh={loadData}
      />
    </div>
  );
}