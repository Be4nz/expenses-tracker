import { Request, Response } from "express";
import { pool } from "../database/pgConnections";
import queries from "./queries";
import * as bcrypt from "bcryptjs";

const login = (req: Request, res: Response) => {
  console.log(req.body);
};

const register = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  pool.query(queries.getUserByUsername, [username], (error, results) => {
    if (error) throw error;
    if (results.rows.length > 0) {
      res.send("Username Already Exists");
    } else {
      pool.query(
        queries.addUser,
        [username, hashedPassword],
        (error, results) => {
          if (error) throw error;
          res.status(201).send("User Registered");
        }
      );
    }
  });
};

const user = (req: Request, res: Response) => {};

export default { login, register, user };
