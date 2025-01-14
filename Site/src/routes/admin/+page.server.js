import { ObterDados } from "$lib/db";
import { sha256 } from 'js-sha256';
import { fail, redirect } from '@sveltejs/kit';

//roubei de alguem no stackoverflow
function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

export const actions = {
	default: async ({cookies, request}) => {
        
        const data = await request.formData();
        const username = data.get('username');
        const password = data.get('password');
        const hashPassword = sha256(password);

        let userFetched = await ObterDados(`SELECT * FROM Funcionario WHERE CPF=? AND HashSenha=?`, [username, hashPassword]);
        
        if(userFetched.length !== 1){
            console.log("Usuario invalido");
            return fail(401);
        }

        let newCookie = userFetched[0].Cookie;
        newCookie = makeid(64);
        console.log(await ObterDados(`UPDATE Funcionario SET Cookie = ?  WHERE CPF=? AND HashSenha=?`, [newCookie, username, hashPassword]));

        cookies.set('cookieLogin', newCookie, {path: '/admin'});
        console.log(cookies.get('cookieLogin'))
        redirect(303, '/admin/dashboard');
    }
};