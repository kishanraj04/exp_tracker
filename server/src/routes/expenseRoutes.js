import  {
  createExpense,
  getExpenses,
  updateExpense,
  deleteExpense,
  getSummary,
} from "../controllers/expenseController.js";

router.post("/", createExpense);

router.get("/", getExpenses);

module.exports = router;