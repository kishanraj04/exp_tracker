import { exportExpensesCSV } from "../services/expenseService";

export const handleExportCSV = async () => {
  try {
    const res = await exportExpensesCSV();

    const url = window.URL.createObjectURL(
      new Blob([res.data])
    );

    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "expenses.csv");

    document.body.appendChild(link);
    link.click();
    link.remove();

  } catch (error) {
    console.error("CSV Export failed", error);
  }
};