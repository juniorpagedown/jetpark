-- =====================================================
-- SCRIPT SQL COMPLETO PARA JETPARK - POSTGRESQL/NEON
-- Execute este script no SQL Editor do Neon Console
-- =====================================================

-- Criar todas as tabelas do sistema
CREATE TABLE IF NOT EXISTS "users" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT NOT NULL,
    "username" TEXT,
    "emailVerified" TIMESTAMP(3),
    "image" TEXT,
    "password" TEXT,
    "role" TEXT NOT NULL DEFAULT 'ATENDENTE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "Account" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "Session" (
    "id" TEXT NOT NULL,
    "sessionToken" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "VerificationToken" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL
);

CREATE TABLE IF NOT EXISTS "clients" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT,
    "telefone" TEXT,
    "documento" TEXT,
    "endereco" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "clients_pkey" PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "mesas" (
    "id" TEXT NOT NULL,
    "numero" INTEGER NOT NULL,
    "lugares" INTEGER NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'LIVRE',
    "qrCode" TEXT,

    CONSTRAINT "mesas_pkey" PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "produtos" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT,
    "preco" DOUBLE PRECISION NOT NULL,
    "categoria" TEXT NOT NULL,
    "ativo" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "produtos_pkey" PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "comandas" (
    "id" TEXT NOT NULL,
    "mesaId" TEXT NOT NULL,
    "clientId" TEXT,
    "userId" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'ABERTA',
    "total" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "comandas_pkey" PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "pedidos" (
    "id" TEXT NOT NULL,
    "comandaId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'PENDENTE',
    "total" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "pedidos_pkey" PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "itens_pedido" (
    "id" TEXT NOT NULL,
    "pedidoId" TEXT NOT NULL,
    "produtoId" TEXT NOT NULL,
    "quantidade" INTEGER NOT NULL,
    "preco" DOUBLE PRECISION NOT NULL,
    "observacao" TEXT,

    CONSTRAINT "itens_pedido_pkey" PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "pagamentos" (
    "id" TEXT NOT NULL,
    "comandaId" TEXT NOT NULL,
    "valor" DOUBLE PRECISION NOT NULL,
    "metodo" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "pagamentos_pkey" PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "visitantes" (
    "id" TEXT NOT NULL,
    "clientId" TEXT NOT NULL,
    "entrada" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "saida" TIMESTAMP(3),
    "pagou" BOOLEAN NOT NULL DEFAULT false,
    "valor" DOUBLE PRECISION,

    CONSTRAINT "visitantes_pkey" PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "quartos" (
    "id" TEXT NOT NULL,
    "numero" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "preco" DOUBLE PRECISION NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'LIVRE',
    "descricao" TEXT,
    "capacidade" INTEGER NOT NULL,
    "comodidades" TEXT NOT NULL,

    CONSTRAINT "quartos_pkey" PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "reservas" (
    "id" TEXT NOT NULL,
    "quartoId" TEXT NOT NULL,
    "clientId" TEXT NOT NULL,
    "checkIn" TIMESTAMP(3) NOT NULL,
    "checkOut" TIMESTAMP(3) NOT NULL,
    "valor" DOUBLE PRECISION NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'CONFIRMADA',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "reservas_pkey" PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "hospedes" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "documento" TEXT NOT NULL,
    "telefone" TEXT,
    "email" TEXT,
    "endereco" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "hospedes_pkey" PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "estadias" (
    "id" TEXT NOT NULL,
    "quartoId" TEXT NOT NULL,
    "clientId" TEXT NOT NULL,
    "hospedeId" TEXT NOT NULL,
    "checkIn" TIMESTAMP(3) NOT NULL,
    "checkOut" TIMESTAMP(3),
    "valor" DOUBLE PRECISION NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'ATIVA',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "estadias_pkey" PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "notificacoes" (
    "id" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "mensagem" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "lida" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "notificacoes_pkey" PRIMARY KEY ("id")
);

-- =====================================================
-- CRIAR ÍNDICES ÚNICOS
-- =====================================================

CREATE UNIQUE INDEX IF NOT EXISTS "users_email_key" ON "users"("email");
CREATE UNIQUE INDEX IF NOT EXISTS "users_username_key" ON "users"("username");
CREATE UNIQUE INDEX IF NOT EXISTS "Account_provider_providerAccountId_key" ON "Account"("provider", "providerAccountId");
CREATE UNIQUE INDEX IF NOT EXISTS "Session_sessionToken_key" ON "Session"("sessionToken");
CREATE UNIQUE INDEX IF NOT EXISTS "VerificationToken_token_key" ON "VerificationToken"("token");
CREATE UNIQUE INDEX IF NOT EXISTS "VerificationToken_identifier_token_key" ON "VerificationToken"("identifier", "token");
CREATE UNIQUE INDEX IF NOT EXISTS "mesas_numero_key" ON "mesas"("numero");
CREATE UNIQUE INDEX IF NOT EXISTS "mesas_qrCode_key" ON "mesas"("qrCode");
CREATE UNIQUE INDEX IF NOT EXISTS "quartos_numero_key" ON "quartos"("numero");
CREATE UNIQUE INDEX IF NOT EXISTS "hospedes_documento_key" ON "hospedes"("documento");

-- =====================================================
-- ADICIONAR FOREIGN KEYS
-- =====================================================

ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "comandas" ADD CONSTRAINT "comandas_mesaId_fkey" FOREIGN KEY ("mesaId") REFERENCES "mesas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "comandas" ADD CONSTRAINT "comandas_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "comandas" ADD CONSTRAINT "comandas_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "pedidos" ADD CONSTRAINT "pedidos_comandaId_fkey" FOREIGN KEY ("comandaId") REFERENCES "comandas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "pedidos" ADD CONSTRAINT "pedidos_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "itens_pedido" ADD CONSTRAINT "itens_pedido_pedidoId_fkey" FOREIGN KEY ("pedidoId") REFERENCES "pedidos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "itens_pedido" ADD CONSTRAINT "itens_pedido_produtoId_fkey" FOREIGN KEY ("produtoId") REFERENCES "produtos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "pagamentos" ADD CONSTRAINT "pagamentos_comandaId_fkey" FOREIGN KEY ("comandaId") REFERENCES "comandas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "visitantes" ADD CONSTRAINT "visitantes_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "reservas" ADD CONSTRAINT "reservas_quartoId_fkey" FOREIGN KEY ("quartoId") REFERENCES "quartos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "reservas" ADD CONSTRAINT "reservas_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "estadias" ADD CONSTRAINT "estadias_quartoId_fkey" FOREIGN KEY ("quartoId") REFERENCES "quartos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "estadias" ADD CONSTRAINT "estadias_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "estadias" ADD CONSTRAINT "estadias_hospedeId_fkey" FOREIGN KEY ("hospedeId") REFERENCES "hospedes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- =====================================================
-- INSERIR DADOS INICIAIS
-- =====================================================

-- Usuário admin (senha: admin123)
INSERT INTO "users" ("id", "email", "username", "password", "role", "createdAt", "updatedAt")
VALUES (
    'admin_' || gen_random_uuid(),
    'admin@jetpark.com',
    'admin',
    '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewNiMJA2pKI4kjES',
    'ADMIN',
    NOW(),
    NOW()
) ON CONFLICT ("email") DO NOTHING;

-- Mesas do restaurante
INSERT INTO "mesas" ("id", "numero", "lugares", "status") VALUES
('mesa_1_' || gen_random_uuid(), 1, 4, 'LIVRE'),
('mesa_2_' || gen_random_uuid(), 2, 2, 'LIVRE'),
('mesa_3_' || gen_random_uuid(), 3, 6, 'LIVRE'),
('mesa_4_' || gen_random_uuid(), 4, 4, 'LIVRE'),
('mesa_5_' || gen_random_uuid(), 5, 8, 'LIVRE'),
('mesa_6_' || gen_random_uuid(), 6, 4, 'LIVRE'),
('mesa_7_' || gen_random_uuid(), 7, 2, 'LIVRE'),
('mesa_8_' || gen_random_uuid(), 8, 6, 'LIVRE')
ON CONFLICT ("numero") DO NOTHING;

-- Produtos do cardápio
INSERT INTO "produtos" ("id", "nome", "descricao", "preco", "categoria", "ativo", "createdAt", "updatedAt") VALUES
('prod_1_' || gen_random_uuid(), 'Hambúrguer Clássico', 'Hambúrguer com carne 180g, queijo, alface, tomate e molho especial', 25.90, 'LANCHES', true, NOW(), NOW()),
('prod_2_' || gen_random_uuid(), 'Hambúrguer Bacon', 'Hambúrguer com carne 180g, bacon crocante, queijo cheddar', 29.90, 'LANCHES', true, NOW(), NOW()),
('prod_3_' || gen_random_uuid(), 'Batata Frita Grande', 'Porção generosa de batata frita crocante', 14.90, 'ACOMPANHAMENTOS', true, NOW(), NOW()),
('prod_4_' || gen_random_uuid(), 'Batata Frita Pequena', 'Porção individual de batata frita', 8.90, 'ACOMPANHAMENTOS', true, NOW(), NOW()),
('prod_5_' || gen_random_uuid(), 'Refrigerante Lata', 'Refrigerante gelado 350ml', 5.90, 'BEBIDAS', true, NOW(), NOW()),
('prod_6_' || gen_random_uuid(), 'Suco Natural', 'Suco natural de frutas 400ml', 8.90, 'BEBIDAS', true, NOW(), NOW()),
('prod_7_' || gen_random_uuid(), 'Cerveja Artesanal', 'Cerveja artesanal premium 500ml', 15.90, 'BEBIDAS', true, NOW(), NOW()),
('prod_8_' || gen_random_uuid(), 'Água Mineral', 'Água mineral sem gás 500ml', 3.90, 'BEBIDAS', true, NOW(), NOW()),
('prod_9_' || gen_random_uuid(), 'Salada Caesar', 'Salada com frango grelhado e molho caesar', 22.90, 'SALADAS', true, NOW(), NOW()),
('prod_10_' || gen_random_uuid(), 'Salada Tropical', 'Mix de folhas com frutas tropicais', 19.90, 'SALADAS', true, NOW(), NOW()),
('prod_11_' || gen_random_uuid(), 'Pizza Margherita', 'Pizza tradicional com molho de tomate, mozzarella e manjericão', 35.90, 'PIZZAS', true, NOW(), NOW()),
('prod_12_' || gen_random_uuid(), 'Pizza Portuguesa', 'Pizza com presunto, ovos, cebola e azeitonas', 42.90, 'PIZZAS', true, NOW(), NOW()),
('prod_13_' || gen_random_uuid(), 'Sorvete Artesanal', 'Sorvete artesanal 3 bolas', 12.90, 'SOBREMESAS', true, NOW(), NOW()),
('prod_14_' || gen_random_uuid(), 'Brownie com Sorvete', 'Brownie quente com sorvete de baunilha', 16.90, 'SOBREMESAS', true, NOW(), NOW());

-- Quartos do hotel
INSERT INTO "quartos" ("id", "numero", "tipo", "preco", "status", "descricao", "capacidade", "comodidades") VALUES
('quarto_101_' || gen_random_uuid(), '101', 'STANDARD', 120.00, 'LIVRE', 'Quarto confortável com cama de casal', 2, 'Wi-Fi grátis, TV LED 32", Ar condicionado, Frigobar'),
('quarto_102_' || gen_random_uuid(), '102', 'STANDARD', 120.00, 'LIVRE', 'Quarto confortável com cama de casal', 2, 'Wi-Fi grátis, TV LED 32", Ar condicionado, Frigobar'),
('quarto_103_' || gen_random_uuid(), '103', 'STANDARD', 120.00, 'LIVRE', 'Quarto confortável com duas camas de solteiro', 2, 'Wi-Fi grátis, TV LED 32", Ar condicionado, Frigobar'),
('quarto_201_' || gen_random_uuid(), '201', 'LUXO', 200.00, 'LIVRE', 'Suíte luxuosa com vista para o mar', 2, 'Wi-Fi grátis, TV LED 43", Ar condicionado, Frigobar, Banheira, Varanda'),
('quarto_202_' || gen_random_uuid(), '202', 'LUXO', 200.00, 'LIVRE', 'Suíte luxuosa com vista para o jardim', 2, 'Wi-Fi grátis, TV LED 43", Ar condicionado, Frigobar, Banheira, Varanda'),
('quarto_301_' || gen_random_uuid(), '301', 'FAMILY', 180.00, 'LIVRE', 'Quarto família com cama de casal e beliche', 4, 'Wi-Fi grátis, TV LED 40", Ar condicionado, Frigobar, Berço disponível'),
('quarto_302_' || gen_random_uuid(), '302', 'FAMILY', 180.00, 'LIVRE', 'Quarto família com duas camas de casal', 4, 'Wi-Fi grátis, TV LED 40", Ar condicionado, Frigobar, Berço disponível'),
('quarto_401_' || gen_random_uuid(), '401', 'PREMIUM', 350.00, 'LIVRE', 'Cobertura premium com sala e quarto', 2, 'Wi-Fi grátis, TV LED 55", Ar condicionado, Frigobar, Jacuzzi, Terraço privativo')
ON CONFLICT ("numero") DO NOTHING;

-- Clientes exemplo
INSERT INTO "clients" ("id", "nome", "email", "telefone", "documento", "endereco", "createdAt", "updatedAt") VALUES
('client_1_' || gen_random_uuid(), 'João Silva', 'joao.silva@email.com', '(11) 99999-1111', '123.456.789-01', 'Rua das Flores, 123 - São Paulo/SP', NOW(), NOW()),
('client_2_' || gen_random_uuid(), 'Maria Santos', 'maria.santos@email.com', '(11) 99999-2222', '987.654.321-02', 'Av. Paulista, 456 - São Paulo/SP', NOW(), NOW()),
('client_3_' || gen_random_uuid(), 'Pedro Oliveira', 'pedro.oliveira@email.com', '(11) 99999-3333', '456.789.123-03', 'Rua da Consolação, 789 - São Paulo/SP', NOW(), NOW());

-- Hóspedes exemplo
INSERT INTO "hospedes" ("id", "nome", "documento", "telefone", "email", "endereco", "createdAt", "updatedAt") VALUES
('hospede_1_' || gen_random_uuid(), 'Ana Costa', '111.222.333-44', '(11) 98888-1111', 'ana.costa@email.com', 'Rua dos Jardins, 321 - Rio de Janeiro/RJ', NOW(), NOW()),
('hospede_2_' || gen_random_uuid(), 'Carlos Mendes', '555.666.777-88', '(21) 98888-2222', 'carlos.mendes@email.com', 'Av. Copacabana, 654 - Rio de Janeiro/RJ', NOW(), NOW());

-- =====================================================
-- VERIFICAR DADOS INSERIDOS
-- =====================================================

SELECT 'RESUMO DO BANCO DE DADOS' as info;
SELECT 'Usuários criados:' as tipo, COUNT(*) as quantidade FROM "users"
UNION ALL
SELECT 'Mesas criadas:', COUNT(*) FROM "mesas"  
UNION ALL
SELECT 'Produtos criados:', COUNT(*) FROM "produtos"
UNION ALL
SELECT 'Quartos criados:', COUNT(*) FROM "quartos"
UNION ALL
SELECT 'Clientes criados:', COUNT(*) FROM "clients"
UNION ALL
SELECT 'Hóspedes criados:', COUNT(*) FROM "hospedes";

-- =====================================================
-- SCRIPT CONCLUÍDO
-- Login: admin / admin123
-- =====================================================
