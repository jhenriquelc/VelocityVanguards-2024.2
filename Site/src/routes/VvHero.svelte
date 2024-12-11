<script>
    import { Search } from 'flowbite-svelte';
    import { Section, HeroHeader } from 'flowbite-svelte-blocks';
</script>

<style>
	.background {
	  position: relative;
	}
  
	.background::before {
	  content: '';
	  position: absolute;
	  top: 0;
	  left: 0;
	  right: 0;
	  bottom: 0;
	  background-image: url('/landing-hero-bg.jpg');
	  background-size: cover;
	  background-position: center;
	  opacity: 0.3;
	  z-index: -1;
	}
  </style>

<div class="background">
	<Section name="heroDefault">
		<HeroHeader>
			<svelte:fragment slot="h1">Avance na vida.</svelte:fragment>
			<svelte:fragment slot="h2">
				Descubra como a Vanguard lhe põe à frente do mercado imobiliário.
			</svelte:fragment>
			<Search placeholder="Procure por seu imóvel..." />
		</HeroHeader>
	</Section>
</div>