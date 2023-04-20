import express from 'express';
import { googleAuthMiddleware,googleAuthCallbackMiddleware  } from '../controllers/authController/ConfigGoogleAuth/googleAuth';
import { loginWithGoogle } from '../controllers/authController/loginWithGoogle';
export const googleAuth=express.Router();
googleAuth.get('/auth/google', googleAuthMiddleware);
googleAuth.get('/auth/google/redirect', googleAuthCallbackMiddleware,loginWithGoogle)