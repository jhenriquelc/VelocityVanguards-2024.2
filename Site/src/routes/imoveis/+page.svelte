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


    .cifrao{
        color: #CC4522;
        font-weight: bolder;
    }

	.main{
		background-color: rgb(238, 238, 238);
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


<div class="main ">
    <div class="
    lg:mx-48
    lg:mx-48
    md:mx-48
    sm:mx-32
    xs:mx-16
    ">



        <div class="flex xl:flex-row lg:flex-row md:flex-col sm:flex-col xs:flex-col pt-8">        
            
            <div class=" 
            xl:w-1/4
            lg:w-1/3
            md:w-full mb-4
            sm:w-full mb-4
            xs:w-full mb-4 ">
                <Filtros></Filtros>
            </div>

            <div class="grid 
            xl:grid-cols-3 
            lg:grid-cols-2 lg:ml-4
            md:grid-cols-2 md:ml-0
            sm:grid-cols-1 
            xs:grd-cols-1 
            gap-4 
            ">
                
                <div class="flex items-center justify-center"> 
                    <Card img={'imagem2.jpg'}>
                        <div>
                            <h3 class="categoria-imovel">{"Apartamento"}</h3>
                            <p class="rua-bairro-imovel single-line-truncation">Jardim Azul - Cornélio Procópio</p>
                            <p class="cifrao single-line-truncation">R$ <span class="valor-imovel">{new Intl.NumberFormat('pt-BR', {style: 'currency',
                                currency: 'BRL',
                            }).format(10200000).split(/\s+/)[1]}</span></p>
                        </div>
                    </Card>
                </div>
                    
                <div class="flex items-center justify-center"> 
                    <Card img={'imagem2.jpg'}>
                        <div>
                            <h3 class="categoria-imovel">{"Apartamento"}</h3>
                            <p class="rua-bairro-imovel single-line-truncation">Jardim Azul - Cornélio Procópio</p>
                            <p class="cifrao single-line-truncation">R$ <span class="valor-imovel">{new Intl.NumberFormat('pt-BR', {style: 'currency',
                                currency: 'BRL',
                            }).format(10200000).split(/\s+/)[1]}</span></p>
                        </div>
                    </Card>
                </div>
                <div class="flex items-center justify-center"> 
                    <Card img={'imagem2.jpg'}>
                        <div>
                            <h3 class="categoria-imovel">{"Apartamento"}</h3>
                            <p class="rua-bairro-imovel single-line-truncation">Jardim Azul - Cornélio Procópio</p>
                            <p class="cifrao single-line-truncation">R$ <span class="valor-imovel">{new Intl.NumberFormat('pt-BR', {style: 'currency',
                                currency: 'BRL',
                            }).format(10200000).split(/\s+/)[1]}</span></p>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    </div>
</div>