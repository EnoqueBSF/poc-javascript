var http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  });
  res.end(
    JSON.stringify([
      { name: "Alan Felipe", age: 20, phone: "83988888888" },
      { name: "Gabriel", age: 18, phone: "83977777777" },
      { name: "Enoque", age: 21, phone: "8396666666" },
    ])
  );
});

server.listen(8080, () => {
  console.log("Rodando na porta 8080");
});
