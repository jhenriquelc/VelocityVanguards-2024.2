<script>
    import { Button, Card, Label, Helper, Input } from 'flowbite-svelte';
    import { Textarea } from 'flowbite-svelte';
</script>

<style>
    .single-line-truncation{
       white-space: nowrap; /* Prevent wrapping */
       overflow: hidden; /* Hide overflowing content */
       text-overflow: ellipsis; /* Show ellipsis for overflowing text */
   }
</style>

<section class="flex justify-center">
        <form class="bg-white p-8 rounded-2xl border border-[E5E7EB] shadow-sm w-full">
            <h2 class="single-line-truncation">Contate-nos</h2>
            <Label for="nome" class="mb-2">Nome</Label>
            <Input class="mb-2" type="text" id="first_name" required />
            <Label for="email" class="mb-2">Email</Label>
            <Input class="mb-2" type="text" id="email" required />
            <Label for="telefone" class="mb-2">Telefone</Label>
            <Input class="mb-2" type="tel" id="telefone" placeholder="(43) 99999-9999" required />
            <Label for="mensagem" class="mb-2">Mensagem</Label>
            <Textarea class="mb-2" id="mensagem" placeholder="Sua mensagem" rows="4" name="message" />
            <div class="flex justify-center">
                <Button class="mb-2 w-full" type="submit">Submit</Button>
            </div>
        </form>
</section>