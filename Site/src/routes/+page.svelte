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

<section class="py-8 bg-gray-50">
	<h2 class="text-center pt-8 text-3xl mb-8 sm:text-3xl">Fale Conosco</h2>

	<div class="grid grid-cols-[1fr] xl:grid-cols-[2fr_5fr] xl:gap-0
	xs:mx-12 sm:mx-16 md:mx-32 lg:mx-48
	bg-white rounded-2xl border border-[E5E7EB] shadow-sm
	">
		
		<div class="flex xs:flex-col xl:flex-col content-between justify-evenly 
		md:flex-row pt-8 xl:pt-0
		"> 
			<div>
				<p class="text-center text-lg mb-4 ">Contato</p>
				<p class="mb-4 text-center">Telefone: (43) 3555-1234</p>
				<p class="mb-8 text-center">WhatsApp: (43) 98803-2510</p>
				<hr class="w-1/2 mx-auto xs:mb-8 md:hidden xl:block xl:mb-4">
			</div>
			<div>
				<p class="text-center text-lg mb-4 ">Horários</p>
				<p class="mb-4 text-center">Segunda à Sexta: 8:00&nbsp;-&nbsp;18:00</p>
				<p class="mb-8 text-center">Sábado e Feriados: 8:00&nbsp;-&nbsp;12:00</p>
				<hr class="w-1/2 mx-auto xs:mb-8 md:hidden xl:block xl:mb-4">
			</div>

			<div>
				<p class="text-center text-lg mb-4">Endereço</p>
				<p  class="mb-4 text-center">UTFPR Campus Cornélio</p>
				<p  class="mb-8 text-center ">Av. Alberto Carazzai, 1640 </p>
			</div>
		</div>
		<a target="_blank" class="min-h-[40vh]" href="https://www.google.com.br/maps/place/UTFPR+Corn%C3%A9lio+Proc%C3%B3pio/@-23.1872568,-50.6590296,17z/data=!3m1!4b1!4m14!1m7!3m6!1s0x94eadf19f06f311f:0x8a2e7a0e8621b0f3!2sUTFPR+Corn%C3%A9lio+Proc%C3%B3pio!8m2!3d-23.1872568!4d-50.6564547!16s%2Fg%2F1hbpx4t45!3m5!1s0x94eadf19f06f311f:0x8a2e7a0e8621b0f3!8m2!3d-23.1872568!4d-50.6564547!16s%2Fg%2F1hbpx4t45?entry=ttu&g_ep=EgoyMDI1MDEyNi4wIKXMDSoASAFQAw%3D%3D">
			<img class="overflow-hidden w-full h-full rounded-2xl xs:object-cover md:object-fit" src="localizacaoImobiliaria.jpg" alt="Localização da imobiliária"></a>
	</div>
</section>