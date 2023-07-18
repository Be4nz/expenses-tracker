import { Transaction } from "../../types/transaction";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { FormatDate } from "../../utils/dateUtils";

const TransactionContainer = styled(Link)`
  width: 70%;
  height: 180px;
  margin: auto;
  background-color: rgb(39, 38, 45);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
  text-decoration: none;
  border-radius: 5px;
`;

const Row = styled("div")`
  display: flex;
  justify-content: space-between;
  width: 89%;
  margin: 25px 70px;
`;

const Note = styled("p")`
  color: white;
  margin: 0;
  font-size: 36px;
`;

const Amount = styled("p")<{ transaction: Transaction }>`
  color: ${({ transaction }) =>
    transaction.type === "EXPENSE" ? "#B84F4F" : "#72C675"};
  margin: 0;
  font-size: 48px;
`;

const Type = styled("p")`
  color: rgb(159, 159, 159);
  margin: 0;
  font-size: 20px;
`;

const Date = styled("p")`
  color: rgb(159, 159, 159);
  margin: 0;
  font-size: 20px;
`;

const TransactionCard = ({ transaction }: { transaction: Transaction }) => {
  return (
    <TransactionContainer to={"/transactions/" + transaction.id}>
      <Row>
        <Note>{transaction.title}</Note>
        <Amount transaction={transaction}>
          {transaction.type === "EXPENSE" ? "-" : "+"}${transaction.amount}
        </Amount>
      </Row>
      <Row>
        <Type>{transaction.tag}</Type>
        <Date>{FormatDate(transaction.date)}</Date>
      </Row>
    </TransactionContainer>
  );
};

export default TransactionCard;
