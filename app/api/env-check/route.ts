import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // Verificar variáveis de ambiente (sem expor valores sensíveis)
    const envVars = {
      DATABASE_URL: process.env.DATABASE_URL ? '✅ Configurada' : '❌ Não configurada',
      NEXTAUTH_URL: process.env.NEXTAUTH_URL ? '✅ Configurada' : '❌ Não configurada',
      NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET ? '✅ Configurada' : '❌ Não configurada',
      NODE_ENV: process.env.NODE_ENV || 'development',
      VERCEL_ENV: process.env.VERCEL_ENV || 'local'
    }

    // Verificar se DATABASE_URL tem formato PostgreSQL
    const dbUrlValid = process.env.DATABASE_URL?.startsWith('postgresql://') || false

    return NextResponse.json({
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV,
      vercel_env: process.env.VERCEL_ENV,
      variables: envVars,
      database: {
        url_configured: envVars.DATABASE_URL === '✅ Configurada',
        url_format_valid: dbUrlValid,
        url_preview: process.env.DATABASE_URL ? 
          `postgresql://***@${process.env.DATABASE_URL.split('@')[1]?.split('?')[0] || 'unknown'}` : 
          'Não configurada'
      },
      status: (envVars.DATABASE_URL === '✅ Configurada' && 
               envVars.NEXTAUTH_URL === '✅ Configurada' && 
               envVars.NEXTAUTH_SECRET === '✅ Configurada') ? 
               '✅ Todas configuradas' : '⚠️  Configuração incompleta'
    })
  } catch (error) {
    return NextResponse.json({
      error: 'Erro ao verificar variáveis de ambiente',
      message: error.message
    }, { status: 500 })
  }
}
