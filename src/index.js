import express from 'express';
import db from './database/models/index';
import docs from './documentation/index'
import i18next from 'i18next';
import Backend from 'i18next-fs-backend';
import middleware from 'i18next-http-middleware';
import { authRoutes } from './Routes/authRoutes';
import { machineRoutes } from './Routes/machine';
import { googleAuth } from './Routes/googleAuth';
import { Recycle } from './Routes/contribution';
const app = express();
//configuring multiple languages
i18next
  .use(Backend)
  .use(middleware.LanguageDetector)
  .init({
    fallbackLng: 'en',
    backend: {
      loadPath: './src/locales/{{lng}}/translation.json',
    },
    interpolation: {
      escapeValue: false,
      prefix: '{{',
      suffix: '}}'
    }
  });
//configuring  app middlewares
app.use(express.json());
app.use(middleware.handle(i18next));
//directing app to the routes
app.use('/api/rvm/users',authRoutes);
app.use('/api/rvm/machines',machineRoutes);
app.use('/api/rvm/recycle',Recycle);
app.use(googleAuth);
app.use(docs);
//start the app
 const PORT=process.env.PORT||4000;
db.sequelize.sync({ force: false }).then(async () => {
  console.log('Database connected successfully');
  app.listen(PORT, ()=>console.log(`App has started and listening on ${PORT} port`));
});
