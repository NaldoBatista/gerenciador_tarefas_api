import {Request, Response} from 'express';
import { TarefaRepository } from '../repositories/TarefaRepository';
import Tarefa from '../models/tarefa';

export class TarefaController {
    
    public async save(req: Request, res: Response): Promise<Response> {
        try {
            const tarefa: Tarefa = {
                titulo: req.body.titulo,
                descricao: req.body.descricao
            }
            
            const tarefaRepository = new TarefaRepository();
            const data = await tarefaRepository.save(tarefa);
            
            return res.status(201).json(data);
        } catch (error) {
            return res.status(500).json(error);
        } 
    }
    
    public async findAll(req: Request, res: Response): Promise<Response> {
        try {
            const tarefaRepository = new TarefaRepository();
            const data = await tarefaRepository.findAll();
            
            return res.status(200).json(data);
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    public async findOne(req: Request, res: Response): Promise<Response> {
        try {
            const id = parseInt(req.params.id, 10);
            const tarefaRepository = new TarefaRepository();
            const data = await tarefaRepository.findOne(id);
            
            return res.status(200).json(data);
        } catch (error) {
            return res.status(500).json(error);
        } 
    }

    public async update(req: Request, res: Response): Promise<Response> {
        try {
            const tarefa: Tarefa = {
                id: parseInt(req.params.id, 10),
                titulo: req.body.titulo,
                descricao: req.body.descricao
            }
            const tarefaRepository = new TarefaRepository();
            const data = await tarefaRepository.update(tarefa);
           
            return res.status(200).json(data);
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    public async delete(req: Request, res: Response): Promise<any> {
        try {
            const id: number = parseInt(req.params.id);
            const tarefaRepository = new TarefaRepository();
            const data = await tarefaRepository.delete(id);
            
            return res.status(200).json(data);
        } catch (error) {
            return res.status(500).json(error);
        }
    }
} 