import boolParser from 'express-query-boolean';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import logger from 'morgan';
import helmet from 'helmet';
import routes from './routes';

const app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(boolParser());
app.use(helmet());
app.use(cors());

app.use('/', routes);

module.exports = app;