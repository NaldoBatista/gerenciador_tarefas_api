import express from 'express';
import cors from 'cors';
import tarefaRouter from './routers/tarefa-router';

const PORT = process.env.PORT || 4000;
const HOSTNAME = process.env.HOSTNAME || 'http://localhost';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', async (req, res) => {
    const data = `Api Rest Gerenciador de tarefas: <br>
    Listar todas as tarefas - /api/tarefas <br>
    Pegar uma tarefa - /api/tarefa/id`;
    res.send(data);
});

app.use('/api', tarefaRouter);

app.use(cors({
    origin: ['http://localhost:3000']
}));

app.use((req, res) => {
    res.status(404).send('Rota não encontrada');
});

app.listen(PORT, () => {
    console.log(`Servidor rodando com sucesso ${HOSTNAME}:${PORT}`);
});