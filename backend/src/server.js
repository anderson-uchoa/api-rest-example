const express= require('express');
const userRoutes = require('./api/userRoutes');
const postRoutes = require('./api/postRoutes');
const config = require('./config/default');

import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan';

const app = express();

app.use(cors({
    origin: 'http://localhost:8081'
}))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use(morgan('tiny'))

app.use(userRoutes)
app.use(postRoutes)



const PORT = config.server.port
const HOST = config.server.host


const server = app.listen(PORT,HOST, (err) => {
    if (err) {
        console.log(err);
        process.exit(1);
    }
    console.log(`Server is running on ${HOST}:${server.address().port}`);
});
