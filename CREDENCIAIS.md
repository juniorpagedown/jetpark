# 🔐 Credenciais do Sistema JetPark

## Usuários de Teste

### 👨‍💼 Administrador
- **Email:** `admin@sistema.com`
- **Senha:** `admin123`
- **Perfil:** Acesso completo ao sistema

### 👨‍💼 Gerente
- **Email:** `gerente@sistema.com`
- **Senha:** `admin123`
- **Perfil:** Gestão operacional

### 👨‍💼 Atendente
- **Email:** `atendente@sistema.com`
- **Senha:** `admin123`
- **Perfil:** Atendimento ao cliente

### 👨‍🍳 Cozinha
- **Email:** `cozinha@sistema.com`
- **Senha:** `admin123`
- **Perfil:** Gestão da cozinha

## ⚠️ Observações de Segurança

- **Para desenvolvimento:** Todas as contas usam a senha padrão `admin123`
- **Para produção:** Altere todas as senhas antes do deploy
- **Banco de dados:** SQLite local (`prisma/dev.db`)

## 🔄 Como alterar senhas

1. Execute o seed novamente: `npm run db:seed`
2. Ou altere diretamente no banco usando: `npx prisma studio`

## 🌐 URLs Importantes

- **Local:** http://localhost:3000
- **Produção:** https://jetpark-9ok606kvt-juniorpagedowns-projects.vercel.app
- **Login:** `/login`
- **Dashboard:** `/dashboard`
