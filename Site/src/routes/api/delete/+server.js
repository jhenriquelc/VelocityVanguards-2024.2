import { ObterDados } from "$lib/db";
import { json } from "@sveltejs/kit";

export async function DELETE({request}){

    const data = await request.json();
    const {ID_Imovel} = data;

    try{
    await ObterDados(`DELETE FROM Imagem WHERE ID_IMOVEL = ?`, [ID_Imovel])
    await ObterDados(`DELETE FROM Propriedades WHERE ID_Imovel = ?;`,[ID_Imovel]);
    await ObterDados(`DELETE FROM Imovel WHERE ID_Imovel = ?;`, [ID_Imovel]);
    }catch(e){
        console.log(e);
        console.log("Erro ao deletar imovel");
        return json({success: false});
    }
    return json({success: true});
}
