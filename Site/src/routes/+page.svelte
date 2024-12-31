<script>
	import { P, Heading } from 'flowbite-svelte';
	import VvHeader from '$lib/VvHeader.svelte';
	import Cards from '$lib/Cards.svelte';
	let {data} = $props();
	console.log("Dentro do page" + data);
</script>

<VvHeader></VvHeader>

<div class="m-8">
	<Heading class="mb-4 text-center">Avance na vida.</Heading>
	<P>Descubra como a Vanguard lhe põe à frente do mercado imobiliário.</P>
</div>

<div style="margin: 10px 100px;">
	<Cards listImoveis={data.listImoveis}></Cards>
</div>