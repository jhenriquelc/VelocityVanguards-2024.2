
<script>
    import { Button, Card } from 'flowbite-svelte';
	import { Section } from 'flowbite-svelte-blocks';
    const {listImoveis} = $props();
    console.log("Dentro do carrossel");
    console.log(listImoveis);
</script>

<style>
    .grid {
        display: grid;
        justify-items: stretch;
        align-items: stretch;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 1rem;
        margin-bottom: 2rem;
        width:100%;
    }

    .grid-item{
        display: flex;
        justify-content: center; /* Center horizontally */
        align-items: center; /* Center vertically */
    }

    .nome-imovel{
        color: rgb(48, 48, 48);
        font-size: 1.4rem;
        margin-bottom: 0.5rem;
    }

    .rua-bairro-imovel{
        margin-bottom: 0.3rem;
    }
    
    .valor-imovel{
        margin-bottom: 1rem;  
    }

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

    .botao-saiba-mais{
    }

    .vendas-em-destaque{
        margin-top: 2rem;
        font-size: 2rem;
        text-align: center;
        margin-bottom: 3rem;
    }
    
    .section-vendas-em-destaque{
        margin-left: 8rem;
        margin-right: 8rem;
    }

    .div-botao{
        margin-top: 2rem;
        display: flex;
        text-align: center;
        justify-content: center;
    }


</style>

<section class="section-vendas-em-destaque">
    <h2 class="vendas-em-destaque">Imóveis à venda em destaque para Cornélio</h2>


    <div class="grid">
        {#each listImoveis as imovel}
        <div class="grid-item">
            <Card  img={"imagem2.jpeg"}>
                <div>
                    <h3 class="nome-imovel two-lines-truncation">{imovel.Nome}</h3>
                    <p class="rua-bairro-imovel single-line-truncation">Rua das Camélias, Jardim Azul - Cornélio Procópio</p>
                    <p class="valor-imovel">Comprar: {new Intl.NumberFormat('pt-BR', {style: 'currency',
                        currency: 'BRL',
                    }).format(imovel.Preco)}</p>
                </div>
                <div class="div-botao">
                    <a href="/about">
                        <Button>
                            <p class="botao-saiba-mais" > Saiba mais sobre esse imóvel</p>
                        </Button>
                    </a>
                </div>
            </Card>
        </div>
        {/each}
    </div> 
</section>