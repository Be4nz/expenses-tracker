import { Router } from "express";
import controller from "./controller";
import {
  checkAuthenticated,
  checkNotAuthenticated,
} from "../users/checkAuthentication";

const router = Router();

router.post("/transactions/", checkNotAuthenticated, controller.addTransaction);
router.get(
  "/transactions/single/:id",
  checkNotAuthenticated,
  controller.getTransactionById
);
router.delete(
  "/transactions/single/:id",
  checkNotAuthenticated,
  controller.deleteTransaction
);
router.post(
  "/transactions/get",
  checkNotAuthenticated,
  controller.getTransactions
);
router.get("/income", checkNotAuthenticated, controller.getIncome);
router.get("/expense", checkNotAuthenticated, controller.getExpense);
router.get(
  "/transactions/count",
  checkNotAuthenticated,
  controller.getTransactionsCount
);
router.get(
  "/transactions/count/income",
  checkNotAuthenticated,
  controller.getIncomeTransactionsCount
);
router.get(
  "/transactions/count/expense",
  checkNotAuthenticated,
  controller.getExpenseTransactionsCount
);
router.post(
  "/transactions/get/income",
  checkNotAuthenticated,
  controller.getIncomeTransactions
);
router.post(
  "/transactions/get/expense",
  checkNotAuthenticated,
  controller.getExpenseTransactions
);
router.put(
  "/transactions/single/:id",
  checkNotAuthenticated,
  controller.updateTransaction
);
router.get(
  "/transactions/date/min",
  checkNotAuthenticated,
  controller.getMinDate
);
router.get(
  "/transactions/date/max",
  checkNotAuthenticated,
  controller.getMaxDate
);
router.post(
  "/transactions/date/get",
  checkNotAuthenticated,
  controller.getTransactionsBetweenDates
);

export default router;
