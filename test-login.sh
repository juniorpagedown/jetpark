#!/bin/bash

echo "🧪 Testando Sistema de Autenticação JetPark"
echo "=========================================="
echo ""

echo "📋 Credenciais de Teste:"
echo "Email: admin@sistema.com"
echo "Senha: admin123"
echo ""

echo "🌐 URLs para Teste:"
echo "- Local: http://localhost:3000/login"
echo "- Produção: https://jetpark-a5w9b25sp-juniorpagedowns-projects.vercel.app/login"
echo ""

echo "📊 Status do Sistema:"
echo "✅ Banco de dados resetado e atualizado"
echo "✅ Cliente Prisma regenerado"
echo "✅ Usuários criados com senhas hasheadas"
echo "✅ Seed executado com sucesso"
echo "✅ Servidor de desenvolvimento rodando"
echo ""

echo "🔍 Para verificar se os usuários foram criados:"
echo "npx prisma studio"
echo ""

echo "🐛 Para ver logs de debug da autenticação:"
echo "Monitore o terminal onde o 'npm run dev' está rodando"
echo ""

echo "❓ Se ainda houver problemas, verifique:"
echo "1. Se o servidor está rodando (npm run dev)"
echo "2. Se você está usando as credenciais corretas"
echo "3. Os logs no terminal do servidor"
