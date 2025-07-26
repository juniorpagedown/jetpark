const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

// Usar DATABASE_URL de produção
const DATABASE_URL = "postgres://neondb_owner:npg_wsMBvL3bcj8u@ep-rapid-bird-adibyqye-pooler.c-2.us-east-1.aws.neon.tech/neondb?connect_timeout=15&sslmode=require";

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: DATABASE_URL
    }
  }
});

async function testLogin() {
  try {
    console.log('🔍 Testando conexão com banco de produção...');
    
    // Listar todos os usuários
    const users = await prisma.user.findMany({
      select: {
        id: true,
        email: true,
        username: true,
        name: true,
        role: true,
        password: true
      }
    });
    
    console.log(`\n📊 Total de usuários: ${users.length}`);
    users.forEach(user => {
      console.log(`👤 ${user.email} (${user.role}) - senha hash: ${user.password?.substring(0, 20)}...`);
    });
    
    // Testar credencial admin@jetpark.com
    console.log('\n🔐 Testando login admin@jetpark.com com senha "admin123"...');
    const adminUser = await prisma.user.findUnique({
      where: { email: 'admin@jetpark.com' }
    });
    
    if (adminUser) {
      console.log(`✅ Usuário encontrado: ${adminUser.email}`);
      console.log(`📝 Hash da senha: ${adminUser.password}`);
      
      const isValidPassword = await bcrypt.compare('admin123', adminUser.password);
      console.log(`🔑 Senha válida: ${isValidPassword ? '✅ SIM' : '❌ NÃO'}`);
      
      if (!isValidPassword) {
        console.log('\n🔧 Testando outras senhas possíveis...');
        const testPasswords = ['admin', '123456', 'jetpark', 'admin@123'];
        for (const testPass of testPasswords) {
          const isValid = await bcrypt.compare(testPass, adminUser.password);
          console.log(`🔑 Senha "${testPass}": ${isValid ? '✅ VÁLIDA' : '❌ Inválida'}`);
          if (isValid) break;
        }
      }
    } else {
      console.log('❌ Usuário admin@jetpark.com não encontrado');
    }
    
    // Testar com admin@sistema.com também
    console.log('\n🔐 Testando login admin@sistema.com...');
    const adminSistema = await prisma.user.findUnique({
      where: { email: 'admin@sistema.com' }
    });
    
    if (adminSistema) {
      console.log(`✅ Usuário encontrado: ${adminSistema.email}`);
      const isValidPassword = await bcrypt.compare('admin123', adminSistema.password);
      console.log(`🔑 Senha "admin123" válida: ${isValidPassword ? '✅ SIM' : '❌ NÃO'}`);
    }
    
  } catch (error) {
    console.error('❌ Erro:', error.message);
  } finally {
    await prisma.$disconnect();
  }
}

testLogin();
