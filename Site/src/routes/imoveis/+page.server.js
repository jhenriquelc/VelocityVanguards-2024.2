// @ts-nocheck
import { ObterDados } from "$lib/db";

export const actions = {
    default: async ({request}) => {

        let localizacao = request.url.searchParams.get('localizacao');
        let tipo = request.url.searchParams.get('tipo');
        let min = request.url.searchParams.get('min');
        let max = request.url.searchParams.get('max');
        let isBtnComprarOn = request.url.searchParams.get('negocio');
    
        if (min === "") min = 0; 
        if (max === "") max = 2147483647; 
        
        let tipoDeNegocio = 'PrecoVenda';
        
        if(!isBtnComprarOn){
            tipoDeNegocio = 'PrecoAluguel';
        }
    
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
        WHERE (${tipoDeNegocio} BETWEEN ? AND ?) AND 
        (Bairro.Nome LIKE ? OR Rua.Nome LIKE ?)
        ;
        `
        const imoveis = await ObterDados(query, [min, max, `%${localizacao}%`, `%${localizacao}%`] );
        console.log(imoveis);
        return imoveis;
        
    }
}

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
    ;
    `
    const imoveis = await ObterDados(query);

    return{ imoveis }
}
