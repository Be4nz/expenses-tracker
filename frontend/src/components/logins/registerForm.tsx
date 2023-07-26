import { Form, Formik } from "formik";
import React, { useState } from "react";
import { RegisterData } from "../../types/login";
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
    height: 60px;
  }

  .MuiInputBase-input {
    font-size: 25px;
  }
`;

const MyForm = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

interface Props {
  onSubmit: (data: RegisterData) => void;
}

const RegisterForm: React.FC<Props> = ({ onSubmit }) => {
  const [registerData, setRegisterData] = useState<RegisterData>({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegisterData((prevRegisterData) => ({
      ...prevRegisterData,
      [name]: value,
    }));
  };

  return (
    <Formik
      initialValues={{ registerData }}
      onSubmit={() => onSubmit(registerData)}
    >
      {({ values, handleBlur }) => (
        <MyForm>
          <InputLine>
            <InputField
              name="name"
              label="Your Name"
              value={registerData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
          </InputLine>
          <InputLine>
            <InputField
              name="email"
              label="Email"
              value={registerData.email}
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
              value={registerData.password}
              onChange={handleChange}
              onBlur={handleBlur}
              type="password"
              autoComplete="new-password"
              required
            />
          </InputLine>
          <InputLine>
            <InputField
              name="password2"
              label="Repeat Password"
              value={registerData.password2}
              onChange={handleChange}
              onBlur={handleBlur}
              type="password"
              autoComplete="new-password"
              required
            />
          </InputLine>
          <Button type="submit">Register</Button>
        </MyForm>
      )}
    </Formik>
  );
};
export default RegisterForm;
