import {
  findProductById,
  getAllProducts,
} from "../../../src/services/products.service.js";
describe("Design Service", () => {
  it("should  get all products ", () => {
    const result = getAllProducts();
    expect(result).toHaveLength(2);
  });

  it("should retrieve a product by id", () => {
    const expectedProduct = { id: "1", name: "Product 1" };
    const found = findProductById("1");

    expect(found).toBeDefined();
    expect(found).toEqual(expectedProduct);
  });
});
