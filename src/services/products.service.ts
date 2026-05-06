type Product = {
  id: string;
  name: string;
};

const products: Product[] = [
  { id: "1", name: "Product 1" },
  { id: "2", name: "Product 2" },
];

export const getAllProducts = () => products;

export const findProductById = (id: string) =>
  products.find((u) => u.id === id);
