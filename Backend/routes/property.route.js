import { Router } from "express";
import { propertyRegister,propertyUpdate,propertyDelete ,getAllRegisterproperty} from "../controllers/property.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
const router = Router();

router.route("/listproperty").post(propertyRegister);
router.route("/getAlllistedproperty").get(getAllRegisterproperty);
router.route("/updateproperty").put(propertyUpdate);
router.route("/deleteproperty").delete(propertyDelete);
export default router;