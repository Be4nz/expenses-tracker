import React, { useState } from "react";
import axios from "axios";
import { login } from "../api/login";
import { useNavigate } from "react-router-dom";

interface Error {
  message: string;
}

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<Error[]>([]);

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const loginStatus = await login(email, password);
      console.log(loginStatus);
      if (loginStatus === 200) {
        navigate("/current");
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
      <h1>Login</h1>

      <ul>
        {errors &&
          errors.map((error) => <li key={error.message}>{error.message}</li>)}
      </ul>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <input type="submit" value="Login" />
        </div>

        <a href="/register">Register</a>
      </form>
    </div>
  );
};

export default Login;
