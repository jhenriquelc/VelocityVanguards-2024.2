import { redirect } from "@sveltejs/kit";
import { ObterDados } from "$lib/db";


export async function load(){
    const queryImoveis = `  SELECT 
                            Imovel.ID_Imovel, 
                            Imovel.Titulo, 
                            Imovel.PrecoVenda, 
                            Imovel.PrecoAluguel,
                            Imovel.Bairro, 
                            Imovel.Rua
                            FROM Imovel
                            `

    let imoveis = await ObterDados(queryImoveis);
    return {imoveis}
}