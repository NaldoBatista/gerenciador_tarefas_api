import express from 'express';
import { TarefaController } from '../controller/TarefaController';

const tarefaRouter = express.Router();
const tarefaController = new TarefaController();

tarefaRouter.post('/tarefa', tarefaController.save);
tarefaRouter.get('/tarefas', tarefaController.findAll);
tarefaRouter.get('/tarefa/:id', tarefaController.findOne);
tarefaRouter.put('/tarefa/:id', tarefaController.update);
tarefaRouter.delete('/tarefa/:id', tarefaController.delete);

export default tarefaRouter;