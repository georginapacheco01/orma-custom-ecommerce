import { Request, Response } from "express";
import { findProductById, getAllProducts } from "../services/products.service";
import { sendResponse } from "../utils/apiResponse";
import { sendError } from "../utils/errorResponse";

export const getProducts = (_req: Request, res: Response) => {
  try {
    const products = getAllProducts();
    return sendResponse({
      res,
      statusCode: 200,
      message: "Products retrieved successfully",
      data: products,
    });
  } catch (error) {
    return sendError({
      res,
      statusCode: 500,
      message: "Failed to retrieve products",
      error,
    });
  }
};

export const getProductById = (req: Request<{ id: string }>, res: Response) => {
  try {
    const product = findProductById(req.params.id);
    if (!product) {
      return sendError({
        res,
        statusCode: 500,
        message: "Failed to find product",
        error: `Product with id ${req.params.id} not found`,
      });
    }
    return sendResponse({
      res,
      statusCode: 200,
      message: "Product found successfully",
      data: product,
    });
  } catch (error) {
    return sendError({
      res,
      statusCode: 500,
      message: "Failed to find product",
      error,
    });
  }
};
