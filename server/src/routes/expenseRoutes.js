import  {
  createExpense,
  getExpenses,
  updateExpense,
  deleteExpense,
  getSummary,
} from "../controllers/expenseController.js";

router.post("/", createExpense);


module.exports = router;