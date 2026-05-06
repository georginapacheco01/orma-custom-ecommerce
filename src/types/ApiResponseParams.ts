import { Response } from "express";
export type ApiResponseParams<T> = {
  res: Response;
  statusCode: number;
  message?: string;
  data?: T;
};
