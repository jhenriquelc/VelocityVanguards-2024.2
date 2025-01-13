<script>
// @ts-nocheck

	import {Button, Card, P } from "flowbite-svelte";
    import Filtros from "$lib/Filtros.svelte";
    let {data} = $props();
    let listaImoveis = $state(data.imoveis);
    let comprar = $state('true');

    let urlParams = $state({
        localizacao: "",
        tipo: "",
        min: "", 
        max: "",
        negocio: 'true'
    })
    
    async function fetchData() {

    console.log("P" + urlParams.negocio);
    let params = new URLSearchParams(urlParams);

    console.log('Fetching with params:', params.toString());
    
    const response = await fetch(`/api?${params.toString()}`)
    .then(response => response.json())
    .then(data => {console.log(listaImoveis); listaImoveis = data});

    comprar = urlParams.negocio;
    }


</script>

<style>

	.main{
		background-color: rgb(238, 238, 238);
	}
    

    .single-line-truncation{
        white-space: nowrap; /* Prevent wrapping */
        overflow: hidden; /* Hide overflowing content */
        text-overflow: ellipsis; /* Show ellipsis for overflowing text */
    }

</style>


<div class="main">
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
                <Filtros {urlParams} {fetchData}></Filtros>
            </div>

            <div class="grid 
            xl:grid-cols-3 
            lg:grid-cols-2 lg:ml-4
            md:grid-cols-2 md:ml-0
            sm:grid-cols-1 
            xs:grd-cols-1 
            gap-4 
            ">
                
                    {#each listaImoveis as imovel}
                    <div class="flex items-center justify-center"> 
                    {console.log(imovel.ID_Imovel)}
                    {console.log(listaImoveis)}
                    <Card img={'imagem2.jpg'} href="/imoveis/{imovel.ID_Imovel}">
                        <div>
                            <div class="grid grid-cols-2 mb-1 ">
                                <h3 class="text-black text-xl">{"Apartamento"}</h3>
                                <div class="flex flex-row justify-end items-center">
                                   
                                    <!-- Tipo === 1, significa que é comercial-->
                                    {#if imovel.Tipo === 1}
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M21.999 8a.997.997 0 0 0-.143-.515L19.147 2.97A2.01 2.01 0 0 0 17.433 2H6.565c-.698 0-1.355.372-1.714.971L2.142 7.485A.997.997 0 0 0 1.999 8c0 1.005.386 1.914 1 2.618V20a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-5h4v5a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-9.382c.614-.704 1-1.613 1-2.618zm-2.016.251A2.002 2.002 0 0 1 17.999 10c-1.103 0-2-.897-2-2 0-.068-.025-.128-.039-.192l.02-.004L15.219 4h2.214l2.55 4.251zm-9.977-.186L10.818 4h2.361l.813 4.065C13.957 9.138 13.079 10 11.999 10s-1.958-.862-1.993-1.935zM6.565 4h2.214l-.76 3.804.02.004c-.015.064-.04.124-.04.192 0 1.103-.897 2-2 2a2.002 2.002 0 0 1-1.984-1.749L6.565 4zm3.434 12h-4v-3h4v3z"></path></svg>          
                                    {:else} 
                                        <svg xmlns="http://www.w3.org/2000/svg" class="" width="20" height="20" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="m21.743 12.331-9-10c-.379-.422-1.107-.422-1.486 0l-9 10a.998.998 0 0 0-.17 1.076c.16.361.518.593.913.593h2v7a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-4h4v4a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-7h2a.998.998 0 0 0 .743-1.669z"></path></svg>
                                    {/if}
                                </div>        
                            </div>
                            
                            <p class="mb-1 single-line-truncation">Jardim Azul - Cornélio Procópio</p>
                            {#if comprar === 'true'}
                                <p class="text-[#CC4522] font-bold single-line-truncation">R$ <span class="text-[1.4rem]">{new Intl.NumberFormat('pt-BR', {style: 'currency',
                                    currency: 'BRL',
                                }).format(imovel.PrecoVenda).split(/\s+/)[1]}</span></p>
                            {:else}
                                <p class="text-[#CC4522] font-bold single-line-truncation">R$ <span class="text-[1.4rem]">{new Intl.NumberFormat('pt-BR', {style: 'currency',
                                    currency: 'BRL',
                                }).format(imovel.PrecoAluguel).split(/\s+/)[1]}</span></p>
                            {/if}
                            
                        </div>
                    </Card>
                </div>    

                    {/each}
            </div>
        </div>
    </div>
</div>