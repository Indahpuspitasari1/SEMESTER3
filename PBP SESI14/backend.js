const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.post("/kurang", (req, res) => {
  try {
    if (!req.body || !req.body.angka1 || !req.body.angka2) {
      return res.status(400).json({ error: "Data tidak lengkap" });
    }

    const angka1 = parseInt(req.body.angka1);
    const angka2 = parseInt(req.body.angka2);

    // Pastikan angka1 dan angka2 adalah angka yang valid
    if (isNaN(angka1) || isNaN(angka2)) {
      return res.status(400).json({ error: "Angka tidak valid" });
    }

    const hasil = angka1 - angka2;

    res.status(200).json({ hasil });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Terjadi kesalahan server" });
  }
});

module.exports = app;
