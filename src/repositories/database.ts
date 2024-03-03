import { createPool, Pool } from 'mysql2';

export class Database {
  private static pool: Pool | null = null;

  private static async getConnection(): Promise<Pool> {
    if (!Database.pool) {
      Database.pool = await createPool({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'gerenciador_tarefas'
      });
    }
    return Database.pool;
  }
  
  static async query(sql: string, params: any[] = []): Promise<any> {
    try {
      const conn = await this.getConnection();
      const [rows, fields] = await conn.promise().query(sql, params);
      return rows;
    } catch (error) {
      return error;
    }
  }
}