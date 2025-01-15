<script>
	import { goto } from '$app/navigation';

    let {data} = $props();
    let imoveis = data.imoveis;
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
                <th class="bg-gray-300">Edit</th>
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
                    <td class="bg-gray-300">{imovel.BairroNome}</td>
                    <td class="bg-gray-200">{imovel.RuaNome}</td>
                    <td class="bg-gray-300">
                        <!-- svelte-ignore a11y_click_events_have_key_events -->
                        <!-- svelte-ignore a11y_no_static_element_interactions -->
                        <btn onclick={()=>{
                            goto(`/admin/dashboard/edit-${imovel.ID_Imovel}`)
                        }} class="flex justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);">
                                <path d="M19.045 7.401c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.378-.378-.88-.586-1.414-.586s-1.036.208-1.413.585L4 13.585V18h4.413L19.045 7.401zm-3-3 1.587 1.585-1.59 1.584-1.586-1.585 1.589-1.584zM6 16v-1.585l7.04-7.018 1.586 1.586L7.587 16H6zm-2 4h16v2H4z"></path>
                            </svg>
                        </btn>

                    </td>
                    <td class="bg-gray-200">
                        
                        <btn class="flex justify-center items-center">
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