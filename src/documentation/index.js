import swagger from 'swagger-ui-express';
import user from './user';
import clients from './clients';
import login from './login';
import admin from './admin';
import operators from './operators';
import machine from './machine';
import schemas from './schema';
import Recylables from './Recylables';
import Rewards from './Rewards';
import { Router } from 'express';
const { serve, setup } = swagger;
const swaggerDocRouter = Router();
const options = {
  openapi: '3.0.3',
  info: {
    title: 'RVM Services APIs',
    version: '1.0.0',
    description:
      'The API documentation of all endpoint RVM web application',
  },
  api: `http://localhost:${process.env.PORT || 4000}/`,
  security: [
    {
      bearerAuth: [],
    }],
  components: {
    schemas,
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
      google_auth: {
        type: 'oauth2',
        flows: {
          authorizationCode: {
            authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
            tokenUrl: 'https://oauth2.googleapis.com/token',
           
              scopes: {
                'https://www.googleapis.com/auth/userinfo.email': 'View your email address',
              'https://www.googleapis.com/auth/userinfo.profile': 'View your basic profile info',
                              },
         
            clientSecret: {
              type: 'apiKey',
              in: 'header',
              name: 'Authorization',
            },
          },
        },
      },
    },
  },
  paths: { 
    ...user,
    ...admin,
    ...clients,
    ...login,
    ...operators,
    ...machine,
    ...Recylables,
    ...Rewards
   },
};

swaggerDocRouter.use('/docs', serve, setup(options));

export default swaggerDocRouter;