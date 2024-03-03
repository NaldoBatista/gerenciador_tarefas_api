import {query} from './database';
import Tarefa from '../models/tarefa';

export class TarefaRepository {
    static async criarTarefa(tarefa: Tarefa) {

    }

    static async listarTarefas() {
        const sql: string = "select * from tb_tarefa";
        const data = await query(sql);
        return data;
    }

    static async pegarTarefa(id: string) {
        const sql: string = `select * from tb_tarefa where id = ?`;
        const params: any[] = [id]; 
        const data = await query(sql, params);
        return data;
    }
}