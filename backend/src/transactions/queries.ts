const getTransactions = "SELECT * FROM transactions LIMIT $1";
const getIncomeTransactions =
  "SELECT * FROM transactions WHERE type = 'INCOME' LIMIT $1";
const getExpenseTransactions =
  "SELECT * FROM transactions WHERE type = 'EXPENSE' LIMIT $1";

const getTransactionById = "SELECT * FROM transactions WHERE id = $1";
const addTransaction =
  "INSERT INTO transactions (title, date, tag, type, amount, notes) VALUES ($1, $2, $3, $4, $5, $6)";
const deleteTransaction = "DELETE FROM transactions WHERE id = $1";

const getIncome = "SELECT SUM(amount) FROM transactions WHERE type = 'INCOME'";
const getExpense =
  "SELECT SUM(amount) FROM transactions WHERE type = 'EXPENSE'";

const getTransactionsCount = "SELECT COUNT(id) FROM transactions";
const getIncomeTransactionsCount =
  "SELECT COUNT(id) FROM transactions WHERE type = 'INCOME'";
const getExpenseTransactionsCount =
  "SELECT COUNT(id) FROM transactions WHERE type = 'EXPENSE'";

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
};
