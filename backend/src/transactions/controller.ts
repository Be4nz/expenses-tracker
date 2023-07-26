import { Request, Response } from "express";
import { pool } from "../database/pgConnections";
import queries from "./queries";

const getTransactions = (req: Request, res: Response) => {
  if (req.user && "id" in req.user) {
    const userId = req.user.id;
    const { limit } = req.body;
    pool.query(queries.getTransactions, [userId, limit], (error, results) => {
      if (error) throw error;
      res.status(200).json(results.rows);
    });
  }
};

const getTransactionById = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);

  pool.query(queries.getTransactionById, [id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const addTransaction = (req: Request, res: Response) => {
  if (req.user && "id" in req.user) {
    const userId = req.user.id;
    const { title, date, tag, type, amount, notes } = req.body;

    pool.query(
      queries.addTransaction,
      [title, date, tag, type, amount, notes, userId],
      (error, results) => {
        if (error) throw error;
        res.status(201).send("Transaction created");
      }
    );
  }
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
  if (req.user && "id" in req.user) {
    const userId = req.user.id;
    pool.query(queries.getIncome, [userId], (error, results) => {
      if (error) throw error;
      res.status(200).json(results.rows);
    });
  }
};

const getExpense = (req: Request, res: Response) => {
  if (req.user && "id" in req.user) {
    const userId = req.user.id;
    pool.query(queries.getExpense, [userId], (error, results) => {
      if (error) throw error;
      res.status(200).json(results.rows);
    });
  }
};

const getTransactionsCount = (req: Request, res: Response) => {
  if (req.user && "id" in req.user) {
    const userId = req.user.id;
    pool.query(queries.getTransactionsCount, [userId], (error, results) => {
      if (error) throw error;
      res.status(200).json(results.rows);
    });
  }
};

const getMinDate = (req: Request, res: Response) => {
  if (req.user && "id" in req.user) {
    const userId = req.user.id;
    pool.query(queries.minDate, [userId], (error, results) => {
      if (error) throw error;
      res.status(200).json(results.rows);
    });
  }
};

const getMaxDate = (req: Request, res: Response) => {
  if (req.user && "id" in req.user) {
    const userId = req.user.id;
    pool.query(queries.maxDate, [userId], (error, results) => {
      if (error) throw error;
      res.status(200).json(results.rows);
    });
  }
};

const getIncomeTransactionsCount = (req: Request, res: Response) => {
  if (req.user && "id" in req.user) {
    const userId = req.user.id;
    pool.query(
      queries.getIncomeTransactionsCount,
      [userId],
      (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
      }
    );
  }
};

const getExpenseTransactionsCount = (req: Request, res: Response) => {
  if (req.user && "id" in req.user) {
    const userId = req.user.id;
    pool.query(
      queries.getExpenseTransactionsCount,
      [userId],
      (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
      }
    );
  }
};

const getExpenseTransactions = (req: Request, res: Response) => {
  if (req.user && "id" in req.user) {
    const userId = req.user.id;
    const { limit } = req.body;
    pool.query(
      queries.getExpenseTransactions,
      [userId, limit],
      (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
      }
    );
  }
};

const getIncomeTransactions = (req: Request, res: Response) => {
  if (req.user && "id" in req.user) {
    const userId = req.user.id;
    const { limit } = req.body;
    pool.query(
      queries.getIncomeTransactions,
      [userId, limit],
      (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
      }
    );
  }
};

const updateTransaction = (req: Request, res: Response) => {
  if (req.user && "id" in req.user) {
    const userId = req.user.id;
    const { title, date, tag, type, amount, notes } = req.body;
    const id = parseInt(req.params.id);
    pool.query(
      queries.updateTransaction,
      [title, date, tag, type, amount, notes, id, userId],
      (error, results) => {
        if (error) throw error;
        res.status(201).send("Transaction updated");
      }
    );
  }
};

const getTransactionsBetweenDates = (req: Request, res: Response) => {
  if (req.user && "id" in req.user) {
    const userId = req.user.id;
    const { startDate, endDate } = req.body;
    pool.query(
      queries.getTransactionBetweenDates,
      [userId, startDate, endDate],
      (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
      }
    );
  }
};

export default {
  getTransactions,
  getTransactionById,
  addTransaction,
  deleteTransaction,
  getIncome,
  getExpense,
  getTransactionsCount,
  getIncomeTransactionsCount,
  getExpenseTransactionsCount,
  getExpenseTransactions,
  getIncomeTransactions,
  updateTransaction,
  getMinDate,
  getMaxDate,
  getTransactionsBetweenDates,
};
