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
    let images = [1,2,3,4]
    console.log(data);
    let dados = data.dadosImovel[0];

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
            
            <figure class="flex flex-row md:gap-4 xs:gap-0 items-center justify-center">
                <div class="lg:w-1/2 md:w-1/2 sm:w-full xs:w-full flex flex-col justify-center items-center w-full relative sm:ml-2.5 md:ml-0">
                    <img class="w-full h-full" src="/{dados.ID_Imovel}/imagem{pathImagemPrincipal}.jpg" alt="foto-imovel">
                    <button onclick={()=>{
                        if(images.length-1 === pathImagemPrincipal){
                            pathImagemPrincipal=0;
                        }else{
                            pathImagemPrincipal++;
                        }

                    }} aria-label="Troca imagem para a imagem da esqueda" class="absolute right-0 bg-white rounded-2xl"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path></svg></button>
                    <button onclick={()=>{
                        if(0 === pathImagemPrincipal){
                            pathImagemPrincipal=images.length-1;
                        }else{
                            pathImagemPrincipal--;
                        }

                    }} aria-label="Trocar imagem para a imagem da direita" class="absolute left-0 bg-white rounded-2xl"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M12.707 17.293 8.414 13H18v-2H8.414l4.293-4.293-1.414-1.414L4.586 12l6.707 6.707z"></path></svg></button>
                </div>
                <div class="lg:w-1/2 md:w-1/2 sm:w-0 xs:w-0 ">
                    <div class="
                    {images.length > 4 ? 'grid-cols-4 grid-rows-4' : 'grid-cols-2 grid-rows-2'}
                    
                    gap-2
                    xs:hidden
                    sm:hidden
                    md:grid 
                    
                    ">
                        {#each images as image, i}
                            <!-- Coisa pra acessibilidade, mas nesse caso não faz sentido já que trata de imagem.-->
                            <!-- svelte-ignore a11y_click_events_have_key_events -->
                            <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
                            <img class="w-full h-full object-contain hover:cursor-pointer {i===pathImagemPrincipal ? "p-0.5 bg-[#EB4F27]" : ""}" src="/{dados.ID_Imovel}/imagem{i}.jpg" onclick={()=>pathImagemPrincipal = i} alt="foto-imovel">
                        {/each}

                    </div>
                </div>
            </figure>

            <div class={cardCss}>
                <PrecoImovelProductPage {dados}></PrecoImovelProductPage>
            </div>
        </div>
        
        <div class={grid}>
            <div class="flex flex-col gap-12">
                <div class={cardCss}>
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

