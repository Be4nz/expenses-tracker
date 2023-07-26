import styled from "@emotion/styled";

export const Button = styled("button")`
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

export const InputLine = styled("div")`
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
