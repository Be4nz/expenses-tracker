import React, { useEffect, useState } from "react";
import BalanceCard from "../components/transactions/balanceCard";
import TransactionsList from "../components/transactions/transactionsList";
import AddTransactionButton from "../components/transactions/addTransactionButton";
import { getExpense } from "../api/balance";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import LoadingWrapper from "../components/loadingWrapper";
import { getExpenseCount, getExpenseTransactions } from "../api/transactions";
import { Transaction } from "../types/transaction";
import { setLimit } from "../components/slice/transactionLimitSlice";
import { SubTitle } from "../components/styled/SubTitle";

const AllExpense = () => {
  const [expense, setExpense] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [transactionsCount, setTransactionsCount] = useState<number>(0);

  const limit = useSelector((state: RootState) => state.limit.limit);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLimit(5));
    getExpenseCount().then((data) => {
      setTransactionsCount(data[0].count);
    });
  }, []);

  useEffect(() => {
    setLoading(true);
    getExpenseTransactions(limit).then((data) => {
      setTransactions(data);
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

  return (
    <LoadingWrapper loading={loading} error={error}>
      <BalanceCard
        balance={"-$" + expense}
        color={"#B84F4F"}
        title={"Expense"}
      />
      <SubTitle>Recent transactions</SubTitle>
      <TransactionsList
        transactions={transactions}
        transactionsCount={transactionsCount}
        cardCount={3}
      />
      <AddTransactionButton />
    </LoadingWrapper>
  );
};

export default AllExpense;
