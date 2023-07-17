import {
  Select,
  TextField,
  MenuItem,
  SelectChangeEvent,
  styled,
} from "@mui/material";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import { Transaction } from "../../types/transaction";
import dayjs from "dayjs";
import { DatePicker } from "@mui/x-date-pickers";

const InputLine = styled("div")`
  margin: 15px 0;
  && {
    & .MuiInputBase-input {
      color: white;
      &::before {
        border-color: white !important;
      }
      &::after {
        border-color: white !important;
      }
      &:focus {
        outline: none;
      }
    }
    & .MuiInputLabel-root {
      color: white;
      &.Mui-focused {
        color: white !important;
      }
    }
    & .MuiSelect-select {
      color: white;
      &::before {
        border-color: white !important;
      }
      &::after {
        border-color: white !important;
      }
      &:focus {
        outline: none;
      }
    }
  }
`;

const Button = styled("button")`
  width: 120px;
  height: 50px;
  border-radius: 5px;
  background-color: rgb(159, 159, 159);
  color: rgb(39, 38, 45);
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
`;

interface Props {
  onSubmit: (transaction: Transaction) => void;
}

const CreateTransactionForm: React.FC<Props> = ({ onSubmit }) => {
  const [transaction, setTransaction] = useState<Transaction>({
    id: 0,
    date: new Date(),
    type: "",
    subtype: "INCOME",
    amount: 0,
    notes: "",
  });

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | SelectChangeEvent<"INCOME" | "EXPENSE">
  ) => {
    const { name, value } = e.target;
    setTransaction((prevTransaction) => ({
      ...prevTransaction,
      [name]: value,
    }));
  };

  return (
    <Formik
      initialValues={{
        transaction,
      }}
      onSubmit={() => {
        onSubmit(transaction);
      }}
    >
      {({ values, handleBlur }) => (
        <Form>
          <InputLine>
            <DatePicker
              label="Date"
              value={dayjs(transaction.date)}
              onChange={(e) =>
                setTransaction((prevTransaction) => ({
                  ...prevTransaction,
                  date: dayjs(e).toDate(),
                }))
              }
              maxDate={dayjs(new Date())}
            />
          </InputLine>
          <InputLine>
            <TextField
              name="type"
              label="Category"
              value={transaction.type}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
          </InputLine>
          <InputLine>
            <Select
              label="Type"
              name="subtype"
              value={transaction.subtype}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            >
              <MenuItem value={"INCOME"}>Income</MenuItem>
              <MenuItem value={"EXPENSE"}>Expense</MenuItem>
            </Select>
          </InputLine>
          <InputLine>
            <TextField
              label="Amount"
              name="amount"
              value={transaction.amount}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
          </InputLine>
          <InputLine>
            <TextField
              label="Notes"
              name="notes"
              value={transaction.notes}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
          </InputLine>
          <Button type="submit">Submit</Button>
        </Form>
      )}
    </Formik>
  );
};

export default CreateTransactionForm;
