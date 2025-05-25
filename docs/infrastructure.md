# 🏗️ Infraestrutura - Pass.in Web

Documentação completa da infraestrutura e deploy do projeto Pass.in Web desenvolvido durante o NLW Unite.

## 🌐 Arquitetura

```


┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   GitHub Repo   │───▶│  GitHub Actions │───▶│     Vercel      │
│                 │    │                 │    │                 │
│ • Source Code   │    │ • CI/CD         │    │ • Hosting       │
│ • Scripts       │    │ • Tests         │    │ • CDN           │
│ • Workflows     │    │ • Build         │    │ • SSL           │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

## 🛠️ Tecnologias de Infraestrutura

### **Hospedagem**

- **Vercel**: Plataforma de deploy e hosting
- **CDN Global**: Distribuição de conteúdo
- **SSL Automático**: Certificados HTTPS

### **CI/CD**

- **GitHub Actions**: Automação de workflows
- **ESLint**: Verificação de código
- **Build Automático**: Vite + TypeScript

### **Monitoramento**

- **Vercel Analytics**: Métricas de performance
- **GitHub Insights**: Estatísticas do repositório

## 📋 Scripts de Provisionamento

### 1. **Setup do Ambiente** (`scripts/setup-env.sh`)

```bash
npm run setup
```

**Funcionalidades:**

- ✅ Verifica Node.js 18+
- ✅ Instala dependências
- ✅ Configura Vercel CLI
- ✅ Valida estrutura do projeto

### 2. **Deploy Automatizado** (`scripts/deploy.sh`)

```bash
npm run deploy
```

**Funcionalidades:**

- ✅ Verifica branch main
- ✅ Executa testes de qualidade
- ✅ Build otimizado
- ✅ Deploy para produção

## 🔄 Workflows GitHub Actions

### **CI Pipeline** (`.github/workflows/cy.yml`)

**Trigger:** Push/PR para `main`

```yaml
Verificações:
├── Checkout código
├── Setup Node.js 18
├── Instalar dependências
├── ESLint
├── Build
└── Verificar scripts
```

### **Pipeline Unificado** (`.github/workflows/cy.yml`)

**Trigger:** Push/PR para `main` + Manual

```yaml
CI/CD Completo:
├── Checkout código
├── Setup Node.js 18
├── Instalar dependências
├── ESLint
├── Build
├── Verificar scripts
├── Deploy Vercel (apenas push main)
└── Comentar PR
```

## ⚙️ Configuração

### **Variáveis de Ambiente (GitHub Secrets)**

```bash
VERCEL_TOKEN=xxxxx        # Token de acesso Vercel
ORG_ID=xxxxx             # ID da organização
PROJECT_ID=xxxxx         # ID do projeto
```

### **Configuração Vercel** (`vercel.json`)

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

## 🚀 Como Usar

### **Setup Inicial**

```bash
# 1. Clonar repositório
git clone https://github.com/[usuario]/RS_NLW_Pass-in.git
cd RS_NLW_Pass-in

# 2. Configurar ambiente
npm run setup

# 3. Configurar Vercel
vercel login
vercel link
```

### **Deploy Manual**

```bash
# Deploy via script
npm run deploy

# Deploy via Vercel CLI
vercel --prod
```

### **Deploy Automático**

```bash
# Push para main (deploy automático)
git push origin main

# Ou executar manualmente no GitHub Actions
```

## 📊 Monitoramento

### **Métricas Disponíveis**

- 📈 **Performance**: Core Web Vitals
- 🌍 **Tráfego**: Visitantes e pageviews
- 🚀 **Deploy**: Tempo de build e deploy
- ❌ **Erros**: Logs de erro em tempo real

### **URLs de Monitoramento**

- **Vercel Dashboard**: https://vercel.com/dashboard
- **GitHub Actions**: https://github.com/[usuario]/RS_NLW_Pass-in/actions
- **Analytics**: https://vercel.com/[usuario]/pass-in-web/analytics

## 🔧 Troubleshooting

### **Problemas Comuns**

#### Deploy Falha

```bash
# Verificar logs
vercel logs

# Rebuild local
npm run build
```

#### CI/CD Falha

```bash
# Verificar ESLint
npm run lint

# Corrigir automaticamente
npm run lint:fix
```

#### Permissões

```bash
# Scripts sem permissão
chmod +x scripts/*.sh
```

## 📈 Otimizações

### **Performance**

- ⚡ **Vite**: Build otimizado
- 🗜️ **Tree Shaking**: Remoção de código não usado
- 📦 **Code Splitting**: Carregamento sob demanda
- 🖼️ **Asset Optimization**: Compressão automática

### **SEO**

- 🔍 **Meta Tags**: Configuração automática
- 🌐 **Sitemap**: Geração automática
- 📱 **Mobile First**: Design responsivo

## 🔐 Segurança

### **Implementações**

- 🔒 **HTTPS**: SSL automático
- 🛡️ **Headers**: Segurança HTTP
- 🔑 **Secrets**: Variáveis protegidas
- 🚫 **CORS**: Configuração adequada

## 📚 Referências

- [Vercel Documentation](https://vercel.com/docs)
- [GitHub Actions](https://docs.github.com/en/actions)
- [Vite Guide](https://vitejs.dev/guide/)
- [React Documentation](https://react.dev/)
