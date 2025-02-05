# Diagramas

## Casos de Uso

### Site da Imobiliária

![Diagrama de caso de uso para site da imobiliária](<./uc Site Imobiliária.png>)

Os clientes buscam imóveis e descobrem o escritório da imobiliária, podendo entrar em contato ao fazê-lo.

## Atividades

### Adicionar Imóvel

![Diagrama de atividade "adicionar imóvel"](<./act Adicionar imóvel.png>)

Para adicionar um imóvel, um funcionário autenticado clica no botão de adição de imóvel, sendo redirecionado para a página com o formulário de criação para preencher os campos e confirmar o preenchimento. Os dados são enviados ao sistema que atualiza o banco de dados e então redireciona o funcionário à página inicial.

### Busca por Imóveis

![Diagrama de atividade "busca por imóveis"](<./act Busca por imóveis.png>)

Na página inicial ou de resultados de pesquisa, o cliente insere uma pesquisa na caixa de pesquisa, enviando sua busca ao sistema. O sistema então procura os imóveis que atentem os critérios de busca e então redireciona o cliente a uma página com os resultados da pesquisa.

### Editar Imóvel

![Diagrama de atividade "editar imóvel"](<./act Editar Imóvel.png>)

Na página de imóvel, um funcionário autenticado clica no botão de edição, que faz o sistema redirecioná-lo à pagina de formulário edição do imóvel selecionado. O funcionário então edita as informações e confirma as mudanças. Recebendo as informações preenchidas, o sistema as valida os dados inseridos, redirecionando de volta se forem inválidos ou cadastrando no banco de dados se correto. Quando inserir corretamente, redirecionar à página inicial.

### Editar Informações do Escritório

![Diagrama de atividade "editar informações do escritório"](<./act Editar informações do escritório.png>)

Assim como [editar imóvel](<#editar-imóvel>) mas para informações do escritório da imobiliária ao invés de um imóvel selecionado.

### Excluir Imóvel

![Diagrama de atividade "excluir imóvel"](<./act Excluir imóvel.png>)

Na página de um imóvel, o funcionário pode clicar no botão de excluir para instruir o sistema a descadastrar o imóvel do banco de dados, pedindo confirmação antes de realizá-lo.

### Login

![Diagrama de atividade "login"](<./act Login.png>)

O funcionário acessa à pagina de login, onde insere suas credenciais para autenticação. Se as credenciais forem válidas, é redirecionado para sua página inicial, caso contrário é instruído a tentar se autenticar novamente.

## Navegação

- [Voltar à página inicial](<../README.md>)
