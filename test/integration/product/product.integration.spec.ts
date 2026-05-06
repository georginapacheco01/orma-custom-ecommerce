import app from "../../../src/app.js";
import http from "http";

const PORT = 5001;
let server: http.Server;

beforeAll((done) => {
  server = app.listen(PORT, () => {
    done();
  });
});

afterAll((done) => {
  server.close(done);
});

describe("Product API Integration", () => {
  it("should fetch products", async () => {
    const res = await fetch(`http://localhost:${PORT}/api/products`);
    const data = await res.json();

    expect(res.status).toBe(200);
    expect(data.success).toBe(true);
    expect(data.data).toHaveLength(2);
    expect(data.message).toBe("Products retrieved successfully");
  });
});
