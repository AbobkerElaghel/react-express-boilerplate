import cors from 'cors';
import express from 'express';
import httpStatus from 'http-status';
import errorHandler from '../middlewares/handleError';
import ApiError from '../utils/AppError';
import router from '../routes/v1/router.route'
import path from 'path';

const app = express();

app.use(cors());
app.options('*', cors());

app.use('/v1' ,router);
app.use(express.static(path.join(__dirname, '..', '..', '..', 'build')));

// response for requests to non existsing end points (404).
app.use((req, res, next) => {
    next(new ApiError(httpStatus.NOT_FOUND, 'Not found'));
  });

// handles error if exists
app.use(errorHandler);

export default app;