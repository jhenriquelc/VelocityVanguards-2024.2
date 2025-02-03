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
    Imovel.Rua,
    Imagem.foto
    FROM Imovel
    JOIN Propriedades ON Imovel.ID_Imovel = Propriedades.ID_Imovel
    LEFT JOIN Imagem 
        ON Imovel.ID_Imovel = Imagem.ID_Imovel 
        AND Imagem.ID_Imagem = 0
    WHERE PrecoVenda > 0;
    ;
    `
    const imoveis = await ObterDados(query);

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

    return{ imoveis }
}
