import express from 'express';
import Tarefa from '../models/tarefa';
import { TarefaRepository } from '../repositories/TarefaRepository';

const tarefaRouter = express.Router();

tarefaRouter.post('/tarefa', (req, res) => {
    res.send('Adiciona tarefa');
});

tarefaRouter.get('/tarefas', async (req, res) => {
    const tarefas = await TarefaRepository.listarTarefas()
    res.json(tarefas);
});

tarefaRouter.get('/tarefa/:id', async (req, res) => {
    const id: string  = req.params.id;
    const tarefa = await TarefaRepository.pegarTarefa(id);
    res.json(tarefa);
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