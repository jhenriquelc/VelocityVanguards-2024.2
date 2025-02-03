<script>
    import { Card, Carousel } from "flowbite-svelte";
    import { Input, Label, Helper } from 'flowbite-svelte';
    import DadosDoImovel from "$lib/DadosDoImovel.svelte";
    // @ts-ignore
    import ContatoProduto from "$lib/ContatoProduto.svelte";
	import DescricaoImovel from "$lib/DescricaoImovel.svelte";
	import LocalizacaoImovel from "$lib/LocalizacaoImovel.svelte";
	import PrecoImovelProductPage from "$lib/PrecoImovelProductPage.svelte";
    let {data} = $props();
    let dados = data.imovel;
    console.log(`O tamanho do grid eh ${Math.ceil(Math.sqrt(data.imovel.foto.length))}`)
    let pathImagemPrincipal = $state(0);

    const grid = `grid grid-cols-[3fr_1fr] gap-12 
        xs:grid-cols-1 
        sm:grid-cols-1 
        md:grid-cols-1
        lg:grid-cols-1
        xl:grid-cols-[3fr_1fr]
        `


    const cardCss = `bg-white p-8 rounded-2xl border border-[E5E7EB] shadow-sm`;
</script>


<div class="bg-gray-50 min-h-screen h-fit">
    <div class="xs:mx-12 sm:mx-16 md:mx-32 lg:mx-48 pb-12">
        <div class="{`${grid} mb-12`}" >
            
            <figure class="grid grid-cols-1 md:grid-cols-2 md:gap-4 gap-0 items-center justify-center">
                <div class="flex flex-col justify-center items-center w-full relative">
                    <img src="{data.imovel.foto[pathImagemPrincipal]}" class="w-full h-full" alt="foto-imovel">
                    <button onclick={()=>{
                        if(data.imovel.foto.length-1 === pathImagemPrincipal){
                            pathImagemPrincipal=0;
                        }else{
                            pathImagemPrincipal++;
                        }
                    }} aria-label="Troca imagem para a imagem da esqueda" class="absolute right-0 bg-white rounded-2xl"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path></svg></button>
                    <button onclick={()=>{
                        if(0 === pathImagemPrincipal){
                            pathImagemPrincipal= data.imovel.foto.length-1;
                        }else{
                            pathImagemPrincipal--;
                        }

                    }} aria-label="Trocar imagem para a imagem da direita" class="absolute left-0 bg-white rounded-2xl"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M12.707 17.293 8.414 13H18v-2H8.414l4.293-4.293-1.414-1.414L4.586 12l6.707 6.707z"></path></svg></button>
                </div>
                <div class="xs:hidden md:block md:w-full grid-cols-{Math.ceil(Math.sqrt(data.imovel.foto.length))} grid-rows-{Math.ceil(Math.sqrt(data.imovel.foto.length))}
                    
                    gap-2
                    xs:hidden
                    sm:hidden
                    md:grid 
                    
                    ">  
                        {#each data.imovel.foto as image, i}
                            <!-- Coisa pra acessibilidade, mas nesse caso não faz sentido já que é uma imagem.-->
                            <!-- svelte-ignore a11y_click_events_have_key_events -->
                            <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
                            <img class="w-full h-full object-contain hover:cursor-pointer {i===pathImagemPrincipal ? "p-0.5 bg-[#EB4F27]" : ""}" src="{image}" onclick={()=>pathImagemPrincipal = i} alt="foto-imovel"> 
                        {/each}
                </div>
            </figure>

            <div class={cardCss}>
                <PrecoImovelProductPage {dados}></PrecoImovelProductPage>
            </div>
        </div>
        
        <div class={grid}>
            <div class="flex flex-col gap-12">
                <div class={`${cardCss} flex flex-col justify-evenly`} >
                    <DadosDoImovel {dados}></DadosDoImovel>
                </div>

                <div class={cardCss}>
                    <DescricaoImovel {dados}></DescricaoImovel>
                </div>

                <div class={cardCss}>
                    <LocalizacaoImovel></LocalizacaoImovel>
                </div>
            </div>

            <div>
                <ContatoProduto></ContatoProduto>
            </div>

        </div>
    </div>
</div>

