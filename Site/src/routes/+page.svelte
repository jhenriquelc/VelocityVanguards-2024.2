<script>
	import { P, Heading } from 'flowbite-svelte';
	import VvHeader from '$lib/VvHeader.svelte';
	import CarrosselInterno from '$lib/Carrossel_Interno.svelte';
	let {data} = $props();
	console.log("Dentro do page" + data);
</script>

<VvHeader></VvHeader>

<div class="m-8">
	<Heading class="mb-4 text-center">Avance na vida.</Heading>
	<P>Descubra como a Vanguard lhe põe à frente do mercado imobiliário.</P>
</div>


<CarrosselInterno listImoveis={data.listImoveis}></CarrosselInterno>E