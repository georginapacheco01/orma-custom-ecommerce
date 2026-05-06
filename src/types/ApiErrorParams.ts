import { Response } from "express";
export type ApiErrorParams<T> = {
  res: Response;
  statusCode?: number;
  message?: string;
  error?: T;
};
