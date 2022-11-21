import { NextFunction, Request, Response } from "express";
import { AnyZodObject, ZodError } from "zod";

const validstu =
  (schema: AnyZodObject) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({
        body: req.body,
      });
      next();
    } catch (err) {
      const error = err as ZodError;
      return res.status(400).json({
        message: error.errors[0].message,
      });
    }
  };

export default validstu;