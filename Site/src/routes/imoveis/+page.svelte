<script>

	import { Button, Card } from "flowbite-svelte";

</script>

<style>

    input{
       height: 2rem; 
       margin-bottom: 0.8rem;
    }

    label{
        margin-bottom: 0.5rem;
    }

    .flex-vertical{
        flex-direction: column;
    }
    
    .flex{
        display: flex;
    }

    .grid-3{
        grid-template-columns: 1fr 4fr;
        gap: 2rem;
    }


    .grid-4{
        display: grid;
        grid-template-columns: 1fr 3fr 1fr 3fr;
        gap: 0.5rem;
    }

    .input-preco{
        width: 100%;
    }

	.main{
		background-color: rgb(238, 238, 238);
	}
    
    .margin{
        margin-left: 8rem;
        margin-right: 8rem;
    }

   


</style>

<div class="main">
    <div class="margin grid-3">
        <Card>
            <form  class="flex flex-vertical" action="">
                <label>Localização</label>
                <input type="text">

                <label for="">Tipo de Imovel</label>
                <input type="text">

                <label for="">Preco (R$)</label>
                <div class="grid-4">
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
        <div>

        </div>
    </div>
</div>