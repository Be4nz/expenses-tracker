import React, { useEffect, useState } from "react";
import BalanceCard from "../components/transactions/balanceCard";
import RecentTransactionsTitle from "../components/transactions/recentTransactionsTitle";
import TransactionsList from "../components/transactions/transactionsList";
import AddTransactionButton from "../components/transactions/addTransactionButton";
import { getIncome } from "../api/balance";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import LoadingWrapper from "../components/loadingWrapper";
import { getIncomeCount, getIncomeTransactions } from "../api/transactions";
import { Transaction } from "../types/transaction";
import { setLimit } from "../components/slice/transactionLimitSlice";

const AllIncome = () => {
  const [income, setIncome] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [transactionsCount, setTransactionsCount] = useState<number>(0);

  const limit = useSelector((state: RootState) => state.limit.limit);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLimit(5));
    getIncomeCount().then((data) => {
      setTransactionsCount(data[0].count);
    });
  }, []);

  useEffect(() => {
    setLoading(true);
    getIncomeTransactions(limit).then((data) => {
      setTransactions(data);
    });
    getIncome()
      .then((data) => {
        setIncome(parseInt(data[0].sum) || 0);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => setLoading(false));
  }, [limit]);

  return (
    <LoadingWrapper loading={loading} error={error}>
      <BalanceCard balance={"+$" + income} color={"#72C675"} title={"Income"} />
      <RecentTransactionsTitle />
      <TransactionsList
        transactions={transactions}
        transactionsCount={transactionsCount}
        cardCount={3}
      />
      <AddTransactionButton />
    </LoadingWrapper>
  );
};

export default AllIncome;
