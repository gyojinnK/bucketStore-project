const express = require("express");
const axios = require("axios");
const app = express();
const port = 3000;

// CORS 설정
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// 프록시 서버 엔드포인트
app.get("/api", async (req, res) => {
  try {
    // 클라이언트가 요청한 URL 가져오기
    const targetUrl = req.query.url;

    // 실제 서버에 요청 보내기
    const response = await axios.get(targetUrl);

    // 서버 응답을 클라이언트에게 전달
    res.json(response.data);
  } catch (error) {
    // 에러 처리
    res.status(500).json({ error: error.message });
  }
});

// 서버 시작
app.listen(port, () => {
  console.log(`Proxy server is running on port ${port}`);
});
