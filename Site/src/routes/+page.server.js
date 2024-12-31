import mariadb from 'mariadb';
let listImoveis;

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
      listImoveis = await conn.query("SELECT * FROM imovel");
      console.log(listImoveis); 
    } catch (err) {
      throw err;
    } finally {
      if (conn) conn.end();
    }
}
ObterDados().then(() => {
   pool.end();
});

export function load(){
    return {
        listImoveis: listImoveis
    };
}
