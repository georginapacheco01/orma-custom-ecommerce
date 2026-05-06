import { Request, Response } from "express";
import  {findProductById, getAllProducts} from "../services/products.service";

export const getProducts = (_req: Request, res: Response) => {
  const products = getAllProducts();
  res.json(products);
};

export const getProductById = (_req: Request<{id: string}>, res: Response) => {
  const products = findProductById(_req.params.id);
  res.json(products);
};
