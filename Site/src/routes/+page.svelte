
<script>
	// @ts-nocheck

	import VvHero from './VvHero.svelte';
	import VvHeader from '$lib/VvHeader.svelte';
	import { P, Heading } from 'flowbite-svelte';
	import Cards from '$lib/CardsVendaEmDestaque.svelte';
	import CardsVendaEmDestaque from '$lib/CardsVendaEmDestaque.svelte';
	let {data} = $props();
	let images = [  {
      alt: 'Imagem do imovel' + data.nomeImovel,
      src: './imagem2.jpg',
      title: 'cosmic-timetraveler-pYyOZ8q7AII-unsplash.com'
    }, 
    {
      alt: 'Imagem do imovel' + data.nomeImovel,
      src: './imagem2.jpg',
      title: 'cosmic-timetraveler-pYyOZ8q7AII-unsplash.com'
    }]

</script>

<style>
	.main{
		background-color: rgb(238, 238, 238);
	}
</style>


<div class="main">
	<VvHeader></VvHeader>

	<VvHero>
		<div class="m-8">
			<Heading class="mb-4 text-center">Avance na vida.</Heading>
			<P>Descubra como a Vanguard lhe põe à frente do mercado imobiliário.</P>
		</div>
	</VvHero>
	<CardsVendaEmDestaque listImoveis={data.listImoveis}></CardsVendaEmDestaque>
	
</div>
