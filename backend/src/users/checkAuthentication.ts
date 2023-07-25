import { Request, Response } from "express";

export const checkAuthenticated = (
  req: Request,
  res: Response,
  next: Function
) => {
  if (req.isAuthenticated()) {
    return res
      .status(200)
      .json({ status: "success", message: "User is authenticated" });
  }
  return res
    .status(200)
    .json({ status: "fail", message: "User is not authenticated" });
};

export const checkNotAuthenticated = (
  req: Request,
  res: Response,
  next: Function
) => {
  if (req.isAuthenticated()) {
    return next();
  }
  return res
    .status(401)
    .json({ status: "fail", message: "User is not authenticated" });
};
