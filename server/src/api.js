const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());

app.get("/goods/list", async (req, res) => {
  const page = req.query.page || 1;
  const type = req.query.type || "newest";
  const length = 12;
  const category = 25;
  console.log(`Fetching data for page: ${page}`); // 로그 추가
  console.log(`Fetching data for type: ${type}`); // 로그 추가
  try {
    const response = await axios.get(
      `https://bucket-assignment-vercel.vercel.app/api?length=${length}&category=${category}&type=${type}&page=${page}`
    );
    res.json(response.data);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching data", error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Proxy server is running on port ${port}`);
});
