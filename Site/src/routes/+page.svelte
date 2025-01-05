<script>
	// @ts-nocheck
	import VvHero from '$lib/VvHero.svelte'
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
	<div class="xs:mx-12 sm:mx-16 md:mx-32 lg:mx-48">
		<CardsVendaEmDestaque listImoveis={data.listImoveis}></CardsVendaEmDestaque>
	</div>
</section>
	