<script>
// @ts-nocheck


	import { Button, GradientButton } from "flowbite-svelte";

    let botaoComprar = "primary";
    let botaoAlugar = "alternative";

    //Se comprar for true, usar uma QUERY (só compra), senão usar OUTRA (só busca).
    let comprar = true;

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
    <form  class="flex flex-vertical" action="">
        
        <label>Localização</label>
        <input type="text">

        <label for="">Tipo de Imovel</label>
        <input type="text">

        <label for="">Preco (R$)</label>
        <div class="grid-4 div-preco">
                <p>Min:</p>
                <input class="input-preco" type="text">
                <p>Max:</p>
                <input class="input-preco" type="text">
        </div>

        <div class="grid grid-cols-2 mb-4 gap-2">
            <Button on:click={() => {botaoComprar="primary"; botaoAlugar="alternative";}} color={botaoComprar}>Comprar</Button>
            <Button on:click={() => {botaoComprar="alternative"; botaoAlugar="primary";}} color={botaoAlugar}>Alugar</Button>
        </div>

 
        <Button>
            <p>BUSCAR</p>
        </Button>
    </form>
</div>