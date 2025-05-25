# 🎫 Pass.in Web - NLW Unite

Aplicação frontend para gerenciamento de eventos e participantes, desenvolvida durante o NLW Unite da Rocketseat.

## 🚀 Tecnologias

- **React 18** - Biblioteca para interfaces de usuário
- **TypeScript** - Superset tipado do JavaScript
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Framework CSS utilitário
- **Lucide React** - Ícones
- **Day.js** - Manipulação de datas

## 🛠️ Desenvolvimento

### Pré-requisitos

- Node.js 18+
- npm ou yarn

### Instalação

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

### Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia o servidor de desenvolvimento

# Build e Deploy
npm run build        # Gera build de produção
npm run preview      # Preview do build local

# Qualidade de Código
npm run lint         # Executa ESLint
npm run lint:fix     # Corrige problemas do ESLint automaticamente
npm run type-check   # Verifica tipos TypeScript

# Utilitários
npm run clean        # Limpa cache e build
npm run ci           # Executa pipeline completo (CI local)
```

## 🔄 CI/CD Pipeline

O projeto possui um pipeline automatizado no GitHub Actions que executa:

### 🔍 Verificações de Qualidade

- ESLint para análise de código
- Verificação de tipos TypeScript
- Formatação e padrões de código

### 🏗️ Build e Testes

- Build da aplicação com Vite
- Upload dos artefatos de build
- Cache de dependências para otimização

### 🚀 Deploy Automático

#### Preview (Pull Requests)

- Deploy automático de preview para cada PR
- URL única para testar mudanças

#### Produção (Branch Main)

- Deploy automático em produção
- Apenas quando o código é mergeado na main

### Configuração do Deploy (Vercel)

Para habilitar o deploy automático, configure as seguintes secrets no GitHub:

```
VERCEL_TOKEN=<seu-token-vercel>
VERCEL_ORG_ID=<id-da-organizacao>
VERCEL_PROJECT_ID=<id-do-projeto>
```

## 📁 Estrutura do Projeto

```
src/
├── components/     # Componentes reutilizáveis
├── assets/        # Imagens, ícones, etc.
├── App.tsx        # Componente principal
├── main.tsx       # Ponto de entrada
└── index.css      # Estilos globais
```

## 🔧 Configurações

### ESLint

Configurado com as regras da Rocketseat para manter consistência de código.

### TypeScript

Configuração otimizada para React com verificações rigorosas.

### Tailwind CSS

Framework CSS configurado com formulários e otimizações.

## 📝 Convenções

- **Commits**: Use conventional commits (feat, fix, docs, etc.)
- **Branches**:
  - `main` - produção
  - `develop` - desenvolvimento
  - `feature/nome-da-feature` - novas funcionalidades
- **Componentes**: PascalCase para nomes de componentes
- **Arquivos**: kebab-case para arquivos utilitários

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'feat: adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Desenvolvido com ❤️ durante o NLW Unite da [Rocketseat](https://rocketseat.com.br)
