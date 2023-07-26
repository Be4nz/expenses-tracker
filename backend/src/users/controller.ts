import { Request, Response } from "express";
import { pool } from "../database/pgConnections";
import bcrypt from "bcryptjs";
import queries from "./queries";
//import queries from "./queries";

const registerUser = async (req: Request, res: Response) => {
  let { name, email, password, password2 } = req.body;

  let errors: any[] = [];

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
        }
        if (results.rows.length > 0) {
          errors.push({ message: "Email already registered" });
          return res.status(400).json({ errors }); // <=== Change here
        } else {
          pool.query(
            queries.insertUser,
            [name, email, hashedPassword],
            (err: Error, results: any) => {
              if (err) {
                throw err;
              }
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
  req.session.destroy((err) => {
    if (err) {
      console.log("Error while destroying session: ", err);
      return res
        .status(500)
        .json({ message: "Encountered an error while logging out" });
    } else {
      req.logout(() => {});
      return res
        .status(200)
        .json({ message: "You have logged out successfully" });
    }
  });
};

const getUserId = (req: Request, res: Response): Response | undefined => {
  if (req.user && "id" in req.user) {
    const userId = req.user.id;
    return res.send({ userId });
  } else {
    return res.status(401).send({ error: "Not Authorized" });
  }
};

export default { registerUser, logoutUser, getUserId };
