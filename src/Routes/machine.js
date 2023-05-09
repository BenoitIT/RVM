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
import { auth } from '../middlewares/auth';
import { getLocation} from "../controllers/RVM_location/getLocation";
import { updateOperatorInfo,getSingleOperatorInfo} from "../controllers/machinesMonitorin/updateOperators";
import { getZoneBylocation } from "../controllers/RVM_location/getZones";
export const machineRoutes = express.Router();
machineRoutes.post("/newMachine", auth(['admin']),registerNewMachine);
machineRoutes.post("/newOperator", auth(['admin']),registerNewOperator);
machineRoutes.get("/all", auth(['admin']),getAllMachines);
machineRoutes.get("/list-operators",auth(['admin']), getAllOperators);
machineRoutes.put("/machine/:id/update", auth(['admin']), updateMachinesInfo);
machineRoutes.get("/machine/:id",auth(['admin']), getSingleMachinesInfo);
machineRoutes.delete("/machine/:id/delete",auth(['admin']), deleteSingleMachinesInfo);
machineRoutes.put("/operator/:id/update", auth(['admin']),updateOperatorInfo);
machineRoutes.get("/operator/:id", auth(['admin']),getSingleOperatorInfo);
machineRoutes.get("/locations", getLocation);
machineRoutes.get("/:Location/zones", getZoneBylocation);
