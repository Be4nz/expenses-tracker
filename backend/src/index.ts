import express from "express";
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

//app.use(express.urlencoded({ extended: false }));
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

//app.use(express.json());

app.use("", transactionRouter);
app.use("/users", loginRouter(passport));

// app.get("/", (req: Request, res: Response) => {
//   res.render("index");
// });

// app.get(
//   "/users/register",
//   checkAuthenticated,
//   (req: Request, res: Response) => {
//     res.render("register.ejs");
//   }
// );

// app.get("/users/login", checkAuthenticated, (req: Request, res: Response) => {
//   // flash sets a messages variable. passport sets the error message
//   console.log(req.session.flash.error);
//   res.render("login.ejs");
// });

// app.get(
//   "/users/dashboard",
//   checkNotAuthenticated,
//   (req: Request, res: Response) => {
//     console.log(req.isAuthenticated());
//     res.render("dashboard", { user: (req.user as any).name });
//   }
// );

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
