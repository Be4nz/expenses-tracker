import React, { useEffect, useState } from "react";
import BalanceCard from "../components/transactions/balanceCard";
import OverviewCards from "../components/transactions/overviewCards";
import TransactionsList from "../components/transactions/transactionsList";
import AddTransactionButton from "../components/transactions/addTransactionButton";
import { getExpense, getIncome } from "../api/balance";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import LoadingWrapper from "../components/loadingWrapper";
import { getCount, getTransactions } from "../api/transactions";
import { Transaction } from "../types/transaction";
import { SubTitle } from "../components/styled/SubTitle";

const Current = () => {
  const [income, setIncome] = useState<number>(0);
  const [expense, setExpense] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const limit = useSelector((state: RootState) => state.limit.limit);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [transactionsCount, setTransactionsCount] = useState<number>(0);

  useEffect(() => {
    setLoading(true);

    Promise.all([getTransactions(limit), getIncome(), getExpense(), getCount()])
      .then(([transactions, income, expense, count]) => {
        setTransactions(transactions);
        setIncome(parseInt(income[0].sum) || 0);
        setExpense(parseInt(expense[0].sum) || 0);
        setTransactionsCount(count[0].count);
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
      <SubTitle>Recent transactions</SubTitle>
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
