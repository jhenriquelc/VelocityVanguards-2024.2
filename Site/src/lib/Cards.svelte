
<script>
    import { Card } from 'flowbite-svelte';
    const {listImoveis} = $props();
    console.log("Dentro do carrossel");
    console.log(listImoveis);
</script>

<style>
    img {
        width: 208px;
        height: auto;
    }

    .carrossel {
        display: grid;
        grid-template-columns: auto auto auto;
        padding: 10px;
    }
</style>

<div class="carrossel">
    {#each listImoveis as imovel}
        <Card>
            <div>
                <h3>{imovel.Nome}</h3>
                <p>R$ {imovel.Preco}</p>
                <a href="/about">
                    <img src={imovel.Imagem} alt="Imagem de um imóvel">
                </a>
            </div>
        </Card>

    {/each}
</div> 