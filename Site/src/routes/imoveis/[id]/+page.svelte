<script>
    import { Card, Carousel } from "flowbite-svelte";
    import { Input, Label, Helper } from 'flowbite-svelte';
    import DadosDoImovel from "$lib/DadosDoImovel.svelte";
	import ContatoProduto from "$lib/ContatoProduto.svelte";
    let {data} = $props();

    const grid = `grid grid-cols-[3fr_1fr] gap-12 
        xs:grid-cols-1 
        sm:grid-cols-1 
        md:grid-cols-1 
        lg:grid-cols-[3fr_1fr]`
</script>


<div class="bg-gray-50">
    <div class="xs:mx-12 sm:mx-16 md:mx-32 lg:mx-48">
        <div class="{`${grid} mb-12`}" >
            <!-- TODO: Substituir essa figure por um Carrossel que funcione--> 
            <!--
            <Carousel images="{
            [{alt: 'Cosmic timetraveler',
            src: '/imagem2.jpg',
            title: 'imagem-imovel.com'}]}"></Carousel>
            -->

            <figure class="flex flex-row">
                <img class="lg:w-1/2 md:w-1/2 sm:w-full" src="/imagem2.jpg" alt="">
                <img class="lg:w-1/2 md:w-1/2 sm:w-0 xs:w-0" src="/imagem2.jpg" alt="">
            </figure>

            <Card></Card>
        </div>
        
        <div class={grid}>
            <div class="flex flex-col">
                <DadosDoImovel></DadosDoImovel>
                <div>
                    <div class="flex flex-col items-center mb-8">
                        <h2>Descrição do imóvel</h2>
                    </div>
                    <p class="justify-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est ea eveniet quia sed voluptatibus consequatur magni, quos ullam veniam suscipit incidunt. Maxime ipsum deleniti assumenda magnam suscipit ipsam natus fugit? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam dolorem adipisci in sit dicta incidunt nihil minima natus dolores cum similique, at eos sed debitis repudiandae libero recusandae nisi. Quas? Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit tenetur atque dicta veritatis quibusdam voluptatum? In accusantium, aperiam repellat error hic veniam rem modi voluptatem! Natus amet voluptas fugit laudantium.</p>
                </div>

                <div>
                    <div class="flex flex-col items-center mb-8">
                        <h2>Localização do imóvel</h2>
                    </div>
                </div>
            </div>

            <ContatoProduto></ContatoProduto>

        </div>
    </div>
</div>

