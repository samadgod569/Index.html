const http = require("http");

const PORT = process.env.PORT || 4000;

http.createServer((req, res) => {
  res.end("🔥 Your VPS app is running!");
}).listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
