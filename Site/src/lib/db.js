import mariadb from 'mariadb';

const pool = mariadb.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'ImobiliariaVanguard',
    connectionLimit: 5
})

// @ts-ignore
export async function ObterDados(query, userInput) {
    let conn;
    try {
      conn = await pool.getConnection();
      return await conn.query(query, userInput);
    } catch (err) {
      throw err;
    } finally {
      if (conn) conn.release();
    }
}