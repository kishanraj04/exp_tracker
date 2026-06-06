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

module.exports = router;