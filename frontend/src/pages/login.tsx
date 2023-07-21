import React, { useState } from "react";
import styled from "@emotion/styled";
import { Paper } from "@mui/material";
import * as loginAPI from "../api/login";

const Container = styled(Paper)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  justify-content: center;
  align-items: center;
  height: 600px;
  width: 500px;
  background-color: rgb(39, 38, 45);
  color: white;
  radius: 5px;
`;

const Login: React.FC = () => {
  const [registerUsername, setRegisterUsername] = useState<string>("");
  const [registerPassword, setRegisterPassword] = useState<string>("");
  const [loginUsername, setLoginUsername] = useState<string>("");
  const [loginPassword, setLoginPassword] = useState<string>("");

  const register = () => {
    loginAPI
      .register({
        username: registerUsername,
        password: registerPassword,
      })
      .then((data) => {
        console.log(data);
      });
  };
  const login = () => {
    loginAPI
      .login({
        username: loginUsername,
        password: loginPassword,
      })
      .then((data) => {
        console.log(data);
      });
  };
  const getUser = () => {
    loginAPI.user().then((data) => {
      console.log(data);
    });
  };

  return (
    <Container>
      <div>
        <h1>Register</h1>
        <input
          placeholder="username"
          onChange={(e) => setRegisterUsername(e.target.value)}
        />
        <input
          placeholder="password"
          onChange={(e) => setRegisterPassword(e.target.value)}
        />
        <button onClick={register}>Submit</button>
      </div>
      <div>
        <h1>Login</h1>
        <input
          placeholder="username"
          onChange={(e) => setLoginUsername(e.target.value)}
        />
        <input
          placeholder="password"
          onChange={(e) => setLoginPassword(e.target.value)}
        />
        <button onClick={login}> Submit</button>
      </div>
      <div>
        <h1>Get user</h1>
        <button onClick={getUser}>Submit</button>
      </div>
    </Container>
  );
};

export default Login;
