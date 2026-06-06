import  {
  createExpense,
  getExpenses,
  updateExpense,
  deleteExpense,
  getSummary,
  exportExpensesCSV,
} from "../controllers/expenseController.js";
import express from "express";

const router = express.Router();


router.post("/expenses", createExpense);

router.get("/expenses", getExpenses);

router.get("/expenses/summary", getSummary);

router.put("/expenses/:id", updateExpense);

router.delete("/expenses/:id", deleteExpense);

router.get("/export/csv", exportExpensesCSV);

export default router;