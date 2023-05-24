import express from "express";
import { auth } from "../middlewares/auth";
export const Recycle = express.Router();
import {
  saveNewRecyclable,
  getMyRecyclingStats,
  removeRecyclables,
} from "../controllers/RVM_location/Recyclables";
import {
  defineRewards,
  getAllRewordsInfo,
  getSingleRewordInfo,
  updateRewardInfo,
} from "../controllers/contributions/Rewards";
Recycle.post("/recyclables/add", auth(["client", "admin"]), saveNewRecyclable);
Recycle.get(
  "/recyclables/list",
  auth(["client", "admin"]),
  getMyRecyclingStats
);
Recycle.delete(
  "/recyclables/:id",
  auth(["client", "admin"]),
  removeRecyclables
);
Recycle.post("/rewards/add", auth(["admin"]), defineRewards);
Recycle.get("/rewards/list", getAllRewordsInfo);
Recycle.get("/rewards/list/:bottleType", getSingleRewordInfo);
Recycle.patch("/rewards/update/:bottleType", auth(["admin"]), updateRewardInfo);
