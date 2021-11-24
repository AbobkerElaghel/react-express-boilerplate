import mongoose, { Mongoose } from 'mongoose';
import config from '../config/config';

export default async (): Promise<Mongoose> => {
    return mongoose.connect(config.databaseUrl);
  };