// @ts-nocheck
import {ObterDados} from '$lib/db.js';

let queryCardsVendaEmDestaque = `
    SELECT 
    Imovel.ID_Imovel, 
    Imovel.Titulo, 
    Imovel.PrecoVenda, 
    Imovel.Bairro, 
    Imovel.Rua
    FROM Imovel
    ORDER BY PrecoVenda DESC 
    LIMIT 4;
    `

export async function load(){
    
    const listImoveis = await ObterDados(queryCardsVendaEmDestaque);
    return {
        listImoveis: listImoveis
    };
}
