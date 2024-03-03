import { createPool } from 'mysql2';
import mysql from 'mysql2/promise';

export async function connect() {
    const connection = await createPool({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'gerenciador_tarefas'
    })
    return connection;
}

