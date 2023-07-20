import {
  Select,
  TextField,
  MenuItem,
  SelectChangeEvent,
  styled,
} from "@mui/material";
import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
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
  toEdit: Transaction;
}

const CreateTransactionForm: React.FC<Props> = ({ onSubmit, toEdit }) => {
  const [transaction, setTransaction] = useState<Transaction>(toEdit);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | SelectChangeEvent<"INCOME" | "EXPENSE">
      | SelectChangeEvent<string>
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
            <TextField
              name="title"
              label="Title"
              value={transaction.title}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
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
            <Select
              label="Transaction type"
              name="type"
              value={transaction.type}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            >
              <MenuItem value={"INCOME"}>Income</MenuItem>
              <MenuItem value={"EXPENSE"}>Expense</MenuItem>
            </Select>
          </InputLine>
          <InputLine>
            <Select
              label="Tag"
              name="tag"
              value={transaction.tag}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            >
              <MenuItem value={"Food"}>Food</MenuItem>
              <MenuItem value={"Utility"}>Utility</MenuItem>
              <MenuItem value={"Housing"}>Housing</MenuItem>
              <MenuItem value={"Transport"}>Transport</MenuItem>
              <MenuItem value={"Personal Spendings"}>
                Personal Spendings
              </MenuItem>
              <MenuItem value={"Medical"}>Medical</MenuItem>
              <MenuItem value={"Investments"}>Investments</MenuItem>
              <MenuItem value={"Salary"}>Salary</MenuItem>
              <MenuItem value={"Retail"}>Retail</MenuItem>
              <MenuItem value={"Other"}>Other</MenuItem>
            </Select>
          </InputLine>
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
              label="Notes"
              name="notes"
              value={transaction.notes}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </InputLine>
          <Button type="submit">Submit</Button>
        </Form>
      )}
    </Formik>
  );
};

export default CreateTransactionForm;
