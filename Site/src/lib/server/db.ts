import mariadb from 'mariadb';

const pool = mariadb.createPool({
	host: 'localhost',
	user: 'root', // TODO: mudar para usuário com permissões adequadas ao servidor
	password: 'root', // TODO: tirar credenciais hard-coded
	database: 'ImobiliariaVanguard'
});

export async function executar(comando_sql: string, substituicoes: any = []) {
	let conn;

	try {
		conn = await pool.getConnection();
		return await conn.query(comando_sql, substituicoes);
	} catch (err) {
		throw err;
	} finally {
		if (conn) conn.release();
	}
}
