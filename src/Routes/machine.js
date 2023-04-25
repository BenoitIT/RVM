import express from "express";
import { registerNewOperator } from "../controllers/machinesMonitorin/machineOperators";
import { registerNewMachine } from "../controllers/machinesMonitorin/registerMachine";
import {
  getAllMachines,
  getAllOperators,
} from "../controllers/machinesMonitorin/getMachines";
import {
  updateMachinesInfo,
  getSingleMachinesInfo,
  deleteSingleMachinesInfo,
} from "../controllers/machinesMonitorin/updateMachine";
import { updateOperatorInfo ,getSingleOperatorInfo} from "../controllers/machinesMonitorin/updateOperators";
export const machineRoutes = express.Router();
machineRoutes.post("/newMachine", registerNewMachine);
machineRoutes.post("/newOperator", registerNewOperator);
machineRoutes.get("/all", getAllMachines);
machineRoutes.get("/list-operators", getAllOperators);
machineRoutes.put("/machine/:id/update", updateMachinesInfo);
machineRoutes.get("/machine/:id", getSingleMachinesInfo);
machineRoutes.delete("/machine/:id/delete", deleteSingleMachinesInfo);
machineRoutes.put("/operator/:id/update", updateOperatorInfo);
machineRoutes.get("/operator/:id", getSingleOperatorInfo);
