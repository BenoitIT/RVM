import express from "express";
import { auth } from "../middlewares/auth";
export const Recycle = express.Router();
import {
  saveNewRecyclable,
  getMyRecyclingStats,
  removeRecyclables,
} from "../controllers/RVM_location/Recyclables";
Recycle.post("/recyclables/add",auth(['client','admin']), saveNewRecyclable);
Recycle.get("/recyclables/list",auth(['client','admin']), getMyRecyclingStats);
Recycle.delete("/recyclables/:id", auth(['client','admin']),removeRecyclables);
