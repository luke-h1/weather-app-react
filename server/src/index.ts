import express from 'express';
import 'dotenv/config';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import cors from 'cors';
import { errorHandler } from './middleware/error';
import weatherRoutes from './routes/weatherRoutes';

const main = async () => {
  const app = express();
  app.set('trust-proxy', 1);

  const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 mins
    max: 80, // limit each IP addr to 80 requests per 15 mins
    message: 'Too many requests from this IP. Try again in 15 minutes',
  });
  app.use(helmet());
  app.use(limiter);
  app.use(errorHandler);
  app.use(express.json());
  app.use(morgan('dev'));
  app.use(express.json());
  app.disable('x-powered-by');
  app.use(cors());
  const PORT = process.env.PORT || 5000;
  app.get('/', (_, res) => {
    res.status(200).json({ message: 'API is running 🚀' });
  });
  app.use('/api/weather', weatherRoutes);
  try {
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (e) {
    console.error(e);
  }
};
main().catch((e) => {
  console.error(e);
});
