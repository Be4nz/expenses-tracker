import { Client, Pool } from "pg";

export const client = new Client({
  host: "127.0.0.1",
  user: "postgres",
  database: "expenses-tracker",
  password: "password",
  port: 5432,
});

export const pool = new Pool({
  host: "127.0.0.1",
  user: "postgres",
  database: "expenses-tracker",
  password: "password",
  port: 5432,
});
