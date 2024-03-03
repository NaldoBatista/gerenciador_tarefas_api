import express from 'express';
import { TarefaController } from '../controller/TarefaController';

const tarefaRouter = express.Router();

tarefaRouter.post('/tarefa', TarefaController.save);
tarefaRouter.get('/tarefas', TarefaController.findAll);
tarefaRouter.get('/tarefa/:id', TarefaController.findById);
tarefaRouter.put('/tarefa/:id', TarefaController.update);
tarefaRouter.delete('/tarefa/:id', TarefaController.delete);

export default tarefaRouter;