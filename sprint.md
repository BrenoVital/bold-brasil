# Checklist de Demandas do Projeto

## Estrutura do Projeto

- [ ] Implementar projeto com micro frontends separados por domínios/contextos de uso, permitindo manutenção independente por diferentes times.
- [ ] Preparar um `README.md` detalhado para que qualquer desenvolvedor consiga subir o projeto, explicando como usar módulos específicos com tecnologias diversas.
- [x] Adicionar lista no `README.md` com o que foi feito e o que ainda precisa ser implementado (TODO / TASKS), incluindo uma estimativa de tempo para cada tarefa.
- [ ] Preparar o projeto em contêiner (Docker) para facilitar o deploy em cloud (exemplo: ECS da AWS).
- [x] Configuração inicial do projeto em React com Vite
- [x] Separação de micro frontends: Partner, ExternalCompany, e Shared
- [x] Configuração do roteamento com React Router

## Endpoints da API

- **Parceiros**
  - [x] Listar todos os parceiros - `GET`
  - [x] Cadastrar novo parceiro - `POST`
  - [x] Atualizar parceiro - `PUT`
  - [x] Deletar parceiro - `DELETE`
- **Empresas Externas**
  - [x] Listar todas as empresas - `GET`
  - [x] Cadastrar nova empresa - `POST`
  - [x] Atualizar empresa - `PUT`
  - [x] Deletar empresa - `DELETE`

## Tela de Login

- [x] Tela de login com campos para usuário e senha.
- [x] Opção de "Manter conectado" (salvar usuário no cookie, caso selecionado; caso contrário, usar local storage).
- [x] Criação do store de autenticação com Zustand (com mock) = senha default "senhaSegura"
- [x] Redirecionamento para tela principal após login bem-sucedido
- [x] Redirecionamento automático para a tela de login caso não esteja autenticado

### Página Inicial

- [x] Layout da aplicação com menu e itens principais:
- [x] **Cadastrar Parceiro**: Formulário para criar novo parceiro.
- [x] **Listar Parceiros**: Tabela com paginação e ações de editar/excluir.
- [x] **Excluir Parceiro**: Botão dentro da tabela para deletar parceiro por id.
- [x] **Cadastrar Empresa Externa**: Formulário para criar nova empresa.
- [x] **Listar Empresas Externas**: Tabela com paginação e ações de editar/excluir.
- [x] **Excluir Empresa Externas**: Botão dentro da tabela para deletar empresa por id.
- [ ] **Sobre a Aplicação**: Página explicando a estrutura do projeto, tecnologias utilizadas, propósito do sistema, etc.
- [ ] **Sair**: Opção que redireciona para a tela de login.

### Compartilhamento de Dados

- [ ] Implementar mecanismo para compartilhar o link da página com a páginação atual.
- [ ] Redirecionar para a páginação específica ao abrir o link, se o usuário estiver logado.
- [ ] Se o usuário não estiver logado, redirecionar para a página de login e, após o login, redirecionar para a páginação compartilhada.

## Entrega Diferenciada (Opcional)

- [x] Iniciar o projeto com Vite.
- [ ] Implementar testes unitários.
- [ ] Implementar testes automatizados.
- [ ] Realizar deploy do projeto no GitHub Pages.
- [ ] Realizar deploy do projeto no Vercel.
- [ ] Gravar um vídeo de apresentação do projeto e do código-fonte, e compartilhar o link do YouTube.

## Testes e Verificações

- [x] Teste de fluxo completo de autenticação (mockado).
- [x] Teste de redirecionamento para rotas protegidas sem autenticação.
- [x] Verificação da persistência do estado de autenticação após recarregamento da página.

## Melhorias Visuais

- [ ] Adição de mensagens de erro na tela de login para credenciais inválidas.
- [ ] Adição de mensagens de erro no retorno das requisições de parceiros.
- [ ] Adição de mensagens de erro no retorno das requisições de empresas.
