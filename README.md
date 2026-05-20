# 🍔 DevBurguer Interface

O **DevBurguer** é uma aplicação web completa de ponta a ponta (Frontend) para uma hamburgueria moderna. O sistema simula toda a experiência do usuário, desde a navegação pelos produtos, carrinho de compras, fluxo de autenticação, até a finalização do pedido com pagamento integrado.

---

## 📁 Estrutura do Projeto (`src/`)

A arquitetura do projeto foi organizada de forma escalável e padronizada:

* **`assets/`**: Imagens, logotipos e arquivos de mídia utilitários.
* **`components/`**: Componentes visuais reutilizáveis por toda a aplicação (botões, cards, inputs).
* **`config/`**: Configurações globais do projeto.
* **`containers/`**: As páginas/telas principais da aplicação (Home, Login, Cadastro, Carrinho).
* **`hooks/`**: Contextos e Hooks personalizados para gerenciamento de estados globais.
* **`layouts/`**: Estruturas de layout repetitivas (como a barra de navegação ou rodapé).
* **`routes/`**: Configuração e proteção das rotas da aplicação (rotas públicas e privadas).
* **`services/`**: Integração com serviços externos e chamadas de API (Axios).
* **`styles/`**: Estilizações globais e temas da aplicação.
* **`utils/`**: Funções utilitárias e ferramentas de formatação (como moedas e datas).

---

## 🚀 Tecnologias Utilizadas

Este projeto foi construído utilizando as melhores práticas do ecossistema React atual:

* **React 19** + **Vite** - Estrutura ultra rápida para desenvolvimento frontend.
* **React Router DOM 7** - Gerenciamento de rotas e navegação entre páginas.
* **Stripe** - Integração com gateway de pagamento real para cartão de crédito.
* **Material UI (MUI 9)** & **Phosphor Icons** - Componentes de interface e ícones modernos.
* **Styled Components** & **Emotion** - Estilização baseada em CSS-in-JS.
* **React Hook Form** + **Yup** - Criação e validação inteligente de formulários (Login/Cadastro).
* **Axios** - Cliente HTTP para consumo da API do Backend.
* **React Toastify** - Notificações visuais e alertas amigáveis na tela.

---

## 🛠️ Padronização de Código

Para garantir um código limpo, consistente e escalável, o projeto conta com as seguintes ferramentas configuradas:
* **ESLint**: Inspetor de boas práticas (com plugin `import-helpers` para organização automática de imports).
* **Prettier**: Formatador automático de código (padronização de aspas simples e pontos e vírgulas).

---

## 🔧 Como Rodar o Projeto

### Pré-requisitos
Antes de começar, você vai precisar ter instalado em sua máquina o [Node.js](https://nodejs.org/).

### Passo a Passo

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/seu-usuario/devburger-interface.git](https://github.com/seu-usuario/devburger-interface.git)