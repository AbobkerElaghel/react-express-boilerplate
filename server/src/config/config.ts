import dotenv from 'dotenv';
import path from 'path';

// ---------------------------------------
// to always connect to online database //
// change to 
// dotenv.config({ path: path.join(__dirname, '..', '..', '.', process.env.NODE_ENV === 'production' ? '.env.production' : ".env.development") });
// to check env files
dotenv.config({ path: path.join(__dirname, '..', '..', '.', '.env.production') });
// ---------------------------------------

export default {
    env: process.env.NODE_ENV || 'production',
    port: process.env.PORT || 8000,
    // set to production by default to connect to online database.
    databaseUrl: process.env.DATABASE_URL,
}