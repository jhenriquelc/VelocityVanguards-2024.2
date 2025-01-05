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

    const grid = `grid grid-cols-[3fr_1fr] gap-12 
        xs:grid-cols-1 
        sm:grid-cols-1 
        md:grid-cols-1
        lg:grid-cols-[3fr_1fr]`

    const cardCss = `bg-white p-8 rounded-2xl border border-[E5E7EB] shadow-sm`;
</script>


<div class="bg-gray-50">
    <div class="xs:mx-12 sm:mx-16 md:mx-32 lg:mx-48 pb-12">
        <div class="{`${grid} mb-12`}" >
            <!-- TODO: Substituir essa figure por um Carrossel que funcione--> 
            <!--
            <Carousel images="{
            [{alt: 'Cosmic timetraveler',
            src: '/imagem2.jpg',
            title: 'imagem-imovel.com'}]}"></Carousel>
            -->

            <figure class="flex flex-row gap-4">
                <div class="lg:w-1/2 md:w-1/2 sm:w-full xs:w-full aspect-w-4 aspect-h-3">
                    <img class="w-full h-full object-contain" src="/imagem2.jpg" alt="foto-imovel">
                </div>
                <div class="lg:w-1/2 md:w-1/2 sm:w-0 xs:w-0 aspect-w-4 aspect-h-3">
                    <img class="w-full h-full object-contain" src="/imagem2.jpg" alt="foto-imovel">
                </div>
            </figure>

            <div class={cardCss}>
                <PrecoImovelProductPage></PrecoImovelProductPage>
            </div>
        </div>
        
        <div class={grid}>
            <div class="flex flex-col gap-12">
                <div class={cardCss}>
                    <DadosDoImovel></DadosDoImovel>
                </div>

                <div class={cardCss}>
                    <DescricaoImovel></DescricaoImovel>
                </div>

                <div class={cardCss}>
                    <LocalizacaoImovel></LocalizacaoImovel>
                </div>
            </div>

            <div class="max-h-0">
                <ContatoProduto></ContatoProduto>
            </div>

        </div>
    </div>
</div>

