import React, { useState } from "react";
import axios from "axios";
import { register } from "../api/login";
import { useNavigate } from "react-router-dom";

interface Error {
  message: string;
}

const Register: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [errors, setErrors] = useState<Error[]>([]);

  const navigate = useNavigate();

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      register(name, email, password, password2);
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

    navigate("/login");
  };

  return (
    <div>
      <h1>Register</h1>

      <ul>
        {errors.map((error, index) => (
          <li key={index}>{error.message}</li>
        ))}
      </ul>

      <form onSubmit={handleFormSubmit}>
        <div>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
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
          <input
            type="password"
            id="password2"
            name="password2"
            placeholder="Confirm Password"
            required
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
          />
        </div>
        <div>
          <input type="submit" value="Register" />
        </div>

        <a href="/login">Already registered? Login here</a>
      </form>
    </div>
  );
};

export default Register;
