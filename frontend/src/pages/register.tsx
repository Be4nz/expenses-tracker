import React, { useState } from "react";
import axios from "axios";
import { register } from "../api/login";
import { useNavigate } from "react-router-dom";
import RegisterForm from "../components/logins/registerForm";
import { RegisterData } from "../types/login";
import { styled } from "@mui/material";
import { Title } from "../components/styled/Title";
import { Container } from "../components/styled/ModalContainer";

interface Error {
  message: string;
}

const Button = styled("button")`
  width: 150px;
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
  margin-top: 50px;
`;

const ErrorList = styled("ul")`
  color: red;
  list-style: none;
  padding: 0;
  margin: 0;
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
`;
const Message = styled("p")`
  color: white;
  list-style: none;
  padding: 0;
  margin: 0;
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
`;

const Register: React.FC = () => {
  const [errors, setErrors] = useState<Error[]>([]);
  const [message, setMessage] = useState<string | null>();

  const navigate = useNavigate();

  const handleFormSubmit = async (registerData: RegisterData) => {
    const { name, email, password, password2 } = registerData;
    setErrors([]);
    setMessage(null);

    try {
      const response = await register(name, email, password, password2);
      if (response.data.message) {
        setMessage(response.data.message);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const errorData = error.response?.data;
        if (errorData && Array.isArray(errorData.errors)) {
          setErrors(errorData.errors);
        }
      } else {
        console.error("Error:", error);
      }
    }
  };

  return (
    <div>
      <Title>Register</Title>
      <Container>
        <RegisterForm onSubmit={handleFormSubmit} />
        <Button onClick={() => navigate("/login")}>Login here</Button>
      </Container>
      <ErrorList>
        {errors.map((error, index) => (
          <li key={index}>{error.message}</li>
        ))}
      </ErrorList>
      {message && <Message>{message}</Message>}
    </div>
  );
};

export default Register;
