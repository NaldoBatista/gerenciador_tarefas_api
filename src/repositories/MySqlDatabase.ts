import { InterfaceDatabase } from "./InterfaceDatabase";
import { createPool, Pool } from 'mysql2';

export class MySqlDatabase implements InterfaceDatabase {
    private connection: any;

    constructor() {
        this.getConnection();
    }

    async getConnection(): Promise<any> {
        this.connection = createPool({
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'gerenciador_tarefas'
        });
    }

    public async executeSql(sql: string, params: any[] = []): Promise<any> {
        const [rows] = await this.connection.promise().query(sql, params);
        return rows;
    }
}