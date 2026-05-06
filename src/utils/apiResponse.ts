import { ApiResponseParams } from "../types/ApiResponseParams.js";

export const sendResponse = <T>({
  res,
  statusCode = 200,
  message = "Success",
  data,
}: ApiResponseParams<T>) => {
  return res.status(statusCode).json({
    success: statusCode < 400,
    statusCode,
    message,
    data,
  });
};
