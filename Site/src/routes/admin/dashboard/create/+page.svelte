<script>
// @ts-nocheck

    import { Input, Label, Select, Textarea, Button } from 'flowbite-svelte';
    let categoriaSelecionada;
    let tipoSelecionado;
  
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
</script>
  
<div class="mx-32 bg-white p-8 rounded-2xl border border-[E5E7EB] shadow-sm">
    <form method="POST">
        <h1 class="text-center text-2xl"> Adicionar um Imóvel</h1>
        <div class="flex flex-col gap-2">  
            <h2 class="mb-4 text-lg">Dados Iniciais</h2>
            <Label for="titulo">Insira o título do imóvel</Label>
            <Input id="titulo" size="default"></Input>

            <div class="grid grid-cols-2 gap-4">
                <div class="flex flex-row items-center gap-2">
                    <Label>Categoria:</Label>
        
                    <Select class="mt-2" placeholder='Selecione uma opção' items={categoria} bind:value={categoriaSelecionada} />
                </div>
                <div class="flex flex-row items-center gap-2">

                    <Label>Tipo:</Label>
                    <Select class="mt-2" placeholder='Selecione uma opção' items={tipos} bind:value={tipoSelecionado} />

                </div>

            </div>

            <Label for="descricao"> Descrição do imóvel</Label>
            <Textarea class="mb-2" id="descricao" placeholder="Descricao longa e bem detalhada" rows="4"/>
        </div>
        <h2 class="mb-4 text-lg mt-4">Valores</h2>

        <Label for="valorVenda">Preço Venda (Deixe vazio se não estiver à venda)</Label>
        <Input id="valorVenda" size="default"></Input>

        <Label for="valorAlguel">Preço Aluguel (Deixe vazio se não for alugar)</Label>
        <Input id="valorAlguel" size="default"></Input>

        <Label for="IPTU"> Valor IPTU</Label>
        <Input id="IPTU" size="default"></Input>

        <Label for="Condominio">Valor Condomínio (Deixar vazio se não tiver)</Label>
        <Input id="Condominio" size="default"></Input>

        <h2 class="mb-4 text-lg mt-4">Propriedades</h2>

        <div class="flex flex-row gap-4 space-evenly">
            <div class="w-1/4">
                <Label for="Area">Área (m²)</Label>
                <Input id="valorAlguel" size="default"></Input>
            </div>

            <div class="w-1/4">
                <Label for="NGaragem"> Nº Garagem</Label>
                <Input id="valorAlguel" size="default"></Input>
            </div>

            <div class="w-1/4">
                <Label for="NQuartos"> Nº Quartos</Label>
                <Input id="valorAlguel" size="default"></Input>
            </div>
            <div class="w-1/4">
                <Label for="NBanheiros"> Nº Banheiros</Label>
                <Input id="valorAlguel" size="default"></Input>
            </div>

        </div>

        <div class="flex align-items justify-center">
            <Button class="w-full mt-4 mx-auto" type="submit">
                Adicionar
            </Button>
        </div>

    </form>
</div>