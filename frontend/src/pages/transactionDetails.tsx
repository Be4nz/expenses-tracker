import styled from "@emotion/styled";
import { Transaction } from "../types/transaction";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  deleteTransaction,
  getTransactionById,
  updateTransaction,
} from "../api/transactions";
import { FormatDate } from "../utils/dateUtils";
import LoadingWrapper from "../components/loadingWrapper";
import { Message } from "../components/styled/Message";
import ValueLine from "../components/transactionDetails/ValueLine";
import EditingButtons from "../components/transactionDetails/EditingButtons";
import CreateTransactionModal from "../components/transactions/createTransactionModal";
import { useDispatch } from "react-redux";
import { setLimit } from "../components/slice/transactionLimitSlice";

const Container = styled("div")`
  margin: 40px 300px;
`;

const TransactionDetails = () => {
  const [transaction, setTransaction] = useState<Transaction>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);

  const { id } = useParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();

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

  const handleDelete = () => {
    if (id) {
      deleteTransaction(id);
      navigate("/current");
    }
  };

  const handleEdit = () => {
    setOpenUpdate(true);
  };

  const onUpdateSubmit = (transaction: Transaction) => {
    id &&
      updateTransaction(id, transaction).then(() => {
        dispatch(setLimit(0));
        setTimeout(() => {
          dispatch(setLimit(5));
        }, 2);
      });
    setOpenUpdate(false);
    navigate("/current");
  };

  return (
    <LoadingWrapper loading={loading} error={error}>
      {transaction ? (
        <Container>
          <ValueLine title="Title" value={transaction.title} />
          <ValueLine title="Amount" value={transaction.amount} />
          <ValueLine title="Transaction type" value={transaction.type} />
          <ValueLine title="Tag" value={transaction.tag} />
          <ValueLine title="Date" value={FormatDate(transaction.date)} />
          <ValueLine title="Notes" value={transaction.notes} />
          <EditingButtons
            onClickDelete={handleDelete}
            onClickEdit={handleEdit}
          />
          <CreateTransactionModal
            open={openUpdate}
            setOpen={setOpenUpdate}
            onCreateSubmit={onUpdateSubmit}
            toEdit={transaction}
          />
        </Container>
      ) : (
        <Message>Transaction not found</Message>
      )}
    </LoadingWrapper>
  );
};

export default TransactionDetails;
