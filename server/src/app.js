const express = require("express");
const cors = require("cors");

import expenseRoutes from "./routes/expenseRoutes.js";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/expenses", expenseRoutes);

module.exports = app;