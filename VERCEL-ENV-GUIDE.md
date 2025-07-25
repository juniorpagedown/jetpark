# 🔧 GUIA COMPLETO - CONFIGURAR VARIÁVEIS DE AMBIENTE NO VERCEL

## 📋 1. Acessar Configurações do Projeto

1. **Acesse**: https://vercel.com/dashboard
2. **Clique no projeto**: jetpark
3. **Vá para**: Settings (no menu superior)
4. **Clique em**: Environment Variables (menu lateral)

## ⚙️ 2. Adicionar Variáveis Obrigatórias

### 🗄️ DATABASE_URL (String de Conexão do Neon)
```
Name: DATABASE_URL
Value: postgresql://username:password@hostname/database_name?sslmode=require
Environment: Production, Preview, Development
```

### 🔐 NEXTAUTH_SECRET (Chave de Segurança)
```
Name: NEXTAUTH_SECRET
Value: sua-chave-secreta-super-segura-para-producao-mude-esta-chave
Environment: Production, Preview, Development
```

### 🌐 NEXTAUTH_URL (URL do Projeto)
```
Name: NEXTAUTH_URL
Value: https://jetpark-6iuv7joa3-juniorpagedowns-projects.vercel.app
Environment: Production, Preview, Development
```

## 🔍 3. Como Obter a STRING DE CONEXÃO do Neon

### Opção A - No Dashboard do Neon:
1. Acesse: https://console.neon.tech/
2. Vá para seu projeto: jetpark-db
3. Clique em: **"Connection Details"**
4. Copie a string que aparece como: `postgresql://...`

### Opção B - No SQL Editor:
Execute este comando SQL no Neon Console:
```sql
SELECT current_database(), current_user, inet_server_addr(), inet_server_port();
```

## ✅ 4. Verificar Configuração

### Via Browser:
Acesse: `https://seu-projeto.vercel.app/api/env-check`

### Via Terminal (depois do deploy):
```bash
curl https://seu-projeto.vercel.app/api/env-check
```

## 🚀 5. Exemplo de Resposta Esperada

```json
{
  "status": "✅ Todas configuradas",
  "variables": {
    "DATABASE_URL": "✅ Configurada",
    "NEXTAUTH_URL": "✅ Configurada", 
    "NEXTAUTH_SECRET": "✅ Configurada"
  },
  "database": {
    "url_configured": true,
    "url_format_valid": true,
    "url_preview": "postgresql://***@hostname:5432"
  }
}
```

## ⚠️ 6. Problemas Comuns

### DATABASE_URL Incorreta:
- ❌ `postgresql://localhost:5432/jetpark` (local)
- ✅ `postgresql://user:pass@host.neon.tech/jetpark` (neon)

### NEXTAUTH_URL Incorreta:
- ❌ `http://localhost:3000` (local)
- ✅ `https://seu-projeto.vercel.app` (produção)

### Ambientes Não Selecionados:
- Certifique-se de marcar: **Production**, **Preview**, **Development**

## 🔄 7. Após Configurar

1. **Redeploy**: As variáveis só são aplicadas após um novo deploy
2. **Teste**: Acesse `/api/env-check` para verificar
3. **Login**: Teste com admin/admin123

## 📞 8. Comandos Úteis

### Verificar localmente:
```bash
npm run dev
# Acesse: http://localhost:3001/api/env-check
```

### Deploy após configurar:
```bash
vercel --prod
```

### Ver logs do Vercel:
```bash
vercel logs
```
