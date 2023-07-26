import React, { useState } from "react";
import { login } from "../api/login";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { Title } from "../components/styled/Title";
import { LoginData } from "../types/login";
import LoginForm from "../components/logins/loginForm";
import { Paper } from "@mui/material";

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

const Container = styled(Paper)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 600px;
  width: 500px;
  background-color: rgb(39, 38, 45);
  color: white;
  radius: 5px;
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

const Login: React.FC = () => {
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  const handleSubmit = async (data: LoginData) => {
    const { email, password } = data;

    try {
      const loginResponse = await login(email, password);
      if (loginResponse.status === 200) {
        navigate("/current");
      }
    } catch (error) {
      setError("Wrong email or password");
    }
  };

  return (
    <div>
      <Title>Login</Title>

      <Container>
        <LoginForm onSubmit={handleSubmit} />
        <Button onClick={() => navigate("/register")}>Register Now</Button>
      </Container>
      <ErrorList>{<li>{error}</li>}</ErrorList>
    </div>
  );
};

export default Login;
