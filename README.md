# CRM Backend 🏢

<p align="center">
  <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDd6Y2k4ZWF1OWF4ZHgycnJ1NmRpbXB0Y3Jha2txbzFwYmx1eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oKIPEqDGUULpEU0aQ/giphy.gif" alt="CRM System" width="500">
</p>

Sistema de gerenciamento de vendas e controle de clientes desenvolvido com Node.js, Express e Prisma.

## 🚀 Funcionalidades

- **Gestão de Administradores** 👨‍💼

  - Cadastro e autenticação de administradores
  - Gerenciamento de perfis
  - Controle de acesso via JWT

- **Gestão de Clientes** 👥

  - Cadastro completo de clientes
  - Histórico de compras
  - Informações de contato

- **Gestão de Produtos** 📦

  - Cadastro de produtos
  - Controle de estoque
  - Preços e descrições

- **Gestão de Vendas** 💰

  - Registro de vendas
  - Histórico de transações
  - Cálculo automático de totais

- **Dashboard** 📊
  - Métricas em tempo real
  - Produtos mais vendidos
  - Melhores clientes
  - Total de vendas e receita

## 🛠️ Tecnologias Utilizadas

- Node.js
- TypeScript
- Express
- Prisma ORM
- PostgreSQL
- JWT
- Bcrypt
- Swagger UI
- Zod

## 📋 Pré-requisitos

- Node.js >= 14.x
- PostgreSQL
- NPM ou Yarn

## 🔧 Instalação

1. Clone o repositório:

```
git clone https://github.com/Josenilsonfariasx/crm-backend.git
```

2. Instale as dependências:

```
npm install
```

3. Configure as variáveis de ambiente:

```bash
JWT_SECRET="seu_jwt_secret"
```

4. Execute as migrations:

```bash
npx prisma migrate dev
```

5. Inicie o servidor:

```bash
npm run dev
```

## 📚 Documentação

A documentação completa da API está disponível através do Swagger UI em:

```
http://localhost:3333/api-docs
```

## 🔄 Melhorias Futuras

- [ ] Implementar sistema de notificações
- [ ] Adicionar relatórios em PDF
- [ ] Implementar sistema de metas de vendas
- [ ] Adicionar módulo de comissões
- [ ] Implementar cache com Redis
- [ ] Adicionar testes automatizados
- [ ] Implementar sistema de backup automático
- [ ] Adicionar integração com sistemas de pagamento
- [ ] Implementar sistema de fidelidade
- [ ] Adicionar suporte a múltiplas filiais

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 👨‍💻 Desenvolvedor

<div align="center">
  <img src="https://avatars.githubusercontent.com/u/122110138?v=4" width="150px" style="border-radius:50%"/>
  <br />
  <a href="https://github.com/Josenilsonfariasx">
    <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"/>
  </a>
  <a href="https://www.linkedin.com/in/josenilson-farias-b602b8248/">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"/>
  </a>
  <h3>Josenilson Farias</h3>
  <p>Desenvolvedor Full Stack | Node.js | React | TypeScript</p>
</div>

## 📝 Licença

Este projeto está sob a licença ISC.

---

<p align="center">
  Feito com ❤️ por Josenilson Farias
</p>
