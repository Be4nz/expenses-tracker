import React, { useEffect, useState } from "react";
import BalanceCard from "../components/transactions/balanceCard";
import RecentTransactionsTitle from "../components/transactions/recentTransactionsTitle";
import OverviewCards from "../components/transactions/overviewCards";
import TransactionsList from "../components/transactions/transactionsList";
import AddTransactionButton from "../components/transactions/addTransactionButton";
import { getExpense, getIncome } from "../api/balance";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import LoadingWrapper from "../components/loadingWrapper";
import { getCount, getTransactions } from "../api/transactions";
import { Transaction } from "../types/transaction";

const Current = () => {
  const [income, setIncome] = useState<number>(0);
  const [expense, setExpense] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const limit = useSelector((state: RootState) => state.limit.limit);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [transactionsCount, setTransactionsCount] = useState<number>(0);

  useEffect(() => {
    getCount().then((data) => {
      setTransactionsCount(data[0].count);
    });
  }, []);

  useEffect(() => {
    setLoading(true);
    getTransactions(limit).then((data) => {
      setTransactions(data);
    });
    getIncome()
      .then((data) => {
        setIncome(parseInt(data[0].sum) || 0);
      })
      .catch(() => {
        setError(true);
      });
    getExpense()
      .then((data) => {
        setExpense(parseInt(data[0].sum) || 0);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => setLoading(false));
  }, [limit]);

  const balance = income - expense;

  return (
    <LoadingWrapper loading={loading} error={error}>
      <BalanceCard balance={"$" + balance} color="white" title="Balance" />
      <OverviewCards income={income} expense={expense} />
      <RecentTransactionsTitle />
      <TransactionsList
        transactions={transactions}
        transactionsCount={transactionsCount}
        cardCount={2}
      />
      <AddTransactionButton />
    </LoadingWrapper>
  );
};

export default Current;
