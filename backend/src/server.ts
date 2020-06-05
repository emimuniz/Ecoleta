import express from 'express';
import routes from './routes';
import path from 'path';
import cors from 'cors';

const app = express();

// configs do express
app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))

// Porta onde o backend estara escutando
app.listen(3333);
