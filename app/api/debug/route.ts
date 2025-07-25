import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import bcrypt from 'bcryptjs'
import { initializeDatabase } from '@/lib/init-db'

export async function GET() {
  try {
    console.log('🔍 DEBUG: Iniciando verificação do banco de dados...')
    
    // Forçar inicialização do banco
    await initializeDatabase()
    
    // Informações sobre o ambiente
    const debugInfo: any = {
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV,
      databaseUrl: process.env.DATABASE_URL ? 'Definida' : 'Não definida',
      users: [],
      schemaInfo: {},
      testResults: {}
    }
    
    // Tentar contar usuários
    try {
      const userCount = await prisma.user.count()
      debugInfo.users.push(`Total de usuários: ${userCount}`)
      console.log(`📊 Total de usuários: ${userCount}`)
    } catch (countError) {
      debugInfo.users.push(`Erro ao contar usuários: ${countError.message}`)
      console.log('❌ Erro ao contar usuários:', countError.message)
    }
    
    // Tentar listar usuários
    try {
      const users = await prisma.user.findMany({
        select: {
          id: true,
          email: true,
          name: true,
          role: true,
          createdAt: true
        }
      })
      
      debugInfo.users.push('Usuários encontrados:')
      users.forEach(user => {
        debugInfo.users.push(`- ${user.email} (${user.role})`)
        console.log(`👤 Usuário: ${user.email} (${user.role})`)
      })
    } catch (listError) {
      debugInfo.users.push(`Erro ao listar usuários: ${listError.message}`)
      console.log('❌ Erro ao listar usuários:', listError.message)
    }
    
    // Testar se o campo username existe
    try {
      await prisma.user.findFirst({
        where: { username: 'test' },
        select: { username: true }
      })
      debugInfo.schemaInfo.usernameField = 'Existe'
      console.log('✅ Campo username existe')
    } catch (usernameError) {
      debugInfo.schemaInfo.usernameField = `Não existe: ${usernameError.message}`
      console.log('❌ Campo username não existe:', usernameError.message)
    }
    
    // Tentar buscar admin por email
    try {
      const adminUser = await prisma.user.findFirst({
        where: { email: 'admin@sistema.com' },
        select: {
          id: true,
          email: true,
          name: true,
          role: true,
          password: true
        }
      })
      
      if (adminUser) {
        debugInfo.testResults.adminFound = 'Sim'
        debugInfo.testResults.adminHasPassword = adminUser.password ? 'Sim' : 'Não'
        
        // Testar senha
        if (adminUser.password) {
          const isPasswordValid = await bcrypt.compare('123456', adminUser.password)
          debugInfo.testResults.passwordTest = isPasswordValid ? 'Válida' : 'Inválida'
          console.log(`🔑 Teste de senha para admin: ${isPasswordValid ? 'Válida' : 'Inválida'}`)
        }
      } else {
        debugInfo.testResults.adminFound = 'Não'
        console.log('❌ Admin não encontrado')
      }
    } catch (adminError) {
      debugInfo.testResults.adminSearchError = adminError.message
      console.log('❌ Erro ao buscar admin:', adminError.message)
    }
    
    // Tentar criar usuário de teste se não existir
    try {
      const hashedPassword = await bcrypt.hash('123456', 12)
      
      const testUser = await prisma.user.upsert({
        where: { email: 'admin@sistema.com' },
        update: {},
        create: {
          email: 'admin@sistema.com',
          name: 'Administrador',
          password: hashedPassword,
          role: 'ADMIN'
        }
      })
      
      debugInfo.testResults.userCreation = 'Sucesso'
      console.log('✅ Usuário admin criado/encontrado via upsert')
    } catch (createError) {
      debugInfo.testResults.userCreation = `Erro: ${createError.message}`
      console.log('❌ Erro ao criar usuário:', createError.message)
    }
    
    console.log('✅ DEBUG: Verificação concluída')
    
    return NextResponse.json(debugInfo, { status: 200 })
  } catch (error) {
    console.error('❌ Erro geral no debug:', error)
    return NextResponse.json({ 
      error: error.message,
      timestamp: new Date().toISOString()
    }, { status: 500 })
  }
}
