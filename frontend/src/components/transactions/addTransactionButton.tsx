import React from "react";
import CreateTransactionModal from "./createTransactionModal";
import { FaPlus } from "react-icons/fa";
import styled from "@emotion/styled";
import { create } from "../../api/transactions";
import { useDispatch } from "react-redux";
import { Transaction } from "../../types/transaction";
import { setLimit } from "../slice/transactionLimitSlice";

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  position: absolute;
  right: 0px;
  transform: translate(-100%, -50%);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rgb(159, 159, 159);
  color: rgb(39, 38, 45);
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  z-index: 3;
`;

const AddTransactionButton = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);

  const dispatch = useDispatch();

  const onCreateSubmit = (transaction: Transaction) => {
    create(transaction).then(() => {
      dispatch(setLimit(0));
      setTimeout(() => {
        dispatch(setLimit(5));
      }, 2);
    });
    setOpen(false);
  };

  return (
    <Container>
      <Button onClick={handleOpen}>
        <FaPlus />
      </Button>
      <CreateTransactionModal
        open={open}
        setOpen={setOpen}
        onCreateSubmit={onCreateSubmit}
      />
    </Container>
  );
};

export default AddTransactionButton;
