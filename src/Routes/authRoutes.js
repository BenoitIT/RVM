import express from 'express';
import { registerNewClient } from '../controllers/authController/userRegister';
export const authRoutes = express.Router();
authRoutes.post('/register',registerNewClient('client'));
authRoutes.post('/newAdmin',registerNewClient('admin'));