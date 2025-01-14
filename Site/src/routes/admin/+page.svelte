<script>
    import { page } from '$app/state';

</script>

<div class="w-full bg-gray-50 h-screen flex items-center justify-center">
        <form method="POST" class="bg-white p-8 rounded-2xl border border-[E5E7EB] shadow-sm 
        lg:1/3
        md:1/2
        flex flex-col">
            <label for="username">Login</label>
            <input name="username" type="text">
            <label for="password" class="mt-4">Senha</label>
            <input name="password" type="password">
            {#if page.status === 401}
                <p class="text-red-700">Credenciais Inválidas</p>                
            {/if}
            
            <div class="flex flex-row justify-center mt-8">
                <button class="bg-[#EB4F27] py-2 px-6 rounded-md"> 
                    Entrar
                </button>
            </div>

        </form>
</div>

