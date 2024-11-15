import { Router } from "express";
import { createEvent, validateEventFields } from "../controllers/eventController";

const router = Router();

router.post("/create", validateEventFields, createEvent);

export default router;
