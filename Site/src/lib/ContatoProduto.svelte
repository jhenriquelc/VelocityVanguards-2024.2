<script>
    import { Button, Card, Label, Helper, Input } from 'flowbite-svelte';
    import { Textarea } from 'flowbite-svelte';
</script>

<section class="flex justify-center">
    <Card class="w-full">
        <form>
            <h2>Contate-nos</h2>
            <Label for="nome" class="mb-2">Nome</Label>
            <Input class="mb-2" type="text" id="first_name" placeholder="John" required />
            <Label for="email" class="mb-2">Email</Label>
            <Input class="mb-2" type="text" id="email" placeholder="John" required />
            <Label for="telefone" class="mb-2">Telefone</Label>
            <Input class="mb-2" type="tel" id="telefone" placeholder="(43) 99999-9999" required />
            <Label for="mensagem" class="mb-2">Mensagem</Label>
            <Textarea class="mb-2" id="mensagem" placeholder="Sua mensagem" rows="4" name="message" />
            <div class="flex justify-center">
                <Button class="mb-2 w-full" type="submit">Submit</Button>
            </div>
        </form>
    </Card>
</section>