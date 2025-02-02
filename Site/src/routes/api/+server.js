// @ts-nocheck
import { json } from "@sveltejs/kit";
import { ObterDados } from "$lib/db";
export async function GET({url}){

    let localizacao = url.searchParams.get('localizacao');
    let tipo = url.searchParams.get('tipo');
    let min = url.searchParams.get('min');
    let max = url.searchParams.get('max');
    let negocio = url.searchParams.get('negocio');
    let tipoDeNegocio = 'PrecoVenda';
    
    min = parseInt(min);
    max = parseInt(max);
    
    if(Number.isNaN(min)){
        min = 0; 
    }
    if(Number.isNaN(max)){
        max = 2147483647; 
    }
    tipo = tipo.toLowerCase();
    console.log(tipo);

    if( tipo === 'comercial'){
        tipo = 1;
    }else{
        tipo = 2;
    }

    console.log(negocio);

    if(negocio === 'false'){
        tipoDeNegocio = 'PrecoAluguel';
    }

    console.log(tipo);

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
    WHERE (Imovel.${tipoDeNegocio} BETWEEN ? AND ? ) AND
    Imovel.Tipo = ? AND 
    (Imovel.Bairro LIKE ? OR Imovel.Rua LIKE ?)
    ;`

    let imoveis = await ObterDados(query, [min, max, tipo,  `%${localizacao}%`, `%${localizacao}%`]);
    return json(imoveis);
}