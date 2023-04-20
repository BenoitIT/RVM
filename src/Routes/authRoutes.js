import express from 'express';
import { registerNewClient } from '../controllers/authController/userRegister';
import { getAllClients } from '../controllers/authController/listClients';
export const authRoutes = express.Router();
authRoutes.post('/register',registerNewClient('client'));
authRoutes.post('/newAdmin',registerNewClient('admin'));
authRoutes.get('/clients',getAllClients);