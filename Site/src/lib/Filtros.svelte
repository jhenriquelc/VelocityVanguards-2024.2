<script>
// @ts-nocheck


	import { Button, GradientButton } from "flowbite-svelte";
    let botaoComprar = $state("primary");
    let botaoAlugar = $state("alternative");
    let {urlParams = $bindable(), fetchData} = $props();
    
    
    //Se comprar for true, usar uma QUERY (só compra), senão usar OUTRA (só busca).
</script>
<style>

    input{
       height: 2rem; 
       margin-bottom: 0.8rem;
    }

    label{
        margin-bottom: 0.7rem;
    }

    .flex{
        display: flex;
    }

    .flex-vertical{
        flex-direction: column;
    }

    .grid-4{
        display: grid;
        grid-template-columns: 1fr 3fr 1fr 3fr;
        gap: 0.5rem;
    }

    .input-preco{
        width: 100%;
    }


    .div-preco{
        margin-bottom: 0.7rem;
    }
</style>


<div class="bg-white p-8 rounded-2xl border border-[E5E7EB] shadow-sm w-1/ ">
    <form  class="flex flex-vertical">
        
        <label for="localizacao">Localização</label>
        <input bind:value={urlParams.localizacao} name="localizacao" type="text">

        <label for="tipo">Tipo de Imovel</label>
        <input bind:value={urlParams.tipo} name="tipo" type="text">

        <p class="mb-3">Preco (R$)</p>
        <div class="grid-4 div-preco">
                <label for="min">Mín:</label>
                <input bind:value={urlParams.min}  name="min" class="input-preco" type="text">
                <label for="max">Max:</label>
                <input bind:value={urlParams.max} name="max" class="input-preco" type="text">
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