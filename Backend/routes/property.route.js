import { Router } from "express";
import { propertyRegister } from "../controllers/property.controller.js";

const router = Router();

router.route("/listproperty").post(propertyRegister);

export default router;