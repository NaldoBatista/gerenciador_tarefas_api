import express from 'express';
import Tarefa from '../models/tarefa';

const tarefaRouter = express.Router();

tarefaRouter.post('/tarefa', (req, res) => {
    res.send('Adiciona tarefa');
});

tarefaRouter.get('/tarefas', (req, res) => {
    const tarefas: Tarefa[] = [
        {
            id: 1,
            nome: 'tarefa 1',
            descricao: 'descriçãao 1'
        },
        {
            id: 2,
            nome: 'tarefa 2',
            descricao: 'descrição 2'
        }
    ];

    res.json(tarefas);
});

tarefaRouter.get('/tarefa/:id', (req, res) => {
    const id: number = +req.params.id; 
    res.send('lista uma tarefa pelo id');
});

tarefaRouter.put('/tarefa/:id', (req, res) => {
    const id: number = +req.params.id;
    res.send(`Atualiza a tarefa ${id}`);
});

tarefaRouter.delete('/tarefa/:id', (req, res) => {
    const id: number = +req.params.id;
    res.send(`Deleta a tarefa ${id}`);
});

export default tarefaRouter;