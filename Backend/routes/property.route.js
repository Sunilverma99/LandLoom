import { Router } from "express";
import { propertyRegister,propertyUpdate,propertyDelete } from "../controllers/property.controller.js";

const router = Router();

router.route("/listproperty").post(propertyRegister);
router.route("/updateproperty").put(propertyUpdate);
router.route("/deleteproperty").delete(propertyDelete);
export default router;