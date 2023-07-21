import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import { createTables } from "./database/createTables";
import transactionRouter from "./transactions/routes";
import loginRouter from "./login/routes";
import passport from "passport";
const passportLocal = require("passport-local").Strategy;
import cookieParser from "cookie-parser";
import session from "express-session";
import * as bodyParser from "body-parser";
import { connectClient, endClient } from "./database/pgConnections";
import flash from "express-flash";
const initializePassport = require("./passportConfig");

initializePassport(passport);

const app = express();

createTables();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());
app.use(
  session({
    secret: "secretcode",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use(cookieParser("secretcode"));

//Routes
app.use("", transactionRouter);
loginRouter.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/current",
    failureRedirect: "/current",
  })
);
app.use("/auth", loginRouter);

//Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
