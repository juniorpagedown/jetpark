-- Script SQL para configurar o banco PostgreSQL em produção
-- Execute este script após o primeiro deploy para popular o banco

-- Criar usuário admin (senha: admin123)
INSERT INTO users (id, email, username, password, role, "createdAt", "updatedAt")
VALUES (
  'admin_' || gen_random_uuid(),
  'admin@jetpark.com',
  'admin',
  '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewNiMJA2pKI4kjES', -- admin123
  'ADMIN',
  NOW(),
  NOW()
) ON CONFLICT (email) DO NOTHING;

-- Criar algumas mesas de exemplo
INSERT INTO mesas (id, numero, lugares, status)
VALUES 
  ('mesa_1_' || gen_random_uuid(), 1, 4, 'LIVRE'),
  ('mesa_2_' || gen_random_uuid(), 2, 2, 'LIVRE'),
  ('mesa_3_' || gen_random_uuid(), 3, 6, 'LIVRE'),
  ('mesa_4_' || gen_random_uuid(), 4, 4, 'LIVRE'),
  ('mesa_5_' || gen_random_uuid(), 5, 8, 'LIVRE')
ON CONFLICT (numero) DO NOTHING;

-- Criar alguns produtos de exemplo
INSERT INTO produtos (id, nome, descricao, preco, categoria, ativo, "createdAt", "updatedAt")
VALUES 
  ('prod_1_' || gen_random_uuid(), 'Hambúrguer Clássico', 'Hambúrguer com carne, queijo, alface e tomate', 25.90, 'LANCHES', true, NOW(), NOW()),
  ('prod_2_' || gen_random_uuid(), 'Batata Frita', 'Porção de batata frita crocante', 12.90, 'ACOMPANHAMENTOS', true, NOW(), NOW()),
  ('prod_3_' || gen_random_uuid(), 'Refrigerante Lata', 'Refrigerante gelado 350ml', 5.90, 'BEBIDAS', true, NOW(), NOW()),
  ('prod_4_' || gen_random_uuid(), 'Cerveja Artesanal', 'Cerveja artesanal 500ml', 15.90, 'BEBIDAS', true, NOW(), NOW()),
  ('prod_5_' || gen_random_uuid(), 'Salada Caesar', 'Salada com frango grelhado e molho caesar', 22.90, 'SALADAS', true, NOW(), NOW());

-- Criar alguns quartos de exemplo
INSERT INTO quartos (id, numero, tipo, preco, status, descricao, capacidade, comodidades)
VALUES 
  ('quarto_1_' || gen_random_uuid(), '101', 'STANDARD', 120.00, 'LIVRE', 'Quarto confortável com cama de casal', 2, 'Wi-Fi, TV, Ar Condicionado'),
  ('quarto_2_' || gen_random_uuid(), '102', 'STANDARD', 120.00, 'LIVRE', 'Quarto confortável com cama de casal', 2, 'Wi-Fi, TV, Ar Condicionado'),
  ('quarto_3_' || gen_random_uuid(), '201', 'LUXO', 200.00, 'LIVRE', 'Suíte luxuosa com vista para o mar', 2, 'Wi-Fi, TV 4K, Ar Condicionado, Frigobar'),
  ('quarto_4_' || gen_random_uuid(), '301', 'FAMILY', 180.00, 'LIVRE', 'Quarto família com duas camas', 4, 'Wi-Fi, TV, Ar Condicionado, Berço')
ON CONFLICT (numero) DO NOTHING;

-- Verificar se os dados foram inseridos
SELECT 'Usuários criados:' as info, COUNT(*) as quantidade FROM users
UNION ALL
SELECT 'Mesas criadas:', COUNT(*) FROM mesas
UNION ALL
SELECT 'Produtos criados:', COUNT(*) FROM produtos
UNION ALL
SELECT 'Quartos criados:', COUNT(*) FROM quartos;
