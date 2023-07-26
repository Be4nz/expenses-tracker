const getTransactions =
  "SELECT * FROM transactions WHERE createdby = $1 ORDER BY date DESC LIMIT $2";
const getIncomeTransactions =
  "SELECT * FROM transactions WHERE type = 'INCOME' AND createdby = $1 ORDER BY date DESC LIMIT $2";
const getExpenseTransactions =
  "SELECT * FROM transactions WHERE type = 'EXPENSE' AND createdby = $1 ORDER BY date DESC LIMIT $2";

const getTransactionById = "SELECT * FROM transactions WHERE id = $1";
const addTransaction =
  "INSERT INTO transactions (title, date, tag, type, amount, notes, createdby) VALUES ($1, $2, $3, $4, $5, $6, $7)";
const deleteTransaction = "DELETE FROM transactions WHERE id = $1";

const getIncome =
  "SELECT SUM(amount) FROM transactions WHERE type = 'INCOME' AND createdby = $1";
const getExpense =
  "SELECT SUM(amount) FROM transactions WHERE type = 'EXPENSE' AND createdby = $1";

const getTransactionsCount =
  "SELECT COUNT(id) FROM transactions WHERE createdby = $1";
const getIncomeTransactionsCount =
  "SELECT COUNT(id) FROM transactions WHERE type = 'INCOME' AND createdby = $1";
const getExpenseTransactionsCount =
  "SELECT COUNT(id) FROM transactions WHERE type = 'EXPENSE' AND createdby = $1";
const updateTransaction =
  "UPDATE transactions SET title = $1, date = $2, tag = $3, type = $4, amount = $5, notes = $6 WHERE id = $7 AND createdby = $8";

const minDate = "SELECT MIN(date) FROM transactions WHERE createdby = $1";
const maxDate = "SELECT MAX(date) FROM transactions WHERE createdby = $1";
const getTransactionBetweenDates =
  "SELECT * FROM transactions WHERE createdby = $1 AND date BETWEEN $2 AND $3";

export default {
  getTransactions,
  getTransactionById,
  addTransaction,
  deleteTransaction,
  getIncome,
  getExpense,
  getTransactionsCount,
  getExpenseTransactions,
  getIncomeTransactions,
  getIncomeTransactionsCount,
  getExpenseTransactionsCount,
  updateTransaction,
  minDate,
  maxDate,
  getTransactionBetweenDates,
};
