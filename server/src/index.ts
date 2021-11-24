import config from './config/config';
import app from './loaders/app';
import databaseConnection from './loaders/database';

databaseConnection()
    .then(() => {
        console.log('Database Connected!');
        app.listen(config.port, () => {
            console.log(`server listening on port ${config.port}`,);
        })
    })
    .catch(() => {
        console.error('error connecting to the database!');
        console.error('server closed connection');
    });
