<script>
    let {dados} = $props();
    console.log(dados);
</script>

<div class="flex flex-col mb-8">
    <h2 class="text-center">Descrição do imóvel</h2>
    <p class="text-justify">{dados.Descricao}</p>
</div>
