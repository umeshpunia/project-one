import express from "express";
import { dbConnection } from "./src/services/index.js";
import apiRoutes from "./src/routes/index.js";

const app = express();
const port = 8000;

// middlewares
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello");
});

app.use("/api/v1", apiRoutes);

app.listen(port, () => {
  console.log("server runs on http://localhost:" + port);
  dbConnection();
});
