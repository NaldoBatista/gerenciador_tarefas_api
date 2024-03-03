import {connect} from './connection';

export async function query(sql: string) {
  try {
    const conn = await connect();
    const [rows, fields] = await conn.promise().query(sql);
    return (JSON.stringify(rows));
  } catch (error) {
    return error;
  }
}
