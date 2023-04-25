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
import { getLocation} from "../controllers/RVM_location/getLocation";
import { updateOperatorInfo,getSingleOperatorInfo} from "../controllers/machinesMonitorin/updateOperators";
import { getZoneBylocation } from "../controllers/RVM_location/getZones";
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
machineRoutes.get("/locations", getLocation);
machineRoutes.get("/:Location/zones", getZoneBylocation);
