<script>

	import { Button, Card } from "flowbite-svelte";

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


<Card>
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
        <Button>
            <p>BUSCAR</p>
        </Button>
    </form>
</Card>