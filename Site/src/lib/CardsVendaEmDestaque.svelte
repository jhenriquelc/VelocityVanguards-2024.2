
<script>
    import { Button, Card } from 'flowbite-svelte';
    const {listImoveis} = $props();


</script>

<style>
    
    p{
        text-align: justify;
    }

    /* Robei do chat*/
    .single-line-truncation{
        white-space: nowrap; /* Prevent wrapping */
        overflow: hidden; /* Hide overflowing content */
        text-overflow: ellipsis; /* Show ellipsis for overflowing text */
    }

    /* Robei do chat*/
    .two-lines-truncation {
        display: -webkit-box;
        -webkit-line-clamp: 2; /* Number of lines to show */
        -webkit-box-orient: vertical;
        overflow: hidden; /* Hide overflowing content */
        text-overflow: ellipsis;
    }

</style>

<h2 class="text-center pt-8 text-3xl mb-8 sm:text-3xl">Imóveis à venda em destaque para Cornélio</h2>

<div class="place-items-center grid grid-cols-4 gap-4 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
    {#each listImoveis as imovel}
        {#if imovel.PrecoVenda > 0 && imovel.PrecoVenda !== null}
            <Card class="flex" img={listImoveis[0].foto}>
                <div>
                    <h3 class="text-xl mb-4 text-[#303030] two-lines-truncation">{imovel.Titulo}</h3>
                    <p class="mb-1 single-line-truncation"> {`${imovel.Rua}, ${imovel.Bairro} - Cornélio Procópio`}</p>
                    <p class="mb-4">Comprar: {new Intl.NumberFormat('pt-BR', {style: 'currency',
                    currency: 'BRL',
                    }).format(imovel.PrecoVenda)}</p>
                </div>
                <div class="flex justify-center items-center">
                    <a href="/imoveis/{imovel.ID_Imovel}">
                        <Button class="text-center font-bold">
                            Saiba mais sobre esse imóvel
                        </Button>
                    </a>
                </div>
            </Card>
        {/if}
    {/each}
</div> 
