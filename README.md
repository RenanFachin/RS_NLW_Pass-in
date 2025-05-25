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

O projeto possui pipelines automatizados no GitHub Actions:

### **CI Pipeline** (`cy.yml`)

- ✅ Instala as dependências
- ✅ Verifica o código com ESLint
- ✅ Faz o build da aplicação
- ✅ Valida scripts de infraestrutura

### **Deploy Pipeline** (`deploy.yml`)

- 🚀 Deploy automático para Vercel
- 🔍 Verificações de qualidade
- 💬 Comentários automáticos em PRs

## 🛠️ Scripts de Infraestrutura

```bash
npm run setup    # Configurar ambiente de desenvolvimento
npm run deploy   # Deploy manual para produção
```

### Estrutura de Scripts

```
scripts/
├── setup-env.sh    # Setup do ambiente
├── deploy.sh       # Deploy automatizado
└── README.md       # Documentação dos scripts
```

---

Desenvolvido com ❤️ durante o NLW Unite da [Rocketseat](https://rocketseat.com.br)
