import express, { Router } from "express";
import cors from "cors";

import router from "./routes/expenseRoutes.js";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api", router);

export default app;