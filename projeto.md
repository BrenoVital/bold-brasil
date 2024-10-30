Página 1 de 2
Sobre o sistema:
O intuito é que possamos cadastrar os parceiros que temos integrados em nossas aplicações, com informações dele, onde usamos e quais clientes atendemos.
Informações de desenvolvimento:
Deverá ser implementado um projeto com micro front-ends separadas por domínios ou contextos de uso, permitindo assim, que diferentes times cuidem dessas funcionalidades de forma independente.
Preparar um readme.md no repo para que qualquer desenvolvedor consiga subir o projeto e ficando claro que pode usar um módulo específico com sua tecnologia.
Acrescentar no readme.md uma lista de tudo que foi feito e do que precisa feito no projeto, mesmo que não seja feito nesse momento (TODO / TASKS) com estimativa de tempo.
Preparar projeto em contêiner para que o time de infra consiga subir num cloud, exemplo ECS da AWS.
URL das API: https://644060ba792fe886a88de1b9.mockapi.io/v1/test/partners e https://655cf25525b76d9884fe3153.mockapi.io/v1/external-companies
Listar tudo - GET /
Listar um por id - GET /:id
Cadastrar um parceiro - POST - /
Atualizar um parceiro - PUT - /:id
Deletar um parceiro - DELETE - /:id

Página 2 de 2
Sobre a entrega:
Página de login. (Com opção de digitar usuário e senha, ao clicar em entrar não precisa autenticar, só redirecionar para a página inicial)
Funcionalidade de manter conectado, se o checkbox na tela de login for marcada deve salvar o usuário no cookie, se não no local storage.
Ao entrar na página busca do cookie o nome do usuário.
Página inicial. (Layout da aplicação com um menu e os itens):
Cadastrar parceiro.
Listar todos os parceiros. (Tabela com paginação e na última coluna ações para editar/deletar registro)
Sobre a aplicação. (Página com um textinho falando como o projeto foi feito, sentimento, tecnologia usada, para que serve o sistema, etc)
Sair (Direciona para o login)
Cadastrar empresa externa.
Listar as empresa externas. (Tabela com paginação do lado do front e na última coluna ações para editar/deletar registro)
Compartilhar dados da tabela: em relação a paginação, deve existir um mecanismo que ao compartilhar o link com outra pessoa, a pessoa deve ser redirecionada para a página específica da tabela, exemplo se ao compartilhar o link a paginação avançou até a página 3, ao entrar no link deve está na página 3, caso o usuário esteja logado, caso não, após o login ele deve ser redirecionado.
Integração com a API para persistir o CRUD.

Entrega diferenciada se entregar também:
Iniciar com Vite.
Testes unitários.
Testes automatizados.
Deploy do projeto no GitHub Pages.
Deploy no Vercel.
Gravar um vídeo, subir no youtube e mandar o url. Explicando o projeto rodando e o código fonte.
