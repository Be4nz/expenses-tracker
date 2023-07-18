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
  onCreateSubmit,
  toEdit = {
    id: 0,
    title: "",
    amount: 0,
    type: "INCOME",
    tag: "",
    date: new Date(),
    notes: "",
  },
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onCreateSubmit: (transaction: Transaction) => void;
  toEdit?: Transaction;
}) => {
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <Container variant="outlined">
          <CreateTransactionForm onSubmit={onCreateSubmit} toEdit={toEdit} />
        </Container>
      </Modal>
    </div>
  );
};

export default CreateTransactionModal;
