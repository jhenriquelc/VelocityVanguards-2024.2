<script>
    let {data} = $props();
    let imoveis = $state(data.imoveis);

    async function handleDelete(ID_Imovel, i){
        const response = await fetch('/api/delete', {
        method: "DELETE",
        body: JSON.stringify({
            ID_Imovel
        }),
        headers: { 'Content-Type': 'application/json' }
    });
        console.log(response);
        const {success} = await response.json();
        console.log(success);
        if(success){
            imoveis.splice(i,i);
        }
    }
</script>

<div class="mx-32">
    <table class="border-[2px] border-black w-full">
        <thead class="border-black border-[1px]">
            <tr>
                <th class="bg-gray-300 ">ID</th>
                <th class="bg-gray-200">Título</th>
                <th class="bg-gray-300 w-">Preço Venda</th>
                <th class="bg-gray-200">Preço Aluguel</th>
                <th class="bg-gray-300">Bairro</th>
                <th class="bg-gray-200">Rua</th>
                <th class="bg-gray-200">Del</th>
            </tr>
        </thead>  
        <tbody>      
            {#each imoveis as imovel, i}
                <tr>
                    <td class="bg-gray-300 text-center">{imovel.ID_Imovel}</td>
                    <td class="bg-gray-200">{imovel.Titulo}</td>
                    <td class="bg-gray-300 text-center">{imovel.PrecoVenda === null ? '---' : `R$ ${new Intl.NumberFormat('pt-BR', {style: 'currency',
                        currency: 'BRL',
                    }).format(imovel.PrecoVenda).split(/\s+/)[1]}`}</td>
                    <td class="bg-gray-200 text-center">{imovel.PrecoAluguel === null ? '---' : imovel.PrecoAluguel}</td>
                    <td class="bg-gray-300">{imovel.Bairro}</td>
                    <td class="bg-gray-200">{imovel.Rua}</td>
                    <td class="bg-gray-200">
                        
                        <!-- svelte-ignore a11y_click_events_have_key_events -->
                        <!-- svelte-ignore a11y_no_static_element_interactions -->
                        <btn onclick={() => {handleDelete(imovel.ID_Imovel, i)}} class="flex justify-center items-center cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);">
                            <path d="M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7H6zm4 12H8v-9h2v9zm6 0h-2v-9h2v9zm.618-15L15 2H9L7.382 4H3v2h18V4z"></path>
                        </svg>
                    </btn>
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>