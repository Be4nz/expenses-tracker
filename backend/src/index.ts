import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import { createTransactionsTable } from "./database/createTables";
import transactionRouter from "./transactions/routes";

const app = express();

createTransactionsTable();

const requestLogger = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  console.log("Method:", request.method);
  console.log("Path:  ", request.path);
  console.log("Body:  ", request.body);
  console.log("---");
  next();
};

const unknownEndpoint = (request: Request, response: Response) => {
  response.status(404).send({ error: "unknown endpoint" });
};

app.use(cors());
app.use(express.json());
app.use(requestLogger);

app.use("", transactionRouter);

app.use(unknownEndpoint);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
