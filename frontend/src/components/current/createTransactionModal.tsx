import { Modal, Paper, styled } from "@mui/material";
import React from "react";
import CreateTransactionForm from "./createTransactionForm";
import { Transaction } from "../../types/transaction";
import { create } from "../../api/transactions";
import { setLimit } from "../slice/transactionLimitSlice";
import { useDispatch } from "react-redux";

const Container = styled(Paper)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 600px;
  width: 500px;
  background-color: rgb(39, 38, 45);
  color: white;
  radius: 5px;
`;

const CreateTransactionModal = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const handleClose = () => setOpen(false);

  const dispatch = useDispatch();

  const onSubmit = (transaction: Transaction) => {
    dispatch(setLimit(5));
    create(transaction);
    handleClose();
  };

  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <Container variant="outlined">
          <CreateTransactionForm onSubmit={onSubmit} />
        </Container>
      </Modal>
    </div>
  );
};

export default CreateTransactionModal;
