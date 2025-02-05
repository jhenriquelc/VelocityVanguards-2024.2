<script>
// @ts-nocheck


	import { Button, GradientButton } from "flowbite-svelte";
    let botaoComprar = $state("primary");
    let botaoAlugar = $state("alternative");
    let {urlParams = $bindable(), fetchData} = $props();
    
</script>
<style>

    input{
       height: 2rem; 
       margin-bottom: 0.8rem;
    }

    label{
        margin-bottom: 0.7rem;
    }

    .div-preco{
        margin-bottom: 0.7rem;
    }
</style>


<div class="bg-white p-8 rounded-2xl border border-[E5E7EB] shadow-sm w-1/ ">
    <form  class="flex flex-col">
        
        <label for="localizacao">Localização</label>
        <input bind:value={urlParams.localizacao} name="localizacao" type="text">

        <label for="tipo">Tipo de Imovel</label>
        <input bind:value={urlParams.tipo} name="tipo" type="text">

        <p class="mb-3">Preco (R$)</p>
        <div class="grid gap-2 grid-cols-[1fr_3fr_1fr_3fr] div-preco">
                <label for="min">Mín:</label>
                <input bind:value={urlParams.min}  name="min" class="w-full" type="text">
                <label for="max">Max:</label>
                <input bind:value={urlParams.max} name="max" class="w-full" type="text">
        </div>

        <div class="grid grid-cols-2 mb-4 gap-2">
            <Button on:click={() => {botaoComprar="primary"; botaoAlugar="alternative"; urlParams.negocio = 'true'; console.log(urlParams.negocio)}} color={botaoComprar} >Comprar</Button>
            <Button on:click={() => {botaoComprar="alternative"; botaoAlugar="primary"; urlParams.negocio = 'false'; console.log(urlParams.negocio)}} color={botaoAlugar} >Alugar</Button>
        </div>
 
        <Button type="submit" on:click={fetchData}>
            <p>BUSCAR</p>
        </Button>
    </form>
</div>