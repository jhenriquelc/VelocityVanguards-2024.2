<script>
	// @ts-nocheck
	import VvHero from '$lib/VvHero.svelte'
	import VvHeader from '$lib/VvHeader.svelte';
	import VvFooter from '$lib/VvFooter.svelte';
  
  import { P, Heading } from 'flowbite-svelte';
	import Cards from '$lib/CardsVendaEmDestaque.svelte';
	import CardsVendaEmDestaque from '$lib/CardsVendaEmDestaque.svelte';
	let {data} = $props();
</script>

<VvHeader></VvHeader>

<VvHero></VvHero>

<section class="bg-gray-50">
	<div class="xs:mx-12 sm:mx-16 md:mx-32 lg:mx-48">
		<CardsVendaEmDestaque listImoveis={data.listImoveis}></CardsVendaEmDestaque>
	</div>
</section>
	
<VvFooter></VvFooter>
