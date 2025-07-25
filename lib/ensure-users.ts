import { prisma } from '@/lib/prisma'
import bcrypt from 'bcryptjs'

export async function ensureDefaultUsers() {
  try {
    // Verificar se já existem usuários
    let userCount = 0;
    
    try {
      userCount = await prisma.user.count()
    } catch (error) {
      // Se der erro, provavelmente o schema não está atualizado
      console.log('⚠️  Erro ao contar usuários, possivelmente schema desatualizado:', error.message)
      
      // Tentar deletar todos os usuários para forçar recriação
      try {
        await prisma.user.deleteMany({})
        console.log('🗑️  Usuários antigos removidos')
      } catch (deleteError) {
        console.log('ℹ️  Não foi possível remover usuários antigos (normal se não existirem)')
      }
      
      userCount = 0
    }
    
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
        try {
          await prisma.user.create({
            data: user
          })
          console.log(`✅ Usuário ${user.username} criado`)
        } catch (createError) {
          console.log(`⚠️  Erro ao criar usuário ${user.username}:`, createError.message)
        }
      }

      console.log('✅ Usuários padrão criados com sucesso!')
    } else {
      console.log(`ℹ️  Já existem ${userCount} usuários no banco`)
    }
  } catch (error) {
    console.error('❌ Erro ao garantir usuários padrão:', error)
  }
}
