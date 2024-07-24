import { Router } from "express";
import { governmentRegister,governmentUpdate,governmentDelete } from "../controllers/goverment.controller.js";

const router = Router();
router.route("/governmentRecord/add").post(governmentRegister);
router.route("/governmentRecord/update/:id").put(governmentUpdate);
router.route("/governmentRecord/delete/:id").delete(governmentDelete);

export default router;