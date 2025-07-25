#!/bin/bash

echo "🔧 JETPARK - CONFIGURAÇÃO DE VARIÁVEIS DE AMBIENTE"
echo "=================================================="
echo ""

echo "📋 PASSOS PARA CONFIGURAR NO VERCEL:"
echo ""
echo "1. Acesse: https://vercel.com/dashboard"
echo "2. Clique no projeto: jetpark"
echo "3. Vá em: Settings → Environment Variables"
echo "4. Adicione estas 3 variáveis:"
echo ""

echo "🗄️  DATABASE_URL"
echo "   Nome: DATABASE_URL"
echo "   Valor: [sua string de conexão do Neon]"
echo "   Exemplo: postgresql://user:pass@host.neon.tech/jetpark?sslmode=require"
echo ""

echo "🔐 NEXTAUTH_SECRET"
echo "   Nome: NEXTAUTH_SECRET"
echo "   Valor: sua-chave-secreta-super-segura-para-producao-mude-esta-chave"
echo ""

echo "🌐 NEXTAUTH_URL"
echo "   Nome: NEXTAUTH_URL"
echo "   Valor: https://jetpark-6iuv7joa3-juniorpagedowns-projects.vercel.app"
echo ""

echo "✅ VERIFICAÇÃO:"
echo "   Após configurar, acesse: /api/env-check no seu projeto"
echo ""

echo "📱 COMANDOS ÚTEIS:"
echo "   vercel env ls          # Listar variáveis"
echo "   vercel --prod          # Deploy após configurar"
echo "   vercel logs            # Ver logs de deploy"
echo ""

echo "🎯 STATUS ATUAL:"
vercel env ls 2>/dev/null || echo "   ❌ Nenhuma variável configurada"
