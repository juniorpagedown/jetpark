import { prisma } from '@/lib/prisma'
import bcrypt from 'bcryptjs'

export async function ensureDefaultUsers() {
  try {
    // Verificar se já existem usuários
    const userCount = await prisma.user.count()
    
    if (userCount === 0) {
      console.log('🚀 Criando usuários padrão...')
      
      // Hash para a senha padrão "123456"
      const hashedPassword = await bcrypt.hash('123456', 12)

      // Criar usuários padrão
      const users = [
        {
          username: 'admin',
          email: 'admin@sistema.com',
          name: 'Administrador',
          password: hashedPassword,
          role: 'ADMIN',
        },
        {
          username: 'gerente',
          email: 'gerente@sistema.com',
          name: 'Gerente',
          password: hashedPassword,
          role: 'GERENTE',
        },
        {
          username: 'atendente',
          email: 'atendente@sistema.com',
          name: 'Atendente',
          password: hashedPassword,
          role: 'ATENDENTE',
        },
        {
          username: 'cozinha',
          email: 'cozinha@sistema.com',
          name: 'Cozinha',
          password: hashedPassword,
          role: 'COZINHA',
        }
      ]

      for (const user of users) {
        await prisma.user.create({
          data: user
        })
      }

      console.log('✅ Usuários padrão criados com sucesso!')
    }
  } catch (error) {
    console.error('❌ Erro ao criar usuários padrão:', error)
  }
}
