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

    if (!titulo || titulo.length < 25) {
        erros.push("Insira um título com pelo menos 25 caracteres");
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

    return json({ erros });
}
