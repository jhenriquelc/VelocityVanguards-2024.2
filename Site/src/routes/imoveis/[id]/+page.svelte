<script>
    import { Carousel } from "flowbite-svelte";
    let {data} = $props();

</script>

<style>
    .imagem-e-preco{
        display: flex;
    }

</style>

<section class="imagem-e-preco">
    <h2>
        {data.nomeImovel}
    </h2>
    <img src="./imagem2.jpg" alt="a">
</section>

