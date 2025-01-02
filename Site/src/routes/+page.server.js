// @ts-nocheck
import mariadb from 'mariadb';

const pool = mariadb.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'ImobiliariaVanguard',
    connectionLimit: 5
})
async function ObterDados() {
    let conn;
    try {
      conn = await pool.getConnection();
      return await conn.query(`
        SELECT 
          Imovel.ID_Imovel, 
          Imovel.Titulo, 
          Imovel.Descricao, 
          Imovel.PrecoVenda, 
          Bairro.Nome AS BairroNome, 
          Rua.Nome AS RuaNome
        FROM Imovel
        JOIN Bairro ON Imovel.ID_Bairro = Bairro.ID_Bairro
        JOIN Rua ON Imovel.ID_Rua = Rua.ID_Rua
        ORDER BY PrecoVenda DESC 
        LIMIT 4;
      `);
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
