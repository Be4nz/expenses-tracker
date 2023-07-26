import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import { createTables } from "./database/createTables";
import transactionRouter from "./transactions/routes";
import passport from "passport";
import flash from "express-flash";
import session from "express-session";
import loginRouter from "./users/routes";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
const initializePassport = require("./passportConfig");
require("dotenv").config();

declare module "express-session" {
  interface SessionData {
    flash: any;
  }
}

initializePassport(passport);

const app = express();

createTables();

//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    secret: process.env.SESSION_SECRET || "",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(cookieParser(process.env.SESSION_SECRET || ""));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use("", transactionRouter);
app.use("/users", loginRouter(passport));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
