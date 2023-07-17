import React from "react";
import CreateTransactionModal from "./createTransactionModal";
import { FaPlus } from "react-icons/fa";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 100px;
`;

const Button = styled.button`
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
`;

const AddTransactionButton = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);

  return (
    <Container>
      <Button onClick={handleOpen}>
        <FaPlus />
      </Button>
      <CreateTransactionModal open={open} setOpen={setOpen} />
    </Container>
  );
};

export default AddTransactionButton;
