import express from 'express';
import { auth } from "../middlewares/auth";
import transferPayment from '../controllers/contributions/transferPayment';
export const getPaidRoute = express.Router();
getPaidRoute.post('/getpaid',auth(['admin','client']),transferPayment);