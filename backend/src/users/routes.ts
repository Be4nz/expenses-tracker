import { Router } from "express";
import { Request, Response, NextFunction } from "express";
import controller from "./controller";
import { PassportStatic } from "passport";
import {
  checkAuthenticated,
  checkNotAuthenticated,
} from "./checkAuthentication";

const loginRouter = (passport: PassportStatic) => {
  const router = Router();

  router.post("/login", (req: Request, res: Response, next: NextFunction) => {
    passport.authenticate("local", (err: Error, user: any, info: any) => {
      if (err) {
        return next(err); // will handle error
      }
      if (!user) {
        return res.status(401).json(info); // Unauthorized
      }
      req.logIn(user, function (err: Error) {
        if (err) {
          return next(err);
        }
        // User found & authenticated
        return res
          .status(200)
          .json({ message: "Login successful", user: req.user });
      });
    })(req, res, next);
  });

  router.post("/register", controller.registerUser);

  router.get("/logout", controller.logoutUser);

  router.get("/checkAuthenticated", checkAuthenticated, (req, res) => {});

  router.get("/checkNotAuthenticated", checkNotAuthenticated, (req, res) => {});

  router.get("/getCurrent", controller.getUserId);

  return router;
};

export default loginRouter;
