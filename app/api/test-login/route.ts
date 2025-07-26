import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import bcrypt from 'bcryptjs'

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json()
    
    console.log('🔍 Testando credenciais:', { username })
    
    // Buscar usuário
    let user = null
    
    // Primeiro tentar por username
    try {
      user = await prisma.user.findFirst({
        where: { username },
        select: {
          id: true,
          email: true,
          username: true,
          name: true,
          role: true,
          password: true
        }
      })
      console.log('Busca por username:', user ? 'Encontrado' : 'Não encontrado')
    } catch (error) {
      console.log('Erro ao buscar por username:', error.message)
    }
    
    // Se não encontrou e parece email, tentar por email
    if (!user && username.includes('@')) {
      try {
        user = await prisma.user.findFirst({
          where: { email: username },
          select: {
            id: true,
            email: true,
            username: true,
            name: true,
            role: true,
            password: true
          }
        })
        console.log('Busca por email:', user ? 'Encontrado' : 'Não encontrado')
      } catch (error) {
        console.log('Erro ao buscar por email:', error.message)
      }
    }
    
    if (!user) {
      return NextResponse.json({
        success: false,
        message: 'Usuário não encontrado',
        debug: {
          searchTerm: username,
          foundUser: false
        }
      })
    }
    
    // Testar senha
    const isValidPassword = await bcrypt.compare(password, user.password)
    
    return NextResponse.json({
      success: isValidPassword,
      message: isValidPassword ? 'Credenciais válidas' : 'Senha incorreta',
      debug: {
        foundUser: true,
        userEmail: user.email,
        username: user.username,
        role: user.role,
        passwordValid: isValidPassword,
        hashedPassword: user.password.substring(0, 20) + '...'
      }
    })
    
  } catch (error) {
    console.error('Erro no teste de credenciais:', error)
    return NextResponse.json({
      success: false,
      message: 'Erro interno',
      error: error.message
    })
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'Use POST para testar credenciais',
    example: {
      username: 'admin@jetpark.com',
      password: 'admin123'
    }
  })
}
