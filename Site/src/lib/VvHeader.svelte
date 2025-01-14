<script>
	import { Navbar, NavBrand, NavHamburger, NavLi, NavUl } from 'flowbite-svelte';
	import { HomeSolid } from 'flowbite-svelte-icons';
</script>

<Navbar>
	<NavBrand href="/">
		<!-- TODO: Mudar ícone de casa para uma logo -->
		<HomeSolid size="xl" />
		<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
			>Imobiliária Vanguard</span
		>
	</NavBrand>
	<NavHamburger />
	<NavUl>
		<NavLi href="/">Início</NavLi>
		<NavLi href="/imoveis">Imóveis</NavLi>
	</NavUl>
</Navbar>
