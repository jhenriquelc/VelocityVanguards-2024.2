<script>
    let imovelIsAlugavel = true;
    let imovelIsAVenda = true;
    let isApartamento = true;
</script>

<style>
     .single-line-truncation{
        white-space: nowrap; /* Prevent wrapping */
        overflow: hidden; /* Hide overflowing content */
        text-overflow: ellipsis; /* Show ellipsis for overflowing text */
    }
    .two-lines-truncation {
        display: -webkit-box;
        -webkit-line-clamp: 2; /* Number of lines to show */
        -webkit-box-orient: vertical;
        overflow: hidden; /* Hide overflowing content */
        text-overflow: ellipsis;
    }
</style>

<h1 class="text-xl text-justify mb-4 two-lines-truncation">Apartamento Residencial no edifício La Carte</h1>

<hr width="100%">

<p class="text-center mt-4 mb-4">Gastos Estimados</p>
{#if isApartamento}
    <div class="grid grid-cols-2">
        <p class="mb-2 text-md single-line-truncation">Condominio:</p>
        <p class="text-right">R$ 1500</p>
    </div>
{/if}
<div class="grid grid-cols-2">
    <p class="mb-2 text-md single-line-truncation">IPTU:</p>
    <p class="text-right text-md">R$ 1500</p>
</div>

<div class="grid grid-cols-2 mb-4 ">
    <p class="single-line-truncation">Outros:</p>
    <p class="text-right text-xs">Consulte-nos</p>
</div>
<hr width="100%">

<p class="text-center mb-4">Aquisição:</p>

{#if imovelIsAlugavel && imovelIsAVenda}
    <p class="text-[#CC4522] font-bold single-line-truncation text-center text-lg">R$ <span class="text-[1.4rem] single-line-truncation">{new Intl.NumberFormat('pt-BR', {style: 'currency',
        currency: 'BRL',
    }).format(10200000).split(/\s+/)[1]}</span></p>

	<p class="text-center text-[#CC4522]">ou</p>

    <p class="text-[#CC4522] font-bold single-line-truncation text-center text-sm">R$ <span class="text-[1rem] single-line-truncation">{new Intl.NumberFormat('pt-BR', {style: 'currency',
        currency: 'BRL',
    }).format(12000).split(/\s+/)[1]}</span>/mês</p>
    
{:else if imovelIsAVenda}

    <p class="text-[#CC4522] font-bold single-line-truncation text-center text-lg">R$ <span class="text-[1.4rem] single-line-truncation">{new Intl.NumberFormat('pt-BR', {style: 'currency',
        currency: 'BRL',
    }).format(10200000).split(/\s+/)[1]}</span></p>

{:else}

    <p class="text-[#CC4522] font-bold single-line-truncation">R$ <span class="text-[1.4rem]">{new Intl.NumberFormat('pt-BR', {style: 'currency',
        currency: 'BRL',
    }).format(1.200).split(/\s+/)[1]}</span>/mês</p>
    
{/if}