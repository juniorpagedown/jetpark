import { prisma } from '@/lib/prisma'
import bcrypt from 'bcryptjs'

export async function ensureDefaultUsers() {
  try {
    // Verificar se já existem usuários
    const userCount = await prisma.user.count()
    
    if (userCount === 0) {
      console.log('🚀 Criando usuários padrão...')
      
      // Hash para a senha padrão "admin123"
      const hashedPassword = await bcrypt.hash('admin123', 12)

      // Criar usuários padrão
      const users = [
        {
          email: 'admin@sistema.com',
          name: 'Administrador',
          password: hashedPassword,
          role: 'ADMIN',
        },
        {
          email: 'gerente@sistema.com',
          name: 'Gerente',
          password: hashedPassword,
          role: 'GERENTE',
        },
        {
          email: 'atendente@sistema.com',
          name: 'Atendente',
          password: hashedPassword,
          role: 'ATENDENTE',
        },
        {
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
