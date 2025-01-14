import { executar } from '$lib/server/db.js';
import { encodeBase32LowerCaseNoPadding } from '@oslojs/encoding';

/**
 *
 * @returns uma string aleatória de 64 caracteres em base32
 */
export function gerarToken(): string {
	const bytes = new Uint8Array(40); // 320 bits deve ser forte suficiente né? kk
	crypto.getRandomValues(bytes);
	const token = encodeBase32LowerCaseNoPadding(bytes);
	return token; // 64 caracteres
}

export async function validarSessao(token: string): Promise<ResultadoValidacaoSessao> {
	// TODO
}

export async function invalidateSession(sessionId: string): Promise<void> {
	// TODO
}

export type ResultadoValidacaoSessao =
	| { session: Sessao; user: User }
	| { session: null; user: null };

export interface Sessao {
	id: string;
	userId: string;
	expiresAt: Date;
}

export interface User {
	id: string;
}
