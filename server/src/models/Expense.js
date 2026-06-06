import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema(
  {
    amount: {
      type: Number,
      required: true,
      min: 0.01,
    },

    category: {
      type: String,
      required: true,
      enum: [
        "Food",
        "Transport",
        "Bills",
        "Entertainment",
        "Other",
      ],
    },

    date: {
      type: Date,
      required: true,
    },

    note: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Expense", expenseSchema);