import { ObterDados } from "$lib/db";
import { redirect } from "@sveltejs/kit";

export async function load({ params }){
    let query = `
    SELECT 
    Imovel.ID_Imovel,
    Imovel.Titulo, 
    Imovel.Descricao, 
    Imovel.PrecoVenda, 
    Imovel.PrecoAluguel, 
    Imovel.Categoria,
    Imovel.Tipo,
    Propriedades.ValorCondominio,
    Propriedades.ValorIPTU,
    Propriedades.Area,
    Propriedades.NumeroGaragem,
    Propriedades.NumeroQuartos,
    Propriedades.NumeroBanheiros,
    Imovel.Bairro,
    Imovel.Rua
    FROM Imovel
    JOIN Propriedades ON Imovel.ID_Imovel = Propriedades.ID_Imovel
    WHERE Imovel.ID_Imovel = ?;
    `

    const dadosImovel = await ObterDados(query, [params.id]);

    if(dadosImovel.length < 1){
        redirect(301, '/imoveis')
    }
    return{ dadosImovel }
}