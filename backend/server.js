import express from 'express';
// import { json, urlencoded } from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import dotenv from 'dotenv';
import colors from 'colors';
import { errorHandler } from './middleware/errorMiddleware.js';
import weatherRoutes from './routes/weatherRoutes.js';

dotenv.config();

export const app = express();
app.set('trust proxy', 1);

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
app.use(express.json({ extended: false }));
app.disable('x-powered-by');
app.use(cors());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  next();
});

const PORT = process.env.PORT || 5001;

app.get('/', (req, res) => {
  res.status(200).json({ message: 'API is running' });
});

app.use('/api/weather', weatherRoutes);

try {
  app.listen(PORT, () => {
    console.log(`server running on ${PORT}`.cyan.bold);
  });
} catch (e) {
  console.error(e);
}
