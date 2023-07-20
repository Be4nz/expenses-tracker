import styled from "@emotion/styled";
import { Transaction } from "../../types/transaction";
import TransactionCard from "./transactionCard";
import SeeMoreButton from "./seeMoreButton";
import { setLimit } from "../slice/transactionLimitSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { ListContainer } from "../styled/ListContainer";

interface Props {
  transactions: Transaction[];
  transactionsCount: number;
  cardCount: number;
}

const TransactionsList: React.FC<Props> = ({
  transactions,
  transactionsCount,
  cardCount,
}) => {
  const limit = useSelector((state: RootState) => state.limit.limit);

  const dispatch = useDispatch();

  const handleSeeMoreClick = () => {
    dispatch(setLimit(limit + 5));
  };

  return (
    <ListContainer cardCount={cardCount}>
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
