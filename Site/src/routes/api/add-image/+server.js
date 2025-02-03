// @ts-nocheck
import { ObterDados } from "$lib/db";

import { json } from "@sveltejs/kit";
import { ObterDados } from "$lib/db";

export async function POST({request}){
    const data = await request.formData();
    let imagens = data.getAll("imagens");
    let insertId = data.get("insertId");

    if(imagens === 'undefined'){
        return json({success: false})
    }

    try{
        for( let i = 0; i < imagens.length; i++){

            const arrayBuffer = await imagens[i].arrayBuffer(); // Convert file to binary
            const buffer = Buffer.from(arrayBuffer); // Convert binary to Buffer

            await ObterDados(`INSERT INTO Imagem (ID_Imagem, ID_Imovel, foto) VALUES (?, ?, ?)`, [i, insertId, buffer]);
        }
    }catch(error){
        console.log(error);
        return json({success: false});
    }

    return json({success: true});
}