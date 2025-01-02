<script>

	import {Button, Card } from "flowbite-svelte";
    import Filtros from "$lib/Filtros.svelte";
</script>

<style>

    .categoria-imovel{
        font-size: 1.2rem;
        color: black;
        margin-bottom: 0.2rem;
    }

    .center-text{
        text-align: center;
        align-items: center;
        justify-content: center;
    }

    .cifrao{
        color: #CC4522;
        font-weight: bolder;
    }

    .fixed{
        position: fixed;
    }

    .flex-horizontal{
        flex-direction: row;
    }
    
    .flex{
        display: flex;
    }

    .grid-2{
        display: grid;
        grid-template-columns: 1fr 5fr;
        gap: 5rem;
    }

    .grid-4-equal{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 4rem;
    }

	.main{
		background-color: rgb(238, 238, 238);
	}
    

    .margin{
        margin-left: 8rem;
        margin-right: 8rem;
    }

    .margin-right-2rem{
        margin-right: 2rem;
    }

    .rua-bairro-imovel{
        margin-bottom: 0.2rem;
    }
    .single-line-truncation{
        white-space: nowrap; /* Prevent wrapping */
        overflow: hidden; /* Hide overflowing content */
        text-overflow: ellipsis; /* Show ellipsis for overflowing text */
    }

    .valor-imovel{
        font-size: 1.4rem;
    }



</style>

<div class="main">
    <div class="margin grid-2 ">
        <p class="imoveis-em-cp">Imóveis em Cornélio Procópio - PR</p>
        <div class="flex flex-horizontal center-text">
            <p class="margin-right-2rem">Comprar</p>
            <p>Alugar</p>
        </div>
    </div>

    <div class="margin grid-2 fixed">        
        
        <Filtros></Filtros>

        <div class="grid-4-equal">
            <Card img={'imagem2.jpg'}>
                <div>
                    <h3 class="categoria-imovel">{"Apartamento"}</h3>
                    <p class="rua-bairro-imovel single-line-truncation">Jardim Azul - Cornélio Procópio</p>
                    <p class="cifrao">R$ <span class="valor-imovel">{new Intl.NumberFormat('pt-BR', {style: 'currency',
                        currency: 'BRL',
                    }).format(1000).split(/\s+/)[1]}</span></p>
                </div>
            </Card>
                
            <Card>

            </Card>
            <Card>

            </Card>
            <Card>

            </Card>
        
        </div>
    </div>
</div>