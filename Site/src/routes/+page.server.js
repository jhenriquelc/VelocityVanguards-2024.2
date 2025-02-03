// @ts-nocheck
import {ObterDados} from '$lib/db.js';

let queryCardsVendaEmDestaque = `
    SELECT 
        Imovel.ID_Imovel, 
        Imovel.Titulo, 
        Imovel.PrecoVenda, 
        Imovel.Bairro, 
        Imovel.Rua,
        Imagem.foto
    FROM Imovel
    LEFT JOIN Imagem 
        ON Imovel.ID_Imovel = Imagem.ID_Imovel 
        AND Imagem.ID_Imagem = 0
    WHERE  Imovel.PrecoVenda > 0
    ORDER BY Imovel.PrecoVenda DESC 
    LIMIT 4;
    `

export async function load(){
    

    const listImoveis = await ObterDados(queryCardsVendaEmDestaque);
    for (const imovel of listImoveis) {
        if (imovel.foto) {
            imovel.foto = `data:image/jpeg;base64,${imovel.foto.toString('base64')}`;
        }
    }


    return {
        listImoveis: listImoveis,
    };
}
