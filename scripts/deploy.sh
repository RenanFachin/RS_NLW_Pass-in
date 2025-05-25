#!/bin/bash
set -e

echo "Pass.in Web - Deploy Script"
echo "================================"

BRANCH=$(git branch --show-current)
if [ "$BRANCH" != "main" ]; then
    echo "Deploy deve ser feito a partir da branch main"
    echo "Branch atual: $BRANCH"
    exit 1
fi

if [ -n "$(git status --porcelain)" ]; then
    echo "Há mudanças não commitadas. Faça commit antes do deploy"
    exit 1
fi

echo "Verificações iniciais aprovadas"

echo "Instalando dependências..."
npm ci


echo "Fazendo build da aplicação..."
npm run build

if [ ! -d "dist" ]; then
    echo "Build falhou - pasta dist não encontrada"
    exit 1
fi

echo "Build criado com sucesso"

echo "Fazendo deploy para Vercel..."
if command -v vercel &> /dev/null; then
    npx vercel --prod
else
    echo "Vercel CLI não encontrado. Instalando..."
    npm install -g vercel
    npx vercel --prod
fi

echo ""
echo "Deploy concluído com sucesso!"
echo "Sua aplicação está disponível em produção" 