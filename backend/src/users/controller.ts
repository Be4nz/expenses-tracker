import { Request, Response } from "express";
import { pool } from "../database/pgConnections";
import bcrypt from "bcryptjs";
import queries from "./queries";
//import queries from "./queries";

const registerUser = async (req: Request, res: Response) => {
  let { name, email, password, password2 } = req.body;

  let errors: any[] = [];

  console.log({
    name,
    email,
    password,
    password2,
  });

  if (!name || !email || !password || !password2) {
    errors.push({ message: "Please enter all fields" });
  }

  if (password.length < 6) {
    errors.push({ message: "Password must be at least 6 characters long" });
  }

  if (password !== password2) {
    errors.push({ message: "Passwords do not match" });
  }

  if (errors.length > 0) {
    return res.status(400).json({ errors }); // <=== Change here
  } else {
    const hashedPassword = await bcrypt.hash(password, 10);

    // Validation passed
    pool.query(
      queries.selectUserByEmail,
      [email],
      (err: Error, results: any) => {
        if (err) {
          console.log(err);
        }
        console.log(results.rows);

        if (results.rows.length > 0) {
          return res.status(409).json({ message: "Email already registered" }); // <=== Change here
        } else {
          pool.query(
            queries.insertUser,
            [name, email, hashedPassword],
            (err: Error, results: any) => {
              if (err) {
                throw err;
              }
              console.log(results.rows);
              return res
                .status(200)
                .json({ message: "You are now registered. Please log in" }); // <=== Change here
            }
          );
        }
      }
    );
  }
};

const logoutUser = (req: Request, res: Response) => {
  req.logout(() => {});
  return res.status(200).json({ message: "You have logged out successfully" }); // <=== Change here
};

export default { registerUser, logoutUser };
