import express from 'express';
import {registerNewOperator} from '../controllers/machinesMonitorin/machineOperators';
import {registerNewMachine} from '../controllers/machinesMonitorin/registerMachine';
export const machineRoutes = express.Router();
machineRoutes.post('/newMachine',registerNewMachine);
machineRoutes.post('/newOperator',registerNewOperator);