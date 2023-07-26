import { Modal, Paper, styled } from "@mui/material";
import React from "react";
import CreateTransactionForm from "./createTransactionForm";
import { Transaction } from "../../types/transaction";
import { Container } from "../styled/ModalContainer";

const CreateTransactionModal = ({
  open,
  setOpen,
  onCreateSubmit,
  toEdit = {
    id: 0,
    title: "",
    amount: 0,
    type: "INCOME",
    tag: "Other",
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
