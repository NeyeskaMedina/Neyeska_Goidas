import express from "express";
import {newLike} from "../../src/api/v1/controllers/newLike.js";
import { getLike } from "../../src/api/v1/controllers/getLike.js";
import { report } from "../../middleware/report.js";

const router = express.Router();

router.post("/users", report, newLike)
router.get('/users', report, getLike)

export default router;