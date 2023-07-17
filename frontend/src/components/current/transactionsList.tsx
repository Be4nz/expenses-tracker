import styled from "@emotion/styled";
import { Transaction } from "../../types/transaction";
import TransactionCard from "./transactionCard";
import SeeMoreButton from "./seeMoreButton";
import { useEffect, useState } from "react";
import { getCount, getTransactions } from "../../api/transactions";
import { setLimit } from "../slice/transactionLimitSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";

const ListContainer = styled("div")`
  max-height: 390px;
  overflow-y: auto;

  /* Custom scrollbar styles */
  ::-webkit-scrollbar {
    margin-right: 10px;
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background-color: rgb(39, 38, 45);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }
`;
const TransactionsList = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [transactionsCount, setTransactionsCount] = useState<number>(0);

  const limit = useSelector((state: RootState) => state.limit.limit);

  const dispatch = useDispatch();

  useEffect(() => {
    getCount().then((data) => {
      setTransactionsCount(data[0].count);
    });
  }, []);

  useEffect(() => {
    getTransactions(limit).then((data) => {
      setTransactions(data);
    });
  }, [limit]);

  const handleSeeMoreClick = () => {
    dispatch(setLimit(limit + 5));
  };

  return (
    <ListContainer>
      {transactions.map((tran) => (
        <TransactionCard key={tran.id} transaction={tran} />
      ))}
      {limit < transactionsCount && (
        <SeeMoreButton onClick={handleSeeMoreClick} />
      )}
    </ListContainer>
  );
};

export default TransactionsList;
