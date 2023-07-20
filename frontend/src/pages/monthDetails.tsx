import React, { useEffect, useState } from "react";
import { getTransactionsBetweenDates } from "../api/history";
import { useParams } from "react-router-dom";
import { Transaction } from "../types/transaction";
import LoadingWrapper from "../components/loadingWrapper";
import TransactionsList from "../components/transactions/transactionsList";
import { Message } from "../components/styled/Message";
import BalanceLineChart from "../components/visualisations/BalanceLineChart";
import { Title } from "../components/styled/Title";
import { GetMonthName } from "../utils/dateUtils";
import styled from "@emotion/styled";
import ExpensesPieChart from "../components/visualisations/ExpensesPieChart";
import { SubTitle } from "../components/styled/SubTitle";

const ChartContainer = styled("div")`
  width: 60%;
  height: 300px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

const MonthDetails = () => {
  const [transactions, setTransactions] = useState<Transaction[]>();
  const [startDate, setStartDate] = useState<Date>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const { year, month } = useParams();

  useEffect(() => {
    if (year && month) {
      setLoading(true);
      const startDate = new Date(parseInt(year), parseInt(month));
      setStartDate(startDate);
      const endDate = new Date(parseInt(year), parseInt(month) + 1);
      getTransactionsBetweenDates(startDate, endDate)
        .then((data) => {
          setTransactions(data);
        })
        .catch(() => {
          setError(true);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, []);

  const GetBalanceChanges = (transactions: Transaction[]) => {
    let balanceChanges = [{ amount: 0, date: startDate }];
    for (let i = 1; i <= transactions.length; i++) {
      balanceChanges = balanceChanges.concat({
        amount:
          balanceChanges[i - 1].amount +
          transactions[i - 1].amount *
            (transactions[i - 1].type === "EXPENSE" ? -1 : 1),
        date: transactions[i - 1].date,
      });
    }
    return balanceChanges;
  };

  const GetExpenses = (transactions: Transaction[]) => {
    return transactions.filter((trans) => trans.type === "EXPENSE");
  };

  return (
    <LoadingWrapper loading={loading} error={error}>
      {transactions && month && transactions.length > 0 ? (
        <>
          <Title>{year + " " + GetMonthName(parseInt(month))}</Title>
          <ChartContainer>
            <BalanceLineChart data={GetBalanceChanges(transactions)} />
            <ExpensesPieChart data={GetExpenses(transactions)} />
          </ChartContainer>
          <SubTitle>Transactions</SubTitle>
          <TransactionsList
            transactions={transactions}
            transactionsCount={transactions.length}
            cardCount={2}
          />
        </>
      ) : (
        <Message>No transactions on the given month</Message>
      )}
    </LoadingWrapper>
  );
};

export default MonthDetails;
