import { ApiErrorParams } from "../types/ApiErrorParams";

export const sendError = <T>({
  res,
  statusCode = 500,
  message = "Internal Server Error",
  error,
}: ApiErrorParams<T>) => {
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
    error,
  });
};