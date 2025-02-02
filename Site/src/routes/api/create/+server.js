import { ObterDados } from "$lib/db";
import { json, redirect } from "@sveltejs/kit";

export async function POST({request}){

    const data = await request.json();
    
    let erros = [];

    let categoriaSelecionada = data.categoriaSelecionada;
    let tipoSelecionado = data.tipoSelecionado;
    let titulo = data.titulo;
    let descricao = data.descricao;
    let valorVenda = data.valorVenda;
    let valorAlguel = data.valorAlguel;
    let IPTU = data.IPTU;
    let Condominio = data.Condominio;
    let Area = data.Area;
    let NGaragem = data.NGaragem;
    let NQuartos = data.NQuartos;
    let NBanheiros = data.NBanheiros;
    let bairro = data.bairro;
    let rua = data.rua;

    if(rua.trim() === ''){
        erros.push('Insira o nome da rua');
    }

    if(bairro.trim() === ''){
        erros.push('Insira o nome do bairro');
    }

    console.log(rua, bairro);


    if (!titulo || titulo.length < 25 || titulo.length > 50) {
        erros.push("Insira um título com pelo menos 25 e no máximo 50 caracteres");
    }

    if (!descricao) {
        erros.push("Insira uma descrição");
    }

    if(categoriaSelecionada === "") {
        erros.push("Selecione uma categoria");
    }

    if(tipoSelecionado === "") {
        erros.push("Selecione um tipo");
    }

    if ((!valorVenda || isNaN(parseFloat(valorVenda))) && (!valorAlguel || isNaN(parseFloat(valorAlguel)))) {
        erros.push("O imóvel deve estar à venda ou disponível para aluguel");
    }

    if (isNaN(parseFloat(IPTU))) {
        erros.push("O IPTU deve ser numérico");
    }

    if (isNaN(parseFloat(Condominio)) && Condominio !== "") {
        erros.push("O Condomínio deve ser numérico ou estar vazio");
    }

    if (valorAlguel === "") valorAlguel = null;
    if (valorVenda === "") valorVenda = null;
    if (Condominio === "") Condominio = null;

    if (isNaN(parseFloat(Area)) || parseFloat(Area) <= 0) {
        erros.push("A área deve ser um número positivo");
    }

    if (isNaN(parseInt(NGaragem)) || isNaN(parseInt(NQuartos)) || isNaN(parseInt(NBanheiros))) {
        erros.push("Número de garagem, quartos e banheiros devem ser números");
    } else {
        if (NGaragem <= 0 || NQuartos <= 0 || NBanheiros <= 0) {
            erros.push("Número de garagem, quartos e banheiros devem ser positivos");
        }
    }

    if (erros.length === 0) {
        const imovelNovo = await ObterDados(`INSERT INTO ImobiliariaVanguard.Imovel 
        (Bairro, Rua, Titulo, Descricao, Categoria, Tipo, PrecoVenda, PrecoAluguel)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?);`,
        [bairro, rua, titulo, descricao, categoriaSelecionada, tipoSelecionado, valorVenda, valorAlguel]);

        let {insertId} = imovelNovo;
        insertId = Number(insertId);
        console.log(insertId);
    
        await ObterDados(`INSERT INTO ImobiliariaVanguard.Propriedades 
            (ID_Imovel, ValorCondominio, ValorIptu, Area, NumeroGaragem, NumeroQuartos, NumeroBanheiros)
             VALUES (?, ?, ?, ?, ?, ?, ?);`, 
            [insertId, Condominio, IPTU, Area, NGaragem, NQuartos, NBanheiros])

        return json({erros: [], success: true, insertId})
    }


    return json({ erros, success: false});
}
