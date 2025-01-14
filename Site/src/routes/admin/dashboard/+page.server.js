import { redirect } from "@sveltejs/kit";
import { ObterDados } from "$lib/db";

export async function load({ cookies }){

    let query = `SELECT * FROM Funcionario WHERE Cookie = ?`

    let userCookiers = cookies.get('cookieLogin');

    if( userCookiers === undefined){
        userCookiers = ' ';
    }
    const imoveis = await ObterDados(query, userCookiers);
    console.log(imoveis)

    if(imoveis.length < 1){
        redirect(301, '/admin');
    }
    return;
}