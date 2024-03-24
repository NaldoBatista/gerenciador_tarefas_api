import { Pool } from "mysql2/typings/mysql/lib/Pool";

export interface InterfaceDatabase {
    getConnection(): Promise<Pool>;
    executeSql(sql: string, params: any[]): Promise<any>;
}