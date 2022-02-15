import express from 'express';
import { router } from './routes/index';
import './database';

import './shared/container';
const app = express();

app.use(express.json());
var cors = require('cors');

app.use(cors());
app.use(router);
app.listen(3333, () => console.log('Server is running'));
