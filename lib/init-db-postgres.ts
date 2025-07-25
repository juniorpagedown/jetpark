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
          password: hashedPassword
        }
      })
      
      console.log('✅ Usuário admin criado com sucesso')
    } else {
      console.log(`ℹ️  Banco já possui ${userCount} usuário(s)`)
    }

    return { success: true, userCount: await prisma.user.count() }
  } catch (error) {
    console.error('❌ Erro ao inicializar banco:', error)
    return { success: false, error: error.message }
  } finally {
    await prisma.$disconnect()
  }
}
