import { prisma } from '@/lib/prisma'
import bcrypt from 'bcryptjs'

export async function ensureDefaultUsers() {
  try {
    console.log('🔍 Verificando/criando usuários padrão...')
    
    // Verificar se já existem usuários
    let userCount = 0;
    let hasUsernameField = true;
    
    try {
      userCount = await prisma.user.count()
      console.log(`📊 Contagem atual de usuários: ${userCount}`)
    } catch (countError) {
      console.log('⚠️  Erro ao contar usuários:', countError.message)
      userCount = 0
    }
    
    // Se já existem usuários mas queremos garantir que o admin existe
    if (userCount > 0) {
      try {
        // Tentar buscar admin por username
        const adminByUsername = await prisma.user.findFirst({
          where: { username: 'admin' }
        })
        
        if (adminByUsername) {
          console.log('✅ Usuário admin encontrado por username')
          return
        }
      } catch (usernameError) {
        console.log('⚠️  Campo username não existe, tentando por email')
        hasUsernameField = false
      }
      
      // Se não encontrou por username, tentar por email
      try {
        const adminByEmail = await prisma.user.findFirst({
          where: { email: 'admin@sistema.com' }
        })
        
        if (adminByEmail) {
          console.log('✅ Usuário admin encontrado por email')
          return
        }
      } catch (emailError) {
        console.log('⚠️  Erro ao buscar admin por email:', emailError.message)
      }
    }
    
    // Se chegou aqui, precisamos criar usuários
    console.log('🚀 Criando usuários padrão...')
    
    // Hash para a senha padrão "123456"
    const hashedPassword = await bcrypt.hash('123456', 12)

    // Criar usuários padrão - com e sem username dependendo do schema
    const users = hasUsernameField ? [
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
    ] : [
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
      try {
        await prisma.user.create({
          data: user
        })
        console.log(`✅ Usuário ${user.email} criado com sucesso`)
      } catch (createError) {
        console.log(`⚠️  Erro ao criar usuário ${user.email}:`, createError.message)
        
        // Se for erro de usuário já existente, ignorar
        if (createError.message.includes('unique constraint') || 
            createError.message.includes('UNIQUE constraint')) {
          console.log(`ℹ️  Usuário ${user.email} já existe`)
        }
      }
    }

    console.log('✅ Processo de criação de usuários concluído!')
  } catch (error) {
    console.error('❌ Erro ao garantir usuários padrão:', error)
  }
}
