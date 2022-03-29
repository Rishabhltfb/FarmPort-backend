import { Router } from "express";

const router = Router();
router.use(require("./user"));

module.exports = router;
