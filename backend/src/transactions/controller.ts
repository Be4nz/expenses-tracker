import { Request, Response } from "express";
import { pool } from "../database/pgConnections";
import queries from "./queries";

const getTransactions = (req: Request, res: Response) => {
  const { limit } = req.body;
  pool.query(queries.getTransactions, [limit], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const getTransactionById = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);

  pool.query(queries.getTransactionById, [id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const addTransaction = (req: Request, res: Response) => {
  const { title, date, tag, type, amount, notes } = req.body;

  pool.query(
    queries.addTransaction,
    [title, date, tag, type, amount, notes],
    (error, results) => {
      if (error) throw error;
      res.status(201).send("Transaction created");
    }
  );
};

const deleteTransaction = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);

  pool.query(queries.getTransactionById, [id], (error, results) => {
    const noStudentFound = !results.rows.length;
    if (noStudentFound) {
      res.send("Transactions does not exist");
    }
  });

  pool.query(queries.deleteTransaction, [id], (error, results) => {
    if (error) throw error;
    res.status(200).send("Transaction deleted");
  });
};

const getIncome = (req: Request, res: Response) => {
  pool.query(queries.getIncome, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const getExpense = (req: Request, res: Response) => {
  pool.query(queries.getExpense, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const getTransactionsCount = (req: Request, res: Response) => {
  pool.query(queries.getTransactionsCount, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

export default {
  getTransactions,
  getTransactionById,
  addTransaction,
  deleteTransaction,
  getIncome,
  getExpense,
  getTransactionsCount,
};