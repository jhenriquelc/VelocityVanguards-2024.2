import { ObterDados } from "$lib/db";

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
    Bairro.Nome AS BairroNome, 
    Rua.Nome AS RuaNome
    FROM Imovel
    JOIN Bairro ON Imovel.ID_Bairro = Bairro.ID_Bairro
    JOIN Rua ON Imovel.ID_Rua = Rua.ID_Rua
    JOIN Propriedades ON Imovel.ID_Imovel = Propriedades.ID_Imovel
    WHERE Imovel.ID_Imovel = ?;
    `

    const dadosImovel = await ObterDados(query, [params.id]);
    return{ dadosImovel }
}