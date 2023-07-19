import { Transaction } from "../../types/transaction";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { FormatDate } from "../../utils/dateUtils";
import {
  Amount,
  LinkCardContainer,
  Note,
  Row,
  Type,
  Date,
} from "../styled/Card";

const TransactionCard = ({ transaction }: { transaction: Transaction }) => {
  return (
    <LinkCardContainer to={"/transactions/" + transaction.id}>
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
    </LinkCardContainer>
  );
};

export default TransactionCard;
