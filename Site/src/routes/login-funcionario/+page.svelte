<script lang="ts">
	import type { PageData } from './$types';
	import { enhance } from '$app/forms';
	import { Button, Label, Helper, Heading, Input } from 'flowbite-svelte';
	import { UserSolid, LockSolid } from 'flowbite-svelte-icons';

	let { data }: { data: PageData } = $props();

	let msg_erro = $derived(data.erro_auth ? 'ID ou senha incorretos.' : undefined);
	let erro_color: 'red' | undefined = $derived(data.erro_auth ? 'red' : undefined);
</script>

<!-- card central -->
<div class="flex min-h-screen items-center justify-center">
	<div class="w-full max-w-md rounded-lg p-8 shadow-md">
		
		<!-- título -->
		<Heading tag=h2 class="mb-6 text-center">Login</Heading>

		<!-- formulário -->
		<form method="POST" use:enhance>

			<!-- inserção de ID -->
			<div class="mb-6">
				<Label class="mb-2 block" for="login">ID</Label>
				<Input name="login" id="login" required={true}>
					<UserSolid slot="left" />
				</Input>
			</div>

			<!-- inserção de senha -->
			<div class="mb-6">
				<Label class="mb-2 block" for="senha" color={erro_color}>Senha</Label>
				<Input name="senha" id="senha" required={true} color={erro_color} type="password">
					<LockSolid slot="left" />
				</Input>

				<!-- texto de erro -->
				{#if msg_erro !== undefined}
					<Helper class="mt-2 text-sm" color={erro_color}>{msg_erro}</Helper>
				{/if}
			</div>

			<!-- botão de login -->
			<div class="mb-6">
				<Button type="submit" class="w-full">Autenticar</Button>
			</div>
		</form>
	</div>
</div>
