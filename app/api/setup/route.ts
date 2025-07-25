import { NextResponse } from 'next/server'
import { initializeDatabase } from '@/lib/init-db-postgres'

export async function POST() {
  try {
    console.log('🚀 Iniciando configuração do banco PostgreSQL...')
    
    const result = await initializeDatabase()
    
    if (result.success) {
      return NextResponse.json({
        success: true,
        message: 'Banco PostgreSQL configurado com sucesso!',
        userCount: result.userCount
      })
    } else {
      return NextResponse.json({
        success: false,
        error: result.error
      }, { status: 500 })
    }
    
  } catch (error) {
    console.error('❌ Erro na configuração:', error)
    return NextResponse.json({
      success: false,
      error: error.message
    }, { status: 500 })
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'Endpoint para configuração do banco PostgreSQL',
    instructions: [
      '1. Execute POST /api/setup para configurar o banco',
      '2. Usuário padrão: admin / admin123',
      '3. Dados de exemplo serão criados automaticamente'
    ]
  })
}
