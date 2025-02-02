// @ts-nocheck
import { ObterDados } from "$lib/db";

export async function load(){

    let query = `
    SELECT 
    Imovel.ID_Imovel,
    Imovel.PrecoVenda, 
    Imovel.PrecoAluguel, 
    Imovel.Categoria,
    Imovel.Tipo,
    Imovel.Bairro,
    Imovel.Rua
    FROM Imovel
    JOIN Propriedades ON Imovel.ID_Imovel = Propriedades.ID_Imovel
    WHERE PrecoVenda > 0;
    ;
    `
    const imoveis = await ObterDados(query);

    return{ imoveis }
}
