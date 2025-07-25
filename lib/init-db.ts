import { prisma } from '@/lib/prisma'
import bcrypt from 'bcryptjs'

let isInitialized = false

export async function initializeDatabase() {
  if (isInitialized) {
    return
  }

  try {
    console.log('🔄 Inicializando banco de dados...')
    
    // Força criação das tabelas usando db push
    await prisma.$executeRaw`PRAGMA foreign_keys=off;`
    
    // Criar tabela User se não existir
    await prisma.$executeRaw`
      CREATE TABLE IF NOT EXISTS "User" (
          "id" TEXT NOT NULL PRIMARY KEY,
          "name" TEXT,
          "email" TEXT NOT NULL,
          "username" TEXT,
          "emailVerified" DATETIME,
          "image" TEXT,
          "password" TEXT,
          "role" TEXT NOT NULL DEFAULT 'ATENDENTE',
          "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
          "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
      );
    `
    
    // Criar índices únicos
    await prisma.$executeRaw`CREATE UNIQUE INDEX IF NOT EXISTS "User_email_key" ON "User"("email");`
    await prisma.$executeRaw`CREATE UNIQUE INDEX IF NOT EXISTS "User_username_key" ON "User"("username");`
    
    // Criar outras tabelas necessárias
    await prisma.$executeRaw`
      CREATE TABLE IF NOT EXISTS "Account" (
          "id" TEXT NOT NULL PRIMARY KEY,
          "userId" TEXT NOT NULL,
          "type" TEXT NOT NULL,
          "provider" TEXT NOT NULL,
          "providerAccountId" TEXT NOT NULL,
          "refresh_token" TEXT,
          "access_token" TEXT,
          "expires_at" INTEGER,
          "token_type" TEXT,
          "scope" TEXT,
          "id_token" TEXT,
          "session_state" TEXT,
          CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
      );
    `
    
    await prisma.$executeRaw`
      CREATE TABLE IF NOT EXISTS "Session" (
          "id" TEXT NOT NULL PRIMARY KEY,
          "sessionToken" TEXT NOT NULL,
          "userId" TEXT NOT NULL,
          "expires" DATETIME NOT NULL,
          CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
      );
    `
    
    // Adicionar índices para Account e Session
    await prisma.$executeRaw`CREATE UNIQUE INDEX IF NOT EXISTS "Account_provider_providerAccountId_key" ON "Account"("provider", "providerAccountId");`
    await prisma.$executeRaw`CREATE UNIQUE INDEX IF NOT EXISTS "Session_sessionToken_key" ON "Session"("sessionToken");`
    
    await prisma.$executeRaw`PRAGMA foreign_keys=on;`
    
    console.log('✅ Tabelas criadas com sucesso')
    
    // Verificar se já existem usuários
    const userCount = await prisma.user.count()
    
    if (userCount === 0) {
      console.log('🚀 Criando usuários padrão...')
      
      const hashedPassword = await bcrypt.hash('123456', 12)
      
      const users = [
        {
          id: 'admin-id-1',
          username: 'admin',
          email: 'admin@sistema.com',
          name: 'Administrador',
          password: hashedPassword,
          role: 'ADMIN',
        },
        {
          id: 'gerente-id-1',
          username: 'gerente',
          email: 'gerente@sistema.com',
          name: 'Gerente',
          password: hashedPassword,
          role: 'GERENTE',
        },
        {
          id: 'atendente-id-1',
          username: 'atendente',
          email: 'atendente@sistema.com',
          name: 'Atendente',
          password: hashedPassword,
          role: 'ATENDENTE',
        },
        {
          id: 'cozinha-id-1',
          username: 'cozinha',
          email: 'cozinha@sistema.com',
          name: 'Cozinha',
          password: hashedPassword,
          role: 'COZINHA',
        }
      ]
      
      for (const userData of users) {
        await prisma.user.create({
          data: userData
        })
        console.log(`✅ Usuário ${userData.username} criado`)
      }
      
      console.log('✅ Usuários padrão criados com sucesso!')
    } else {
      console.log(`ℹ️  Já existem ${userCount} usuários no banco`)
    }
    
    isInitialized = true
    console.log('✅ Banco inicializado com sucesso!')
    
  } catch (error) {
    console.error('❌ Erro ao inicializar banco:', error)
    throw error
  }
}
