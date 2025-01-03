<script>
	// @ts-nocheck
	import VvHero from './VvHero.svelte'
	import VvHeader from '$lib/VvHeader.svelte';
	import { P, Heading } from 'flowbite-svelte';
	import Cards from '$lib/CardsVendaEmDestaque.svelte';
	import CardsVendaEmDestaque from '$lib/CardsVendaEmDestaque.svelte';
	let {data} = $props();
	console.log(data);
</script>

<VvHeader></VvHeader>

<section>
	<VvHero>
		<div class="m-8">
			<Heading class="mb-4 text-center">Avance na vida.</Heading>
			<P>Descubra como a Vanguard lhe põe à frente do mercado imobiliário.</P>
		</div>
	</VvHero>
</section>

<section class="bg-gray-50">
	<CardsVendaEmDestaque listImoveis={data.listImoveis}></CardsVendaEmDestaque>
</section>
	