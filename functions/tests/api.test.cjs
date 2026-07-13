const test = require("node:test");
const assert = require("node:assert/strict");
const http = require("node:http");

const { app } = require("../index.js");

function normalizeText(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

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
    assert.ok(payload.cities.some((item) => normalizeText(item.city) === "montreal"));
  } finally {
    server.close();
  }
});

test("GET /api/countries/CA/regions returns short region codes", async () => {
  const { server, baseUrl } = await startServer();
  try {
    const response = await fetch(`${baseUrl}/api/countries/CA/regions`);
    assert.equal(response.status, 200);
    const payload = await response.json();
    assert.ok(Array.isArray(payload));
    assert.ok(payload.some((region) => region.code === "QC" && region.fullCode === "CA-QC"));
  } finally {
    server.close();
  }
});

test("GET /api/languages prioritizes France for French", async () => {
  const { server, baseUrl } = await startServer();
  try {
    const response = await fetch(`${baseUrl}/api/languages`);
    assert.equal(response.status, 200);
    const payload = await response.json();
    assert.ok(Array.isArray(payload.fra));
    assert.equal(payload.fra[0], "FR");
  } finally {
    server.close();
  }
});
