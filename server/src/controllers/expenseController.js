import { Parser } from "json2csv";
import Expense from "../models/Expense.js";

export const createExpense = async (req, res) => {
  try {
    const expense = await Expense.create(req.body);
    res.status(201).json(expense);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getExpenses = async (req, res) => {
  try {
    const { category, startDate, endDate } = req.query;

    let filter = {};

    if (category) {
      filter.category = category;
    }

    if (startDate || endDate) {
      filter.date = {};

      if (startDate) filter.date.$gte = new Date(startDate);
      if (endDate) filter.date.$lte = new Date(endDate);
    }

    const expenses = await Expense.find(filter).sort({ date: -1 });

    res.json(expenses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateExpense = async (req, res) => {
  try {
    const expense = await Expense.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!expense) {
      return res.status(404).json({
        message: "Expense not found",
      });
    }

    res.json(expense);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteExpense = async (req, res) => {
  try {
    const expense = await Expense.findByIdAndDelete(req.params.id);

    if (!expense) {
      return res.status(404).json({
        message: "Expense not found",
      });
    }

    res.json({
      message: "Expense deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getSummary = async (req, res) => {
  try {
    const now = new Date();

    const firstDay = new Date(
      now.getFullYear(),
      now.getMonth(),
      1
    );

    const totalThisMonth = await Expense.aggregate([
      {
        $match: {
          date: { $gte: firstDay },
        },
      },
      {
        $group: {
          _id: null,
          total: { $sum: "$amount" },
        },
      },
    ]);

    const categoryTotals = await Expense.aggregate([
      {
        $group: {
          _id: "$category",
          total: { $sum: "$amount" },
        },
      },
    ]);

    const highestExpense = await Expense.findOne()
      .sort({ amount: -1 });

    res.json({
      totalSpentThisMonth: totalThisMonth[0]?.total || 0,
      totalPerCategory: categoryTotals,
      highestExpense,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const exportExpensesCSV = async (req, res) => {
  try {
    console.log("run");
    const { category, startDate, endDate } = req.query;

    const filter = {};

    if (category) {
      filter.category = category;
    }

    if (startDate || endDate) {
      filter.date = {};

      if (startDate) {
        filter.date.$gte = new Date(startDate);
      }

      if (endDate) {
        filter.date.$lte = new Date(endDate);
      }
    }

    const expenses = await Expense.find(filter)
      .sort({ date: -1 })
      .lean();

    const fields = [
      { label: "Amount", value: "amount" },
      { label: "Category", value: "category" },
      {
        label: "Date",
        value: (row) =>
          new Date(row.date).toLocaleDateString(),
      },
      { label: "Note", value: "note" },
    ];

    const parser = new Parser({ fields });
    const csv = parser.parse(expenses);

    res.header("Content-Type", "text/csv");
    res.attachment("expenses.csv");

    res.send(csv);
  } catch (error) {
    console.error("CSV Export Error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to export CSV",
    });
  }
};