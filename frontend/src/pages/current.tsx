import React, { useEffect, useState } from "react";
import BalanceCard from "../components/current/balanceCard";
import RecentTransactionsTitle from "../components/current/recentTransactionsTitle";
import OverviewCards from "../components/current/overviewCards";
import TransactionsList from "../components/current/transactionsList";
import AddTransactionButton from "../components/current/addTransactionButton";
import { getExpense, getIncome } from "../api/balance";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import Sidenav from "../components/navigation/sideNav";

const Current = () => {
  const [income, setIncome] = useState<number>(0);
  const [expense, setExpense] = useState<number>(0);
  const limit = useSelector((state: RootState) => state.limit.limit);

  useEffect(() => {
    getIncome().then((data) => {
      setIncome(parseInt(data[0].sum));
    });
    getExpense().then((data) => {
      setExpense(parseInt(data[0].sum) || 0);
    });
  }, [limit]);

  const balance = income - expense;

  return (
    <div>
      <BalanceCard balance={balance} />
      <OverviewCards income={income} expense={expense} />
      <RecentTransactionsTitle />
      <TransactionsList />
      <AddTransactionButton />
    </div>
  );
};

export default Current;
