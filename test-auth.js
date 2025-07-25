const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function testAuth() {
  try {
    console.log('🔍 Verificando usuários no banco...');
    
    const users = await prisma.user.findMany({
      select: {
        id: true,
        username: true,
        email: true,
        name: true,
        role: true,
        password: true
      }
    });
    
    console.log(`👥 Encontrados ${users.length} usuários:`);
    users.forEach(user => {
      console.log(`- ID: ${user.id}`);
      console.log(`  Username: ${user.username}`);
      console.log(`  Email: ${user.email}`);
      console.log(`  Name: ${user.name}`);
      console.log(`  Role: ${user.role}`);
      console.log(`  Has Password: ${user.password ? 'Yes' : 'No'}`);
      console.log('---');
    });
    
    // Testar autenticação com admin
    console.log('🔐 Testando autenticação com admin/123456...');
    const adminUser = await prisma.user.findFirst({
      where: {
        OR: [
          { username: 'admin' },
          { email: 'admin' }
        ]
      }
    });
    
    if (adminUser && adminUser.password) {
      const isPasswordValid = await bcrypt.compare('123456', adminUser.password);
      console.log(`✅ Senha válida para admin: ${isPasswordValid}`);
    } else {
      console.log('❌ Usuário admin não encontrado ou sem senha');
    }
    
  } catch (error) {
    console.error('❌ Erro:', error);
  } finally {
    await prisma.$disconnect();
  }
}

testAuth();
