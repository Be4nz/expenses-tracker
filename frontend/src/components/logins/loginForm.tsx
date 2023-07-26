import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { LoginData } from "../../types/login";
import { TextField, styled } from "@mui/material";

const Button = styled("button")`
  width: 200px;
  height: 60px;
  border-radius: 5px;
  background-color: rgb(159, 159, 159);
  color: rgb(39, 38, 45);
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;

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
  }
`;

const InputField = styled(TextField)`
  width: 400px;
  .MuiInputBase-root {
    height: 100px;
  }

  .MuiInputBase-input {
    font-size: 30px;
  }
`;

const MyForm = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

interface Props {
  onSubmit: (data: LoginData) => void;
}

const LoginForm: React.FC<Props> = ({ onSubmit }) => {
  const [loginData, setLoginData] = useState<LoginData>({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData((prevLoginData) => ({
      ...prevLoginData,
      [name]: value,
    }));
  };

  return (
    <Formik initialValues={{ loginData }} onSubmit={() => onSubmit(loginData)}>
      {({ values, handleBlur }) => (
        <MyForm>
          <InputLine>
            <InputField
              name="email"
              label="Email"
              value={loginData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              autoComplete="email"
              required
            />
          </InputLine>
          <InputLine>
            <InputField
              name="password"
              label="Password"
              value={loginData.password}
              onChange={handleChange}
              onBlur={handleBlur}
              type="password"
              autoComplete="current-password"
              required
            />
          </InputLine>
          <Button type="submit">Login</Button>
        </MyForm>
      )}
    </Formik>
  );
};
export default LoginForm;
