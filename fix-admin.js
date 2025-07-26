const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const DATABASE_URL = "postgres://neondb_owner:npg_wsMBvL3bcj8u@ep-rapid-bird-adibyqye-pooler.c-2.us-east-1.aws.neon.tech/neondb?connect_timeout=15&sslmode=require";

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: DATABASE_URL
    }
  }
});

async function fixAdminUser() {
  try {
    console.log('🔧 Corrigindo usuário admin...');
    
    const hashedPassword = await bcrypt.hash('admin123', 12);
    
    // Garantir que admin@jetpark.com existe
    const adminJetpark = await prisma.user.upsert({
      where: { email: 'admin@jetpark.com' },
      update: {
        password: hashedPassword,
        role: 'ADMIN',
        name: 'Administrador Jetpark'
      },
      create: {
        email: 'admin@jetpark.com',
        username: 'admin',
        password: hashedPassword,
        role: 'ADMIN',
        name: 'Administrador Jetpark'
      }
    });
    
    console.log('✅ Usuário admin@jetpark.com criado/atualizado');
    console.log(`📧 Email: ${adminJetpark.email}`);
    console.log(`👤 Nome: ${adminJetpark.name}`);
    console.log(`🔑 Role: ${adminJetpark.role}`);
    
    // Testar a senha
    const testPassword = await bcrypt.compare('admin123', adminJetpark.password);
    console.log(`🔐 Senha "admin123" válida: ${testPassword ? '✅ SIM' : '❌ NÃO'}`);
    
    // Listar todos os admins
    console.log('\n📋 Todos os usuários ADMIN:');
    const admins = await prisma.user.findMany({
      where: { role: 'ADMIN' },
      select: {
        email: true,
        name: true,
        username: true
      }
    });
    
    admins.forEach(admin => {
      console.log(`👤 ${admin.email} (${admin.name || 'Sem nome'}) - username: ${admin.username || 'N/A'}`);
    });
    
  } catch (error) {
    console.error('❌ Erro:', error.message);
  } finally {
    await prisma.$disconnect();
  }
}

fixAdminUser();
