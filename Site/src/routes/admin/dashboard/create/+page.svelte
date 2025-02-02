<script lang="ts">
    // @ts-nocheck
	import { goto } from '$app/navigation';
    import { Input, Label, Select, Textarea, Button, Fileupload, Helper } from 'flowbite-svelte';
	import { tick } from 'svelte';
    
    let titulo = $state("");
    let rua = $state("");
    let bairro = $state("");
    let descricao = $state("");
    let categoriaSelecionada = $state("");
    let tipoSelecionado = $state("");
    let valorVenda = $state("");
    let valorAluguel = $state("");
    let IPTU = $state("");
    let Condominio = $state("");
    let Area = $state("");
    let NGaragem = $state("");
    let NQuartos = $state("");
    let NBanheiros = $state("");

    let errors = $state([]);
    
    // svelte-ignore non_reactive_update
        let imagens: FileList | undefined;

    let categoria = [
      { value: 1, name: 'Apartamento' },
      { value: 2, name: 'Casa' },
      { value: 3, name: 'Terreno' },
      { value: 3, name: 'Sala Comercial' },
    ];

    let tipos = [
      { value: 1, name: 'Comercial' },
      { value: 2, name: 'Residencial'}
    ]


    async function handleSubmit() {
       
        if(!imagens){
            errors = [`Adicione imagens`]; 
            return;
        }

        const response = await fetch('/api/create', {
            method: "POST",
            body: JSON.stringify({
                titulo, descricao, categoriaSelecionada, tipoSelecionado,
                valorVenda, valorAluguel, IPTU, Condominio, Area,
                NGaragem, NQuartos, NBanheiros, bairro, rua
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        const result = await response.json();

        let formData = new FormData();
        
        formData.append(`imagens`, imagens);
        formData.append(`insertId`, result.insertId);

        errors = [...result.erros]; 

        if(result.success){
            const responseImage = await fetch('/api/add-image', {
            method: "POST", 
            body: formData 
            });

            const resultImage = await responseImage.json();

            if (resultImage.success){
                goto('/admin/dashboard');
            }
            errors = [...errors, `Problema ao inserir Imagem. Volte ao dashboard e exclua o imóvel cadastrado. Verifique o tamanho do arquivo.`]; 
        }
    }



</script>
  
<div class="mx-32 bg-white p-8 rounded-2xl border border-[E5E7EB] shadow-sm">
        <h1 class="text-center text-2xl"> Adicionar um Imóvel</h1>
        <div class="flex flex-col gap-2">  
            <h2 class="mb-4 text-lg">Dados Iniciais</h2>
            <Label for="titulo">Insira o título do imóvel</Label>
            <Input bind:value={titulo} ></Input>

            <div class="grid grid-cols-2 gap-4">
                <div class="flex flex-row items-center gap-2">
                    <Label>Rua:</Label>
        
                    <Input class="mt-2" bind:value={rua}/>
                </div>
                <div class="flex flex-row items-center gap-2">

                    <Label>Bairro:</Label>
                    <Input class="mt-2" bind:value={bairro}/>

                </div>

            </div>

            <div class="grid grid-cols-2 gap-4">
             
                <div class="flex flex-row items-center gap-2">
                    <Label>Tipo:</Label>
                    <Select class="mt-2" placeholder='Selecione uma opção' items={tipos} bind:value={tipoSelecionado} />

                </div>
                <div class="flex flex-row items-center gap-2">
                    <Label>Categoria:</Label>
        
                    <Select class="mt-2" placeholder='Selecione uma opção' items={categoria} bind:value={categoriaSelecionada} />
                </div>

            </div>

            <Label for="descricao"> Descrição do imóvel</Label>
            <Textarea class="mb-2" bind:value={descricao} placeholder="Descricao longa e bem detalhada" rows="4"/>
        </div>
        <h2 class="mb-4 text-lg mt-4">Valores</h2>

        <Label for="valorVenda">Preço Venda (Deixe vazio se não estiver à venda)</Label>
        <Input bind:value={valorVenda} ></Input>

        <Label for="valorAlguel">Preço Aluguel (Deixe vazio se não for alugar)</Label>
        <Input bind:value={valorAluguel} ></Input>

        <Label for="IPTU"> Valor IPTU</Label>
        <Input bind:value={IPTU} ></Input>

        <Label for="Condominio">Valor Condomínio (Deixar vazio se não tiver)</Label>
        <Input bind:value={Condominio} ></Input>

        <h2 class="mb-4 text-lg mt-4">Atributos</h2>

        <div class="flex flex-row gap-4 space-evenly">
            <div class="w-1/4">
                <Label for="Area">Área (m²)</Label>
                <Input  bind:value={Area} ></Input>
            </div>

            <div class="w-1/4">
                <Label for="NGaragem"> Nº Garagem</Label>
                <Input bind:value={NGaragem} ></Input>
            </div>

            <div class="w-1/4">
                <Label for="NQuartos"> Nº Quartos</Label>
                <Input bind:value={NQuartos} ></Input>
            </div>
            <div class="w-1/4">
                <Label for="NBanheiros"> Nº Banheiros</Label>
                <Input bind:value={NBanheiros} ></Input>
            </div>

        </div>

        <h2 class="mb-4 text-lg mt-4">Imagens</h2>

        <div>
            <Fileupload clearable multiple bind:files={imagens} label="Upload images" /> 
        </div>
    
        <div>
            {#if errors.length > 0}
            <ul class="bg-red-50 p-8 rounded-2xl border border-[E5E7EB] shadow-sm mt-8">
                {#each errors as error}
                    <li class="text-red-500">{error};</li>
                {/each}
            </ul>
            {/if}
        </div>

        <div class="flex align-items justify-center">
            <Button class="w-full mt-4 mx-auto" onclick={handleSubmit}>
                Adicionar
            </Button>
        </div>
</div>