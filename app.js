// Entry point for Vercel only. Vercel needs the Express app itself as the module export,
// but server.js exports { app, server }. This file hands Vercel the app from server.js
// without changing it. Local development still runs server.js (npm run dev / npm start).
require("express");
module.exports = require("./server").app;
