const app = require("./backend");
const request = require("supertest");

describe("Pengujian backend", () => {
  it("Harus mengurangi dua angka dengan benar", async () => {
    const response = await request(app)
      .post("/kurang")
      .send({ angka1: 5, angka2: 3 });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("hasil", 2);
  });
});
