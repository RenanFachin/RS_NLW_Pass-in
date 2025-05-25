# 🎫 Pass.in Web - NLW Unite

Aplicação frontend para gerenciamento de eventos e participantes, desenvolvida durante o NLW Unite da Rocketseat.

## 🚀 Tecnologias

- **React 18** - Biblioteca para interfaces de usuário
- **TypeScript** - Superset tipado do JavaScript
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Framework CSS utilitário
- **Lucide React** - Ícones
- **Day.js** - Manipulação de datas

## 🛠️ Como executar

### Pré-requisitos

- Node.js 18+
- npm

### Instalação e execução

```bash
# Clone o repositório
git clone <url-do-repositorio>

# Entre na pasta do projeto
cd pass-in-web

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

### Scripts disponíveis

```bash
npm run dev          # Inicia o servidor de desenvolvimento
npm run build        # Gera build de produção
npm run preview      # Preview do build local
npm run lint         # Executa ESLint
npm run lint:fix     # Corrige problemas do ESLint automaticamente
```

## 📁 Estrutura do projeto

```
src/
├── components/     # Componentes reutilizáveis
├── assets/        # Imagens, ícones, etc.
├── App.tsx        # Componente principal
├── main.tsx       # Ponto de entrada
└── index.css      # Estilos globais
```

## 🔄 CI/CD

O projeto possui um pipeline simples no GitHub Actions que:

- ✅ Instala as dependências
- ✅ Verifica o código com ESLint
- ✅ Faz o build da aplicação

O pipeline roda automaticamente em pushes e pull requests para a branch `main`.

---

Desenvolvido com ❤️ durante o NLW Unite da [Rocketseat](https://rocketseat.com.br)
