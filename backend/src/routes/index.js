import { Router } from "express";
import testRoutes from "./test/route.js";

const apiRoutes = Router();

apiRoutes.use("/test", testRoutes);

export default apiRoutes;
