# 🛠️ Scripts de Infraestrutura - Pass.in Web

Esta pasta contém scripts para automação de tarefas de infraestrutura e deploy do projeto Pass.in Web.

## 📋 Scripts Disponíveis

### `setup-env.sh`

**Configuração inicial do ambiente de desenvolvimento**

```bash
chmod +x scripts/setup-env.sh
./scripts/setup-env.sh
```

**O que faz:**

- ✅ Verifica se Node.js 18+ está instalado
- ✅ Verifica se npm está disponível
- ✅ Instala dependências do projeto
- ✅ Instala Vercel CLI globalmente
- ✅ Valida estrutura do projeto
- ✅ Cria pastas necessárias

### `deploy.sh`

**Deploy automatizado para produção**

```bash
chmod +x scripts/deploy.sh
./scripts/deploy.sh
```

**O que faz:**

- ✅ Verifica se está na branch `main`
- ✅ Verifica se não há mudanças não commitadas
- ✅ Instala dependências
- ✅ Executa ESLint
- ✅ Faz build da aplicação
- ✅ Deploy para Vercel

## 🚀 Como Usar

### Primeira vez (Setup)

```bash
# 1. Dar permissão de execução
chmod +x scripts/*.sh

# 2. Configurar ambiente
./scripts/setup-env.sh

# 3. Configurar Vercel (primeira vez)
vercel login
vercel link
```

### Deploy para Produção

```bash
# Fazer deploy
./scripts/deploy.sh

# Ou usar via npm
npm run deploy
```

## 📁 Estrutura Criada

```
scripts/
├── setup-env.sh      # Setup do ambiente
├── deploy.sh         # Deploy para produção
└── README.md         # Esta documentação

logs/                 # Pasta criada automaticamente
└── (arquivos de log)
```

## ⚙️ Configuração do Vercel

Para usar os scripts de deploy, você precisa configurar o Vercel:

```bash
# 1. Login no Vercel
vercel login

# 2. Vincular projeto
vercel link

# 3. Configurar variáveis (se necessário)
vercel env add
```

## 🔧 Troubleshooting

### Erro: "Permission denied"

```bash
chmod +x scripts/*.sh
```

### Erro: "Node.js não encontrado"

- Instale Node.js 18+ em https://nodejs.org/

### Erro: "Vercel CLI não encontrado"

```bash
npm install -g vercel
```

### Erro: "Branch não é main"

```bash
git checkout main
git pull origin main
```

## 📖 Mais Informações

- [Documentação Vercel](https://vercel.com/docs)
- [Node.js](https://nodejs.org/)
- [GitHub Actions](https://docs.github.com/en/actions)
