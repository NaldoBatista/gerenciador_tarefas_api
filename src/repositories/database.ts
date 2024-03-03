import {connect} from './connection';

export async function query(sql: string, params: any[] = []) {
  try {
    const conn = await connect();
    const [rows, fields] = await conn.promise().query(sql, params);
    return rows;
  } catch (error) {
    return error;
  }
}
