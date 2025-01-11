// @ts-nocheck
import { ObterDados } from "$lib/db";

export async function load({ url }){

    let query = `
    SELECT 
    Imovel.PrecoVenda, 
    Imovel.PrecoAluguel, 
    Imovel.Categoria,
    Imovel.Tipo,
    Bairro.Nome AS BairroNome, 
    Rua.Nome AS RuaNome
    FROM Imovel
    JOIN Bairro ON Imovel.ID_Bairro = Bairro.ID_Bairro
    JOIN Rua ON Imovel.ID_Rua = Rua.ID_Rua
    JOIN Propriedades ON Imovel.ID_Imovel = Propriedades.ID_Imovel
    WHERE PrecoVenda > 0;
    ;
    `
    const imoveis = await ObterDados(query);

    return{ imoveis }
}
