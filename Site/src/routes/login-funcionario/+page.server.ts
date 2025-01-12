import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

// carregar estado da página de login
export const load: PageServerLoad = async ({ cookies }) => {
	return { erro_auth: cookies.get("erro_auth") === "true" ? true : false };
};

// endpoints POST
export const actions = {
	default: async ({ cookies, request }) => {
        let form_data_promise = request.formData();
        console.log("cookies:");
        console.log(cookies.getAll());
        
        console.log("formdata:")
		let form_data = await form_data_promise;
		console.log(...form_data);
		
		// simular autenticação
		if (form_data.get("login") == "eu" && form_data.get("senha") == "lmao") {
			cookies.set("auth_token", "23457897532", {maxAge: 36000, httpOnly: true, path: '/'});
			cookies.set("erro_auth", "false", {maxAge: 60, path: '/'});
			console.log("autenticado com sucesso");
			redirect(307, "/")
		} else {
			cookies.set("erro_auth", "true", {maxAge: 60, path: '/'});
			console.log("autenticação falhou");
		}
	}
};
