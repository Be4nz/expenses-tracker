const getTransactions = "SELECT * FROM transactions LIMIT $1";
const getTransactionById = "SELECT * FROM transactions WHERE id = $1";
const addTransaction =
  "INSERT INTO transactions (date, type, subtype, amount, notes) VALUES ($1, $2, $3, $4, $5)";
const deleteTransaction = "DELETE FROM transactions WHERE id = $1";
const getIncome =
  "SELECT SUM(amount) FROM transactions WHERE subtype = 'INCOME'";
const getExpense =
  "SELECT SUM(amount) FROM transactions WHERE subtype = 'EXPENSE'";
const getTransactionsCount = "SELECT COUNT(id) FROM transactions";

export default {
  getTransactions,
  getTransactionById,
  addTransaction,
  deleteTransaction,
  getIncome,
  getExpense,
  getTransactionsCount,
};
