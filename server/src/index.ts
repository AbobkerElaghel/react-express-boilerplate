import config from './config/config';
import app from './loaders/app';

app.listen(config.port, () => {
    console.log(`server listening on port ${config.port}`,);
})
