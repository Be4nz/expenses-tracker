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

export default router;
