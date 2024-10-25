# Espelhamento de Tela em Tempo Real

## Descrição

Este projeto é uma aplicação web de espelhamento de tela em tempo real, desenvolvida com Svelte e Socket.IO. Permite aos usuários compartilhar sua tela com outros participantes através de um navegador web, sem necessidade de instalação de software adicional.

## Características

- Compartilhamento de tela em tempo real
- Interface simples e intuitiva
- Compatibilidade com diversos navegadores
- Baixa latência na transmissão
- Não requer instalação de software adicional

## Tecnologias Utilizadas

- [Svelte](https://svelte.dev/): Para construção da interface do usuário
- [Socket.IO](https://socket.io/): Para comunicação em tempo real
- [Express](https://expressjs.com/): Como servidor web
- [WebRTC](https://webrtc.org/): Para captura de tela

## Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 12 ou superior)
- npm (geralmente vem com o Node.js)

## Instalação

1. Clone o repositório:
   ```
   [git clone https://github.com/seu-usuario/espelhamento-de-tela.git](https://github.com/willianctti/screen-mirror)
   cd screen-mirror
   ```

2. Instale as dependências:
   ```
   npm install
   ```

3. Inicie o servidor de desenvolvimento:
   ```
   npm run dev
   ```

4. Abra o navegador e acesse `http://localhost:3000`

## Como Usar

1. Na página inicial, clique no botão "Iniciar Espelhamento".
2. Selecione a tela ou aplicativo que deseja compartilhar quando solicitado pelo navegador.
3. Para visualizar o espelhamento em outro dispositivo, abra o mesmo endereço (`http://seu-ip-local:3000`) em um navegador.
4. Para parar o compartilhamento, clique em "Parar Espelhamento".

## Configuração para Produção

1. Construa a aplicação:
   ```
   npm run build
   ```

2. Inicie o servidor de produção:
   ```
   npm start
   ```
