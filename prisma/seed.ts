import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  // Hash para a senha padrão "admin123"
  const hashedPassword = await bcrypt.hash('admin123', 12)

  // Criar usuário admin
  const adminUser = await prisma.user.upsert({
    where: { email: 'admin@sistema.com' },
    update: {},
    create: {
      email: 'admin@sistema.com',
      name: 'Administrador',
      password: hashedPassword,
      role: 'ADMIN',
    },
  })

  // Criar usuário gerente
  const gerenteUser = await prisma.user.upsert({
    where: { email: 'gerente@sistema.com' },
    update: {},
    create: {
      email: 'gerente@sistema.com',
      name: 'Gerente',
      password: hashedPassword,
      role: 'GERENTE',
    },
  })

  // Criar usuário atendente
  const atendenteUser = await prisma.user.upsert({
    where: { email: 'atendente@sistema.com' },
    update: {},
    create: {
      email: 'atendente@sistema.com',
      name: 'Atendente',
      password: hashedPassword,
      role: 'ATENDENTE',
    },
  })

  // Criar usuário cozinha
  const cozinhaUser = await prisma.user.upsert({
    where: { email: 'cozinha@sistema.com' },
    update: {},
    create: {
      email: 'cozinha@sistema.com',
      name: 'Cozinha',
      password: hashedPassword,
      role: 'COZINHA',
    },
  })

  // Criar mesas
  const mesas = []
  for (let i = 1; i <= 10; i++) {
    const mesa = await prisma.mesa.upsert({
      where: { numero: i },
      update: {},
      create: {
        numero: i,
        lugares: i <= 4 ? 2 : i <= 8 ? 4 : 6,
        status: 'LIVRE',
        qrCode: `mesa-${i}-qr`,
      },
    })
    mesas.push(mesa)
  }

  // Criar produtos
  const produtos = [
    {
      nome: 'Hambúrguer Artesanal',
      descricao: 'Hambúrguer com carne 180g, queijo, alface, tomate',
      preco: 25.90,
      categoria: 'Lanches',
    },
    {
      nome: 'Pizza Margherita',
      descricao: 'Molho de tomate, mussarela, manjericão',
      preco: 35.00,
      categoria: 'Pizzas',
    },
    {
      nome: 'Salada Caesar',
      descricao: 'Alface americana, croutons, parmesão, molho caesar',
      preco: 18.50,
      categoria: 'Saladas',
    },
    {
      nome: 'Risotto de Camarão',
      descricao: 'Arroz arbóreo, camarões, vinho branco',
      preco: 42.00,
      categoria: 'Pratos Principais',
    },
    {
      nome: 'Filé à Parmegiana',
      descricao: 'Filé empanado, molho de tomate, queijo',
      preco: 38.90,
      categoria: 'Pratos Principais',
    },
    {
      nome: 'Coca-Cola 350ml',
      descricao: 'Refrigerante gelado',
      preco: 6.00,
      categoria: 'Bebidas',
    },
    {
      nome: 'Suco de Laranja',
      descricao: 'Suco natural de laranja 300ml',
      preco: 8.50,
      categoria: 'Bebidas',
    },
    {
      nome: 'Cerveja Heineken',
      descricao: 'Cerveja long neck 330ml',
      preco: 12.00,
      categoria: 'Bebidas',
    },
  ]

  for (const produto of produtos) {
    await prisma.produto.create({
      data: produto,
    })
  }

  // Criar quartos
  const quartos = [
    // Standard
    { numero: '101', tipo: 'Standard', preco: 150.00, capacidade: 2 },
    { numero: '102', tipo: 'Standard', preco: 150.00, capacidade: 2 },
    { numero: '103', tipo: 'Standard', preco: 150.00, capacidade: 2 },
    { numero: '104', tipo: 'Standard', preco: 150.00, capacidade: 2 },
    // Deluxe
    { numero: '201', tipo: 'Deluxe', preco: 250.00, capacidade: 4 },
    { numero: '202', tipo: 'Deluxe', preco: 250.00, capacidade: 4 },
    { numero: '203', tipo: 'Deluxe', preco: 250.00, capacidade: 4 },
    { numero: '204', tipo: 'Deluxe', preco: 250.00, capacidade: 4 },
    // Suítes
    { numero: '301', tipo: 'Suíte', preco: 400.00, capacidade: 6 },
    { numero: '302', tipo: 'Suíte', preco: 400.00, capacidade: 6 },
  ]

  for (const quarto of quartos) {
    let comodidades = 'Wi-Fi, TV, Ar Condicionado'
    if (quarto.tipo === 'Deluxe') {
      comodidades += ', Frigobar, Varanda'
    }
    if (quarto.tipo === 'Suíte') {
      comodidades += ', Frigobar, Varanda, Jacuzzi, Sala de Estar'
    }

    await prisma.quarto.upsert({
      where: { numero: quarto.numero },
      update: {},
      create: {
        ...quarto,
        status: 'LIVRE',
        comodidades,
        descricao: `Quarto ${quarto.tipo} com ${quarto.capacidade} pessoas`,
      },
    })
  }

  // Criar alguns clientes de exemplo
  const clientes = [
    {
      nome: 'João Silva',
      email: 'joao@email.com',
      telefone: '(11) 99999-9999',
      documento: '123.456.789-00',
      endereco: 'Rua das Flores, 123',
    },
    {
      nome: 'Maria Santos',
      email: 'maria@email.com',
      telefone: '(11) 88888-8888',
      documento: '987.654.321-00',
      endereco: 'Av. Principal, 456',
    },
    {
      nome: 'Pedro Costa',
      email: 'pedro@email.com',
      telefone: '(11) 77777-7777',
      documento: '456.789.123-00',
      endereco: 'Rua Central, 789',
    },
  ]

  for (const cliente of clientes) {
    await prisma.client.create({
      data: cliente,
    })
  }

  // Criar alguns hóspedes de exemplo
  const hospedes = [
    {
      nome: 'Ana Oliveira',
      documento: '789.123.456-00',
      telefone: '(11) 66666-6666',
      email: 'ana@email.com',
      endereco: 'Rua das Palmeiras, 321',
    },
    {
      nome: 'Carlos Ferreira',
      documento: '321.654.987-00',
      telefone: '(11) 55555-5555',
      email: 'carlos@email.com',
      endereco: 'Av. das Nações, 654',
    },
  ]

  for (const hospede of hospedes) {
    await prisma.hospede.upsert({
      where: { documento: hospede.documento },
      update: {},
      create: hospede,
    })
  }

  console.log('Seed executado com sucesso!')
  console.log('Usuários criados:')
  console.log('- admin@sistema.com (ADMIN)')
  console.log('- gerente@sistema.com (GERENTE)')
  console.log('- atendente@sistema.com (ATENDENTE)')
  console.log('- cozinha@sistema.com (COZINHA)')
  console.log('')
  console.log('Dados criados:')
  console.log('- 10 mesas')
  console.log('- 8 produtos')
  console.log('- 10 quartos')
  console.log('- 3 clientes')
  console.log('- 2 hóspedes')
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })