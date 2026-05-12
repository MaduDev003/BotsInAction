<div align="center">
  <img src="./src/assets/icons/boot.png" alt="BotsInAction" width="80" />

  <p>
    <font size="6"><strong>BotsInAction</strong></font>
  </p>

  <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/TailwindCSS-0EA5E9?style=flat-square&logo=tailwindcss&logoColor=white" />
</div>

## Sessões

- [🕹️ O que é o BotsInAction](#️-o-que-é-o-botsinaction)
- [🎯 Funcionalidades](#-funcionalidades)
- [🧩 Arquitetura](#-arquitetura)
- [⚙️ Decisões técnicas](#️-decisões-técnicas)
- [🚧 Desafios enfrentados](#-desafios-enfrentados)
- [🚀 Possíveis melhorias](#-possíveis-melhorias)
- [📦 Como executar o projeto](#-como-executar-o-projeto)
- [©️ Créditos](#️-créditos)

## 🕹️ O que é o BotsInAction

O **BotsInAction** é um jogo de captura e esquiva onde o objetivo principal do jogador é sobreviver o maior tempo possível e alcançar a maior pontuação.

Itens positivos relacionados à tecnologia, como HTML5, Tailwind CSS e JavaScript, aparecem aleatoriamente na tela e aumentam o score do jogador. Já elementos negativos, como Bug e Error 500, reduzem a quantidade de vidas ao serem coletados.

O jogo também possui mecânicas extras:
- O item HTML5 pode restaurar uma vida (até o limite de 4)
- O item JavaScript ativa uma proteção temporária de 5 segundos contra dano

Os itens são gerados dinamicamente em intervalos de tempo durante toda a partida, criando um ambiente de jogo contínuo e reativo.


## 🎯 Funcionalidades

O projeto implementa um conjunto de sistemas interativos que simulam um ambiente de jogo em tempo real, com foco em lógica de estado, interação e organização da aplicação.

- Sistema de movimentação do personagem utilizando teclado
- Gerenciamento de vidas com regras de dano e regeneração
- Controle de pausa e retomada da partida
- Controle de música durante a execução do jogo
- Tela inicial com fluxo de navegação entre menus
- Sistema de seleção de personagens antes do início da partida
- Sistema de spawn dinâmico de itens em tempo real
- Sistema de colisão para detecção de interação entre jogador e itens
- Identificação e tratamento de entidades positivas e negativas
- Sistema de proteção temporária (cooldown) ao coletar o item JavaScript
- Sistema de pontuação baseado em eventos de coleta
- Persistência de dados utilizando localStorage
- Registro de melhor, pior e última pontuação do jogador
- Tela de game over com resumo da partida e reinicialização do jogo
- Interface responsiva para diferentes tamanhos de tela

## 🧩 Arquitetura

A arquitetura do projeto foi organizada com foco em separação de responsabilidades, manutenção e reutilização de código.

As telas principais da aplicação foram separadas em uma pasta `screens`, contendo:
- Tela inicial
- Tela de seleção de personagem
- Tela principal do jogo

A lógica da aplicação foi isolada da interface visual através da pasta `services`, responsável por gerenciar regras de negócio e sistemas do jogo, como:
- Controle de personagem
- Sistema de vidas
- Sistema de pontuação
- Spawn de itens
- Controle de audio 
- Controle do estado e fluxo da partida

Os componentes reutilizáveis foram centralizados na pasta `components`, incluindo elementos compartilhados entre diferentes telas, como modais de ajuda e configurações.

O projeto também utiliza:
- `types` para tipagem e contratos da aplicação
- `utils` para funcionalidades auxiliares
- `assets` para imagens, ícones, estilos e áudio


## ⚙️ Decisões técnicas

O projeto foi desenvolvido utilizando React, Vite e TypeScript com o objetivo de praticar conceitos de arquitetura front-end, tipagem e organização de aplicações em tempo real.

A separação entre lógica e interface foi adotada para facilitar manutenção, leitura e escalabilidade do código, evitando concentrar regras de negócio diretamente nos componentes visuais.

O localStorage foi utilizado para persistência de dados compartilhados entre telas, permitindo armazenar informações como pontuação atual, melhor resultado e pior desempenho do jogador.

Além disso, a criação de uma classe dedicada ao personagem ajudou na centralização de estados e comportamentos relacionados à entidade principal do jogo.

## 🚧 Desafios enfrentados

Um dos principais desafios do projeto foi o sistema de movimentação do personagem.

Foi necessário compreender a tela como um espaço baseado em eixos X e Y, garantindo que o personagem pudesse se mover horizontalmente sem ultrapassar os limites da viewport.

Outro desafio importante foi o sistema de spawn de itens. Durante o desenvolvimento, percebeu-se que diferentes entidades não deveriam possuir a mesma taxa de aparição, levando à criação de uma lógica específica de probabilidade baseada no tipo de item.

O sistema de pausa também exigiu atenção especial, já que pausar o jogo envolvia interromper múltiplos estados simultaneamente:
- Movimento do personagem
- Spawn de itens
- Música
- Continuidade da partida

O desenvolvimento do projeto também contribuiu para o aprofundamento em:
- Gerenciamento de estados em tempo real
- Controle de colisão
- Manipulação de eventos
- Movimento de entidades em tela
- Sincronização entre áudio e gameplay

## 🚀 Possíveis melhorias

- Implementação de testes automatizados
- Criação de uma classe específica para gerenciamento dos itens coletáveis
- Ajustes mais precisos na área de colisão dos itens
- Adição de novos itens e mecânicas de gameplay
- Expansão do sistema de áudio (adicionar um audio quando o personagem colidir com os ícones ruins)

Algumas melhorias foram propositalmente adiadas para priorizar aprendizado técnico e evolução da arquitetura dentro do tempo disponível de desenvolvimento.

## 📦 Como executar o projeto

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/botsinaction

# Entre na pasta
cd botsinaction

# Instale as dependências
npm install

# Execute o projeto
npm run dev
```

## ©️ Créditos

Todos os elementos visuais do jogo, incluindo personagens, ícones e interface, foram desenvolvidos por mim para este projeto.

### 🎵 Música
A trilha sonora utilizada no jogo foi obtida gratuitamente através do Pixabay.

Créditos: 5XBeatz (Aliabbas Abasov)  
Fonte: [Perfil no Pixabay](https://pixabay.com/pt/users/5xbeatz-39481357/?utm_source=chatgpt.com)