<script>
    let {dados} = $props();
</script>

<style>
     .single-line-truncation{
        white-space: nowrap; /* Prevent wrapping */
        overflow: hidden; /* Hide overflowing content */
        text-overflow: ellipsis; /* Show ellipsis for overflowing text */
    }
    .two-lines-truncation {
        display: -webkit-box;
        line-clamp: 2;
        -webkit-line-clamp: 2; /* Number of lines to show */
        -webkit-box-orient: vertical;
        overflow: hidden; /* Hide overflowing content */
        text-overflow: ellipsis;
    }
</style>

<h1 class="text-xl text-justify mb-4 two-lines-truncation">Apartamento Residencial no edifício La Carte</h1>

<hr style="w-full">

<p class="text-center mt-4 mb-4">Gastos Estimados</p>
{#if dados.Categoria === 1}
    <div class="grid grid-cols-2">
        <p class="mb-2 text-md single-line-truncation">Condominio:</p>
        <p class="single-line-truncation text-right text-md">R$ {new Intl.NumberFormat('pt-BR', {style: 'currency',
            currency: 'BRL',
        }).format(dados.ValorCondominio).split(/\s+/)[1]}</p>   
    </div>
{/if}
<div class="grid grid-cols-2">
    <p class="mb-2 text-md single-line-truncation">IPTU:</p>
    <p class="single-line-truncation text-right text-md">R$ {new Intl.NumberFormat('pt-BR', {style: 'currency',
        currency: 'BRL',
    }).format(dados.ValorIPTU).split(/\s+/)[1]}</p>   </div>
<div class="grid grid-cols-2 mb-4 ">
    <p class="single-line-truncation">Outros:</p>
    <p class="text-right text-xs">Consulte-nos</p>
</div>
<hr class="w-full">

<p class="text-center mb-4">Aquisição:</p>

{#if dados.PrecoVenda !== null && dados.PrecoAluguel !== null}
    <p class="text-[#CC4522] font-bold single-line-truncation text-center text-lg">R$ <span class="text-[1.4rem] single-line-truncation">{new Intl.NumberFormat('pt-BR', {style: 'currency',
        currency: 'BRL',
    }).format(dados.PrecoVenda).split(/\s+/)[1]}</span></p>

	<p class="text-center text-[#CC4522]">ou</p>

    <p class="text-[#CC4522] font-bold single-line-truncation text-center text-sm">R$ <span class="text-[1rem] single-line-truncation">{new Intl.NumberFormat('pt-BR', {style: 'currency',
        currency: 'BRL',
    }).format(dados.PrecoAluguel).split(/\s+/)[1]}</span>/mês</p>
    
{:else if dados.PrecoVenda  !== null}

    <p class="text-[#CC4522] font-bold single-line-truncation text-center text-lg">R$ <span class="text-[1.4rem] single-line-truncation">{new Intl.NumberFormat('pt-BR', {style: 'currency',
        currency: 'BRL',
    }).format(dados.PrecoVenda).split(/\s+/)[1]}</span></p>

{:else}

    <p class="text-[#CC4522] font-bold single-line-truncation text-center">R$ <span class="text-[1.4rem]">{new Intl.NumberFormat('pt-BR', {style: 'currency',
        currency: 'BRL',
    }).format(dados.PrecoAluguel).split(/\s+/)[1]}</span>/mês</p>

{/if}