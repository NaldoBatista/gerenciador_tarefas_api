import {Request, Response} from 'express';
import { TarefaRepository } from '../repositories/TarefaRepository';
import Tarefa from '../models/tarefa';

export class TarefaController {
    static async save(req: Request, res: Response): Promise<Response> {
        const tarefa: Tarefa = {
            titulo: req.body.titulo,
            descricao: req.body.descricao
        }
        const data = await TarefaRepository.save(tarefa);
        return res.json(data);
    }

    static async findAll(req: Request, res: Response): Promise<Response> {
        const data = await TarefaRepository.findAll();
        return res.json(data);
    }

    static async findById(req: Request, res: Response): Promise<Response> {
        const id = parseInt(req.params.id, 10);
        const data = await TarefaRepository.findById(id);
        return res.json(data);
    }

    static async update(req: Request, res: Response): Promise<Response> {
        const tarefa: Tarefa = {
            id: parseInt(req.params.id, 10),
            titulo: req.body.titulo,
            descricao: req.body.descricao
        }
        const data = await TarefaRepository.update(tarefa);
        return res.json(data);
    }

    static async delete(req: Request, res: Response): Promise<any> {
        const id: number = parseInt(req.params.id);
        const data = await TarefaRepository.delete(id);
        return res.json(data);
    }
} 