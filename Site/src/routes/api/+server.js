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
    let not = ``;

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
    }else if(tipo === 'residencial'){
        tipo = 2;
    }else{
        not = `NOT`
        tipo = 0;
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
    Imovel.Rua,
    Imagem.foto
    FROM Imovel
        JOIN Propriedades ON Imovel.ID_Imovel = Propriedades.ID_Imovel
        LEFT JOIN Imagem ON Imovel.ID_Imovel = Imagem.ID_Imovel AND Imagem.ID_Imagem = 0
    WHERE (Imovel.${tipoDeNegocio} BETWEEN ? AND ? ) AND ${not}
    Imovel.Tipo = ? AND 
    (Imovel.Bairro LIKE ? OR Imovel.Rua LIKE ?)
    ;`

    let imoveis = await ObterDados(query, [min, max, tipo,  `%${localizacao}%`, `%${localizacao}%`]);
    console.log(imoveis);

    for (const imovel of imoveis) {
        if (imovel.foto) {
            imovel.foto = `data:image/jpeg;base64,${imovel.foto.toString('base64')}`;
        }
        if(imovel.Categoria === 1){
            imovel.Categoria = 'Apartamento'
        }else if(imovel.Categoria === 2){
            imovel.Categoria = 'Casa'
        }else if(imovel.Categoria === 3){
            imovel.Categoria = 'Terreno'
        }else{
            imovel.Categoria = 'Sala'
        }
    }
    return json(imoveis);
}