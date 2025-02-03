// @ts-nocheck
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
    Imovel.Rua,
    Imagem.foto
    FROM Imovel
        JOIN Propriedades ON Imovel.ID_Imovel = Propriedades.ID_Imovel
        LEFT JOIN Imagem 
        ON Imovel.ID_Imovel = Imagem.ID_Imovel 
    WHERE Imovel.ID_Imovel = ?;
    `
    const dadosImovel = await ObterDados(query, [params.id]);

    if(dadosImovel.length < 1){
        redirect(301, '/imoveis')
    }

    let imovel = {
            ID_Imovel: dadosImovel[0].ID_Imovel,
            Titulo: dadosImovel[0].Titulo,
            Descricao: dadosImovel[0].Descricao,
            PrecoVenda: dadosImovel[0].PrecoVenda,
            PrecoAluguel: dadosImovel[0].PrecoAluguel,
            Categoria: dadosImovel[0].Categoria,
            Tipo: dadosImovel[0].Tipo,
            ValorCondominio: dadosImovel[0].ValorCondominio,
            ValorIPTU: dadosImovel[0].ValorIPTU,
            Area: dadosImovel[0].Area,
            NumeroGaragem: dadosImovel[0].NumeroGaragem,
            NumeroQuartos: dadosImovel[0].NumeroQuartos,
            NumeroBanheiros: dadosImovel[0].NumeroBanheiros,
            Bairro: dadosImovel[0].Bairro,
            Rua: dadosImovel[0].Rua,
            foto: dadosImovel.map(row => row.foto =`data:image/jpeg;base64,${row.foto.toString('base64')}` )
        }
    return{ imovel }
}