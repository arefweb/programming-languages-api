const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.APP_PORT;
const programmingLanguagesRouter = require("./routes/programmingLanguages");
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.js');

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.json({ message: "ok Aref" });
});

app.use("/api", programmingLanguagesRouter);

/* Error handler middleware */
app.use((err, req, res) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  
});

app.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument)
);

app.listen(port, () => {
  console.log(`API at http://localhost:${port}/api`);
});
