// @ts-nocheck
import mariadb from 'mariadb';

const pool = mariadb.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'TesteImobiliaria',
    connectionLimit: 5
})
async function ObterDados() {
    let conn;
    try {
      conn = await pool.getConnection();
      return await conn.query("SELECT * FROM imovel");
    } catch (err) {
      throw err;
    } finally {
      if (conn) conn.release();
    }
}

export async function load(){
    const listImoveis = await ObterDados();
    return {
        listImoveis: listImoveis
    };
}
