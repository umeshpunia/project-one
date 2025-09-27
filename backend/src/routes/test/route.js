import { Router } from "express";
import {
  addData,
  deleteSingle,
  getData,
  getSingle,
  updateSingle,
} from "./controller.js";

const testRoutes = Router();

testRoutes.post("/add", addData);
testRoutes.get("/all", getData);
testRoutes.get("/single/:id", getSingle);
testRoutes.put("/update/:id", updateSingle);
testRoutes.delete("/delete/:id", deleteSingle);

export default testRoutes;
