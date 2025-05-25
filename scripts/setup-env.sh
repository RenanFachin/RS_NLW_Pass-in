#!/bin/bash
set -e

echo "Pass.in Web - Setup Environment"
echo "=================================="

echo "Verificando Node.js..."
if ! command -v node &> /dev/null; then
    echo "Node.js não encontrado. Instale Node.js 18+"
    echo "Download: https://nodejs.org/"
    exit 1
fi

NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
echo "Node.js versão: $(node -v)"

if [ "$NODE_VERSION" -lt 18 ]; then
    echo "Node.js 18+ é necessário. Versão atual: $(node -v)"
    exit 1
fi

echo "Node.js OK"

echo "Verificando npm..."
if ! command -v npm &> /dev/null; then
    echo "npm não encontrado"
    exit 1
fi

echo "npm versão: $(npm -v)"
echo "npm OK"

echo "Instalando dependências do projeto..."
npm ci

echo "Verificando Vercel CLI..."
if ! command -v vercel &> /dev/null; then
    echo "Instalando Vercel CLI globalmente..."
    npm install -g vercel
else
    echo "Vercel CLI já instalado: $(vercel --version)"
fi

echo "Verificando estrutura do projeto..."
if [ ! -f "package.json" ]; then
    echo "package.json não encontrado"
    exit 1
fi

if [ ! -f "vercel.json" ]; then
    echo "vercel.json não encontrado"
    exit 1
fi

echo "Estrutura do projeto OK"

if [ ! -d "logs" ]; then
    echo "Criando pasta de logs..."
    mkdir -p logs
fi

echo ""
echo "Ambiente configurado com sucesso!"
echo "Comandos disponíveis:"
echo "   npm run dev      - Servidor de desenvolvimento"
echo "   npm run build    - Build de produção"
echo "   npm run deploy   - Deploy para Vercel"