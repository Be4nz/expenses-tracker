import styled from "@emotion/styled";
import { Transaction } from "../types/transaction";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getTransactionById } from "../api/transactions";
import { FormatDate } from "../utils/dateUtils";
import LoadingWrapper from "../components/loadingWrapper";
import { Message } from "../components/styled/Message";

const ValueType = styled("p")`
  color: rgb(159, 159, 159);
  font-size: 25px;
`;

const Value = styled("p")`
  color: white;
  font-size: 30px;
`;

const Container = styled("div")`
  margin: 40px 300px;
`;

const TransactionDetails = () => {
  const [transaction, setTransaction] = useState<Transaction>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    if (id) {
      getTransactionById(id)
        .then((data) => {
          setTransaction(data[0]);
        })
        .catch((error) => {
          setError(true);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [id]);

  return (
    <LoadingWrapper loading={loading} error={error}>
      {transaction ? (
        <Container>
          <ValueType>Title</ValueType>
          <Value>{transaction.title}</Value>
          <ValueType>Amount</ValueType>
          <Value>{transaction.amount}</Value>
          <ValueType>Transaction type</ValueType>
          <Value>{transaction.type}</Value>
          <ValueType>Tag</ValueType>
          <Value>{transaction.tag}</Value>
          <ValueType>Date</ValueType>
          <Value>{FormatDate(transaction.date)}</Value>
          <ValueType>Notes</ValueType>
          <Value>{transaction.notes}</Value>
        </Container>
      ) : (
        <Message>Transaction not found</Message>
      )}
    </LoadingWrapper>
  );
};

export default TransactionDetails;
