import express from "express";
import * as controller from "./grocerylist.controller";

const router = express.Router();

router.route("/grocerylists/:id*?").get(controller.get);
router.route("/grocerylists").post(controller.post);
//router.route("/grocerylists").patch(controller.patch);

export default router;
