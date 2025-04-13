<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Logo do Nest" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">Um framework progressivo <a href="http://nodejs.org" target="_blank">Node.js</a> para construção de aplicações server-side eficientes e escaláveis.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="Versão NPM" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Licença do Pacote" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="Downloads NPM" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Apoiadores no Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Patrocinadores no Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Doar-PayPal-ff3f59.svg" alt="Doar para nós"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Apoie%20nós-Open%20Collective-41B883.svg" alt="Apoie-nos"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Seguir" alt="Siga-nos no Twitter"></a>
</p>

# Sistema de Gerenciamento de RPG

Foi desenvolvido um sistema de gerenciamento de RPG com NestJS, como forma de avaliação da Matéria Desafio Profissional VII. Esse sistema permite o gerenciamento de Personagens e Itens Mágicos, sendo que cada personagem pode carregar vários itens mágicos, e cada item mágico está vinculado a um personagem.


### Trabalho realizado por:
- Diogo Tizolim Cedran - RA: 22014212-2



## 🚀 Tecnologias Utilizadas

- NestJS
- TypeScript
- Swagger UI


## 📋 Funcionalidades

### Personagens
- Criação de personagens com distribuição de pontos (10 pontos entre Força e Defesa)
- Cinco classes disponíveis: Guerreiro, Mago, Arqueiro, Ladino e Bardo
- Gerenciamento de atributos (Força e Defesa)
- Sistema de itens mágicos vinculados
- Restrição de um amuleto por personagem

### Itens Mágicos
- Três tipos de itens: Arma, Armadura e Amuleto
- Regras específicas por tipo:
  - Armas: Defesa obrigatoriamente zero
  - Armaduras: Força obrigatoriamente zero
  - Amuletos: Podem ter Força e Defesa
- Limite máximo de 10 pontos para Força e Defesa
- Não permite itens com Força e Defesa zerados

## 🛠️ Instalação

```bash
# Clone o repositório
git clone https://github.com/diogo-cedran/Avaliacao-DesafioProfissional.git

# Entre no diretório
cd avaliacao-desafioprofissional

# Instale as dependências
npm install

# Inicie o servidor em modo de desenvolvimento
npm run start:dev
```

## 📚 Documentação da API (Swagger)

A documentação completa da API está disponível através do Swagger UI. Para acessar:

1. Inicie o servidor
2. Acesse: `http://localhost:3000/api`


## ⚠️ Regras de Negócio

### Personagens
- Total de pontos (Força + Defesa) não pode exceder 10
- Classe deve ser uma das opções válidas
- Nível deve ser maior que 0
- Apenas um amuleto por personagem

### Itens Mágicos
- Armas: Defesa = 0
- Armaduras: Força = 0
- Amuletos: Podem ter Força e Defesa
- Força e Defesa máximas = 10
- Não permite Força = 0 e Defesa = 0

## 🔄 Fluxo de Uso

1. Criar um personagem
2. Criar itens mágicos
3. Adicionar itens ao personagem
4. Gerenciar atributos e relacionamentos
5. Atualizar ou remover conforme necessário

