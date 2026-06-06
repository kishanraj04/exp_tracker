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
  <div className="min-h-screen bg-slate-100">
    <div className="max-w-7xl mx-auto p-6">

      <h1 className="text-4xl font-bold text-slate-800 mb-8">
        Expense Tracker
      </h1>

      <SummaryCards summary={summary} />

      <div className="mt-8">
        <ExpenseForm onSuccess={loadData} />
      </div>

      <div className="mt-8">
        <ExpenseTable
          expenses={expenses}
          onRefresh={loadData}
        />
      </div>

    </div>
  </div>
);
}