import express from 'express';
import {registerNewOperator} from '../controllers/machinesMonitorin/machineOperators';
import {registerNewMachine} from '../controllers/machinesMonitorin/registerMachine';
import { getAllMachines,getAllOperators } from '../controllers/machinesMonitorin/getMachines';
export const machineRoutes = express.Router();
machineRoutes.post('/newMachine',registerNewMachine);
machineRoutes.post('/newOperator',registerNewOperator);
machineRoutes.get('/all',getAllMachines );
machineRoutes.get('/list-operators',getAllOperators );