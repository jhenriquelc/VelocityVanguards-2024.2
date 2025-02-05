import { redirect } from "@sveltejs/kit";
import { ObterDados } from "$lib/db";

export async function load({ cookies }){

    const queryCookie = `SELECT * FROM Funcionario WHERE Cookie = ?`

    let userCookiees = cookies.get('cookieLogin');

    if( userCookiees === undefined){
        userCookiees = ' ';
    }
    const possuiCookie = await ObterDados(queryCookie, [userCookiees]);

    if(possuiCookie.length < 1){
        redirect(301, '/admin');
    }
}