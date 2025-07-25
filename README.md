# Sistema de Gestão - Restaurante, Clube e Hotel

Sistema completo para gerenciamento integrado de restaurante, clube e hotel. Permite controlar mesas, comandas, pedidos, entrada de visitantes, reservas, hospedagens e finanças.

## 🚀 Tecnologias

- **Next.js 14** - Framework React com App Router
- **React 18** - Biblioteca para interfaces
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework CSS utilitário
- **Prisma** - ORM para banco de dados
- **PostgreSQL** - Banco de dados relacional
- **NextAuth.js** - Autenticação
- **Radix UI** - Componentes acessíveis
- **Lucide React** - Ícones

## 📋 Funcionalidades

### 🍽️ Restaurante
- **Controle de Mesas**: Visualização em tempo real do status das mesas
- **Comandas**: Gerenciamento completo com múltiplos métodos de pagamento
- **Cozinha (KDS)**: Sistema de display para cozinha com status dos pedidos
- **QR Code**: Geração automática para pedidos diretos da mesa

### 🏊 Clube
- **Entrada de Visitantes**: Controle de acesso com registro de pagamento
- **Relatórios**: Histórico de visitantes e movimentação

### 🏨 Hotel
- **Gerenciamento de Quartos**: Status em tempo real (livre, ocupado, reservado, manutenção)
- **Reservas**: Sistema completo de reservas com check-in/check-out
- **Cadastro de Hóspedes**: Histórico completo de estadias
- **Controle de Ocupação**: Dashboards com métricas de ocupação

### 📊 Dashboard Unificado
- Visão geral de todas as operações
- Métricas financeiras em tempo real
- Indicadores de performance
- Atividades recentes

### 🔐 Autenticação e Autorização
- Login por email/senha
- Login social (Google)
- Controle de acesso por perfil:
  - **Admin**: Acesso total
  - **Gerente**: Relatórios e configurações
  - **Atendente**: Operações do dia a dia
  - **Cozinha**: Apenas sistema KDS

## 🛠️ Instalação

1. **Clone o repositório**
```bash
git clone <repository-url>
cd sistema-gestao-restaurante
```

2. **Instale as dependências**
```bash
npm install
```

3. **Configure o banco de dados**
```bash
# Copie o arquivo de exemplo
cp .env.example .env

# Configure as variáveis de ambiente no arquivo .env
# Especialmente DATABASE_URL e NEXTAUTH_SECRET
```

4. **Execute as migrações do Prisma**
```bash
npx prisma db push
npx prisma generate
```

5. **Inicie o servidor de desenvolvimento**
```bash
npm run dev
```

6. **Acesse o sistema**
```
http://localhost:3000
```

## 📁 Estrutura do Projeto

```
├── app/                    # App Router do Next.js
│   ├── api/               # API Routes
│   ├── dashboard/         # Dashboard principal
│   ├── mesas/            # Controle de mesas
│   ├── comandas/         # Gerenciamento de comandas
│   ├── cozinha/          # Sistema KDS
│   ├── entradas/         # Entrada de visitantes
│   ├── hospedagem/       # Gerenciamento de quartos
│   ├── reservas/         # Controle de reservas
│   ├── hospedes/         # Cadastro de hóspedes
│   └── login/            # Página de login
├── components/            # Componentes reutilizáveis
│   └── ui/               # Componentes de interface
├── lib/                  # Utilitários e configurações
├── prisma/               # Schema e migrações do banco
└── public/               # Arquivos estáticos
```

## 🗄️ Banco de Dados

O sistema utiliza PostgreSQL com Prisma ORM. As principais entidades são:

- **User**: Usuários do sistema
- **Client**: Clientes/visitantes
- **Mesa**: Mesas do restaurante
- **Produto**: Cardápio
- **Pedido/ItemPedido**: Pedidos e itens
- **Comanda**: Comandas das mesas
- **Pagamento**: Pagamentos realizados
- **Visitante**: Controle de entrada no clube
- **Quarto**: Quartos do hotel
- **Reserva**: Reservas de quartos
- **Hospede**: Cadastro de hóspedes
- **Estadia**: Estadias realizadas

## 🚀 Deploy

### Vercel (Recomendado)

1. **Conecte seu repositório no Vercel**
2. **Configure as variáveis de ambiente**
3. **Deploy automático**

### Outras plataformas

O projeto é compatível com qualquer plataforma que suporte Next.js:
- Railway
- Heroku
- DigitalOcean App Platform
- AWS Amplify

## 🔧 Configuração

### Variáveis de Ambiente

```env
# Banco de dados
DATABASE_URL="postgresql://..."

# NextAuth
NEXTAUTH_URL="https://seu-dominio.com"
NEXTAUTH_SECRET="sua-chave-secreta"

# Google OAuth (opcional)
GOOGLE_CLIENT_ID="..."
GOOGLE_CLIENT_SECRET="..."
```

### Banco de Dados

Para produção, recomenda-se:
- **Supabase** (PostgreSQL gerenciado)
- **PlanetScale** (MySQL compatível)
- **Railway** (PostgreSQL)
- **Neon** (PostgreSQL serverless)

## 📱 Responsividade

O sistema é totalmente responsivo e funciona em:
- Desktop
- Tablet
- Mobile

## 🎨 Temas

Suporte nativo a:
- Tema claro
- Tema escuro
- Detecção automática do sistema

## 🔒 Segurança

- Autenticação segura com NextAuth.js
- Controle de acesso baseado em roles
- Validação de dados com Zod
- Sanitização de inputs
- HTTPS obrigatório em produção

## 📈 Performance

- Server-side rendering (SSR)
- Static generation quando possível
- Otimização de imagens automática
- Code splitting
- Lazy loading de componentes

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Suporte

Para suporte e dúvidas:
- Abra uma issue no GitHub
- Entre em contato via email

---

**Desenvolvido com ❤️ para gestão eficiente de restaurantes, clubes e hotéis**