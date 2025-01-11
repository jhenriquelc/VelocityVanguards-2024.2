// @ts-nocheck
import {ObterDados} from '$lib/db.js';

let queryCardsVendaEmDestaque = `
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
    `

export async function load(){
    
    const listImoveis = await ObterDados(queryCardsVendaEmDestaque);
    return {
        listImoveis: listImoveis
    };
}
