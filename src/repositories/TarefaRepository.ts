//import { Database } from './database';
import { Database } from './Database';
import Tarefa from '../models/tarefa';

export class TarefaRepository {
    static async save(tarefa: Tarefa): Promise<any> {
        const sql: string = `insert into tb_tarefa (titulo, descricao)
        values (?, ?)`;

        const params: any[] = [tarefa.titulo, tarefa.descricao];

        return await Database.query(sql, params);
    }

    static async findAll(): Promise<any> {
        const sql: string = "select * from tb_tarefa";
        return await Database.query(sql);
    }

    static async findById(id: number): Promise<any> {
        const sql: string = `select * from tb_tarefa where id = ?`;
        const params: any[] = [id]; 
        return await Database.query(sql, params);
    }

    static async update(tarefa: Tarefa): Promise<any> {
        const sql: string = `update tb_tarefa
        set titulo = ?, descricao = ?
        where id = ?`;

        const params: any[] = [
            tarefa.titulo, 
            tarefa.descricao,
            tarefa.id
        ];

        return await Database.query(sql, params);
    }

    static async delete(id: number): Promise<any> {
        const sql: string = 'delete from tb_tarefa where id = ?';
        const params: any[] = [id];
        return await Database.query(sql, params);
    }
}