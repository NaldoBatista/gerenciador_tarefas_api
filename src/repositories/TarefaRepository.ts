import Tarefa from '../models/tarefa';
import { MySqlDatabase } from './MySqlDatabase';

export class TarefaRepository {
    private database;

    constructor() {
        this.database = new MySqlDatabase();
    }

    public async save(tarefa: Tarefa): Promise<any> {
        const sql: string = `insert into tb_tarefa (titulo, descricao)
        values (?, ?)`;

        const params: any[] = [tarefa.titulo, tarefa.descricao];
        return await this.database.executeSql(sql, params);
    }

    public async findAll(): Promise<any> {
        const sql: string = "select * from tb_tarefa";
        return await this.database.executeSql(sql);
    }

    public async findOne(id: number): Promise<any> {
        const sql: string = `select * from tb_tarefa where id = ?`;
        const params: any[] = [id]; 
        return await this.database.executeSql(sql, params);
    }

    public async update(tarefa: Tarefa): Promise<any> {
        const sql: string = `update tb_tarefa
        set titulo = ?, descricao = ?
        where id = ?`;

        const params: any[] = [
            tarefa.titulo, 
            tarefa.descricao,
            tarefa.id
        ];

        return await this.database.executeSql(sql, params);
    }

    public async delete(id: number): Promise<any> {
        const sql: string = 'delete from tb_tarefa where id = ?';
        const params: any[] = [id];
        return await this.database.executeSql(sql, params);
    }
}