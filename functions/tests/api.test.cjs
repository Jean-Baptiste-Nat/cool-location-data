const test = require("node:test");
const assert = require("node:assert/strict");
const http = require("node:http");

const { app } = require("../index.js");

function startServer() {
  return new Promise((resolve) => {
    const server = http.createServer(app);
    server.listen(0, "127.0.0.1", () => {
      const address = server.address();
      resolve({
        server,
        baseUrl: `http://127.0.0.1:${address.port}`
      });
    });
  });
}

test("GET /api/version returns metadata", async () => {
  const { server, baseUrl } = await startServer();
  try {
    const response = await fetch(`${baseUrl}/api/version`);
    assert.equal(response.status, 200);
    const payload = await response.json();
    assert.ok(payload.version);
    assert.ok(payload.build);
    assert.ok(payload.lastUpdate);
  } finally {
    server.close();
  }
});

test("GET /api/countries/CA returns Canada", async () => {
  const { server, baseUrl } = await startServer();
  try {
    const response = await fetch(`${baseUrl}/api/countries/CA`);
    assert.equal(response.status, 200);
    const payload = await response.json();
    assert.equal(payload.code, "CA");
    assert.equal(payload.currency, "CAD");
  } finally {
    server.close();
  }
});

test("GET /api/search finds Montreal", async () => {
  const { server, baseUrl } = await startServer();
  try {
    const response = await fetch(`${baseUrl}/api/search?q=montreal`);
    assert.equal(response.status, 200);
    const payload = await response.json();
    assert.ok(Array.isArray(payload.cities));
    assert.ok(payload.cities.some((item) => item.city.toLowerCase() === "montreal"));
  } finally {
    server.close();
  }
});
