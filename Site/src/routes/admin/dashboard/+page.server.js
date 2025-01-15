import { redirect } from "@sveltejs/kit";
import { ObterDados } from "$lib/db";


export async function load({ cookies }){
    const queryImoveis = `  SELECT 
                            Imovel.ID_Imovel, 
                            Imovel.Titulo, 
                            Imovel.PrecoVenda, 
                            Imovel.PrecoAluguel,
                            Bairro.Nome AS BairroNome, 
                            Rua.Nome AS RuaNome
                            FROM Imovel
                            JOIN Bairro ON Imovel.ID_Bairro = Bairro.ID_Bairro
                            JOIN Rua ON Imovel.ID_Rua = Rua.ID_Rua
                            `

    let imoveis = await ObterDados(queryImoveis);
    return {imoveis}
}