import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function testAuth() {
  console.log('🔍 Testando autenticação...')
  
  // Buscar o usuário admin
  const user = await prisma.user.findUnique({
    where: { email: 'admin@sistema.com' }
  })
  
  if (!user) {
    console.log('❌ Usuário não encontrado!')
    return
  }
  
  console.log('✅ Usuário encontrado:', {
    id: user.id,
    email: user.email,
    name: user.name,
    role: user.role,
    hasPassword: !!user.password
  })
  
  if (user.password) {
    // Testar a senha
    const isValid = await bcrypt.compare('admin123', user.password)
    console.log('🔑 Teste de senha:', isValid ? '✅ Válida' : '❌ Inválida')
    
    // Mostrar hash da senha (primeiros caracteres)
    console.log('🔐 Hash da senha:', user.password.substring(0, 20) + '...')
  } else {
    console.log('❌ Usuário não tem senha definida')
  }
}

testAuth()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error('Erro:', error)
    process.exit(1)
  })
