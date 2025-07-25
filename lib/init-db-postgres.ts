import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

export async function initializeDatabase() {
  try {
    console.log('🔄 Inicializando banco de dados PostgreSQL...')

    // Verifica se há usuários no banco
    const userCount = await prisma.user.count()
    
    if (userCount === 0) {
      console.log('👤 Criando usuário admin padrão...')
      
      const hashedPassword = await bcrypt.hash('admin123', 12)
      
      await prisma.user.create({
        data: {
          username: 'admin',
          email: 'admin@jetpark.com',
          password: hashedPassword,
          role: 'ADMIN'
        }
      })
      
      console.log('✅ Usuário admin criado com sucesso')
      
      // Criar dados de exemplo
      console.log('📊 Criando dados de exemplo...')
      
      // Criar mesas
      const mesasData = [
        { numero: 1, lugares: 4 },
        { numero: 2, lugares: 2 },
        { numero: 3, lugares: 6 },
        { numero: 4, lugares: 4 },
        { numero: 5, lugares: 8 }
      ]
      
      for (const mesa of mesasData) {
        await prisma.mesa.create({
          data: mesa
        })
      }
      
      // Criar produtos
      const produtosData = [
        { nome: 'Hambúrguer Clássico', descricao: 'Hambúrguer com carne, queijo, alface e tomate', preco: 25.90, categoria: 'LANCHES' },
        { nome: 'Batata Frita', descricao: 'Porção de batata frita crocante', preco: 12.90, categoria: 'ACOMPANHAMENTOS' },
        { nome: 'Refrigerante Lata', descricao: 'Refrigerante gelado 350ml', preco: 5.90, categoria: 'BEBIDAS' },
        { nome: 'Cerveja Artesanal', descricao: 'Cerveja artesanal 500ml', preco: 15.90, categoria: 'BEBIDAS' },
        { nome: 'Salada Caesar', descricao: 'Salada com frango grelhado e molho caesar', preco: 22.90, categoria: 'SALADAS' }
      ]
      
      for (const produto of produtosData) {
        await prisma.produto.create({
          data: produto
        })
      }
      
      // Criar quartos
      const quartosData = [
        { numero: '101', tipo: 'STANDARD', preco: 120.00, descricao: 'Quarto confortável com cama de casal', capacidade: 2, comodidades: 'Wi-Fi, TV, Ar Condicionado' },
        { numero: '102', tipo: 'STANDARD', preco: 120.00, descricao: 'Quarto confortável com cama de casal', capacidade: 2, comodidades: 'Wi-Fi, TV, Ar Condicionado' },
        { numero: '201', tipo: 'LUXO', preco: 200.00, descricao: 'Suíte luxuosa com vista para o mar', capacidade: 2, comodidades: 'Wi-Fi, TV 4K, Ar Condicionado, Frigobar' },
        { numero: '301', tipo: 'FAMILY', preco: 180.00, descricao: 'Quarto família com duas camas', capacidade: 4, comodidades: 'Wi-Fi, TV, Ar Condicionado, Berço' }
      ]
      
      for (const quarto of quartosData) {
        await prisma.quarto.create({
          data: quarto
        })
      }
      
      console.log('✅ Dados de exemplo criados com sucesso')
    } else {
      console.log(`ℹ️  Banco já possui ${userCount} usuário(s)`)
    }

    const finalUserCount = await prisma.user.count()
    const mesaCount = await prisma.mesa.count()
    const produtoCount = await prisma.produto.count()
    const quartoCount = await prisma.quarto.count()
    
    console.log(`📊 Banco configurado: ${finalUserCount} usuários, ${mesaCount} mesas, ${produtoCount} produtos, ${quartoCount} quartos`)

    return { 
      success: true, 
      userCount: finalUserCount,
      mesaCount,
      produtoCount,
      quartoCount
    }
  } catch (error) {
    console.error('❌ Erro ao inicializar banco:', error)
    return { success: false, error: error.message }
  } finally {
    await prisma.$disconnect()
  }
}
