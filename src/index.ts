import express from 'express';
import cors from 'cors';
import tarefaRouter from './routers/tarefa-router';
import {query} from './repositories/database';

const PORT = process.env.PORT || 4000;
const HOSTNAME = process.env.HOSTNAME || 'http://localhost';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', async (req, res) => {
    const data = await query('select * from tb_tarefa');
    res.send(data);
});

app.use('/api', tarefaRouter);

app.use(cors({
    origin: ['http://localhost:3000']
}));

app.use((req, res) => {
    res.status(404).send('Not Found');
});

app.listen(PORT, () => {
    console.log(`Servidor rodando com sucesso ${HOSTNAME}:${PORT}`);
});