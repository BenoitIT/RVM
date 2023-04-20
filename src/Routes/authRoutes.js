import express from 'express';
import { registerNewClient } from '../controllers/authController/userRegister';
import { getAllClients } from '../controllers/authController/listClients';
import {authenticate } from '../controllers/authController/aunthentication';
export const authRoutes = express.Router();
authRoutes.post('/register',registerNewClient('client'));
authRoutes.post('/newAdmin',registerNewClient('admin'));
authRoutes.get('/clients',getAllClients);
authRoutes.post('/login',authenticate);