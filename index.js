// Module 18 Challenge - Social Media Backend API
// 01/18/2023 Muugii M.

const express = require("express");
const db = require("./config/connection");
const routes = require("./routes");
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./openapi.yaml');

const cwd = process.cwd();

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// serve swagger UI at the /api-docs path
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(routes);

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server for Social Media running on port ${PORT}!`);
  });
});
