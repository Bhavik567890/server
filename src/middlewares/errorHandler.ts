import { Request, Response, NextFunction } from "express";

const errorHandler = (err: any, _: Request, res: Response, __: NextFunction) => {
  console.error(err);
  res.status(500).json({ message: "Internal Server Error" });
};

export default errorHandler;
