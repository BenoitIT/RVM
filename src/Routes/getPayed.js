import express from 'express';
import { auth } from "../middlewares/auth";
import transferPayment from '../controllers/contributions/transferPayment';
import getMyBalance from '../controllers/contributions/getBalance';
export const getPaidRoute = express.Router();
getPaidRoute.post('/getpaid',auth(['admin','client']),transferPayment);
getPaidRoute.get('/mybalance',auth(['admin','client']),getMyBalance);