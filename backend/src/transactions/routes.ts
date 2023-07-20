import { Router } from "express";
import controller from "./controller";

const router = Router();

router.post("/transactions/", controller.addTransaction);
router.get("/transactions/single/:id", controller.getTransactionById);
router.delete("/transactions/single/:id", controller.deleteTransaction);
router.post("/transactions/get", controller.getTransactions);
router.get("/income", controller.getIncome);
router.get("/expense", controller.getExpense);
router.get("/transactions/count", controller.getTransactionsCount);
router.get("/transactions/count/income", controller.getIncomeTransactionsCount);
router.get(
  "/transactions/count/expense",
  controller.getExpenseTransactionsCount
);
router.post("/transactions/get/income", controller.getIncomeTransactions);
router.post("/transactions/get/expense", controller.getExpenseTransactions);
router.put("/transactions/single/:id", controller.updateTransaction);
router.get("/transactions/date/min", controller.getMinDate);
router.get("/transactions/date/max", controller.getMaxDate);
router.post("/transactions/date/get", controller.getTransactionsBetweenDates);

export default router;
