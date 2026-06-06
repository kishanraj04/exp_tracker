import  {
  createExpense,
  getExpenses,
  updateExpense,
  deleteExpense,
  getSummary,
} from "../controllers/expenseController.js";

router.post("/", createExpense);

router.get("/", getExpenses);

router.get("/summary", getSummary);

router.delete("/:id", deleteExpense);

router.get("/export/csv", exportExpensesCSV);

module.exports = router;