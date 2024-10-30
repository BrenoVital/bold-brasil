import { Col, Typography } from "antd";

export default function About() {
  return (
    <Col span={24}>
      <Typography.Title level={2}>
        Informações sobre a aplicação
      </Typography.Title>

      <Typography.Title level={3}>Propósito do Sistema</Typography.Title>
      <Typography.Paragraph>
        O objetivo desta aplicação é gerenciar parceiros e empresas externas
        integradas às operações, permitindo o cadastro e manutenção de
        informações sobre cada parceiro e cliente atendido. A aplicação facilita
        o controle e o acesso rápido a dados relevantes, otimizando a gestão de
        integrações.
      </Typography.Paragraph>

      <Typography.Title level={3}>Arquitetura e Estrutura</Typography.Title>
      <Typography.Paragraph>
        <strong>Micro frontends:</strong> O sistema é dividido em micro
        frontends (Partner, ExternalCompany, e Shared), permitindo que
        diferentes equipes desenvolvam e mantenham cada módulo de forma
        independente, reduzindo impactos de mudanças e facilitando a
        escalabilidade.
      </Typography.Paragraph>
      <Typography.Paragraph>
        <strong>Tecnologias:</strong> Utilizado React, Vite (inicialização
        rápida), Zustand (gerenciamento de autenticação) e React Router
        (navegação).
      </Typography.Paragraph>
      <Typography.Paragraph>
        <strong>Containerização:</strong> O projeto está preparado para deploy
        em contêineres usando Docker, permitindo uma infraestrutura flexível e
        portátil na nuvem, como na AWS ECS.
      </Typography.Paragraph>

      <Typography.Title level={3}>Funcionalidades Principais</Typography.Title>
      <Typography.Paragraph>
        <strong>Autenticação e Login:</strong> Fluxo de login com armazenamento
        em local storage, persistência do estado do usuário e redirecionamento
        para áreas protegidas.
      </Typography.Paragraph>
      <Typography.Paragraph>
        <strong>Cadastro e Listagem:</strong> Recursos de CRUD para parceiros e
        empresas externas, com tabelas paginadas e ações de editar/deletar.
      </Typography.Paragraph>
      <Typography.Paragraph>
        <strong>Página Inicial:</strong> Visão geral com relatórios de parceiros
        e empresas cadastradas.
      </Typography.Paragraph>
      <Typography.Paragraph>
        <strong>Compartilhamento de Links:</strong> Mecanismo que preserva a
        paginação ao compartilhar links e direciona corretamente o usuário.
      </Typography.Paragraph>

      <Typography.Title level={3}>Endpoints da API</Typography.Title>
      <Typography.Paragraph>
        A aplicação integra-se com as seguintes APIs:
      </Typography.Paragraph>
      <Typography.Paragraph>
        <strong>Parceiros:</strong>
        <ul>
          <li>Listar todos: GET /partners</li>
          <li>Cadastrar: POST /partners</li>
          <li>Atualizar: PUT /partners/:id</li>
          <li>Deletar: DELETE /partners/:id</li>
        </ul>
      </Typography.Paragraph>
      <Typography.Paragraph>
        <strong>Empresas Externas:</strong>
        <ul>
          <li>Listar todas: GET /external-companies</li>
          <li>Cadastrar: POST /external-companies</li>
          <li>Atualizar: PUT /external-companies/:id</li>
          <li>Deletar: DELETE /external-companies/:id</li>
        </ul>
      </Typography.Paragraph>

      <Typography.Title level={3}>Entrega e Documentação</Typography.Title>
      <Typography.Paragraph>
        A documentação está disponível no arquivo README.md, que inclui
        instruções para desenvolvedores subirem o projeto e uma lista de tarefas
        realizadas e pendentes.
      </Typography.Paragraph>

      <Typography.Title level={3}>
        Funcionalidades Diferenciadas
      </Typography.Title>
      <Typography.Paragraph>
        Testes unitários e automatizados, deploy no GitHub Pages e Vercel, além
        de um vídeo explicativo sobre o projeto e o código-fonte.
      </Typography.Paragraph>
    </Col>
  );
}
