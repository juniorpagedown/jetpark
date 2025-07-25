import NextAuth from "next-auth"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { prisma } from "@/lib/prisma"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"
import bcrypt from "bcryptjs"
import { ensureDefaultUsers } from "@/lib/ensure-users"

const handler = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) {
          console.log('❌ Credenciais ausentes')
          return null
        }

        console.log('🔍 Tentando autenticar:', credentials.username)

        try {
          // Garantir que os usuários padrão existam
          await ensureDefaultUsers()

          // Primeiro, tentar buscar por username
          let user = null
          
          try {
            user = await prisma.user.findFirst({
              where: {
                username: credentials.username
              },
              select: {
                id: true,
                email: true,
                username: true,
                name: true,
                role: true,
                password: true
              }
            })
            console.log('🔍 Busca por username:', user ? 'Encontrado' : 'Não encontrado')
          } catch (usernameError) {
            console.log('⚠️  Erro ao buscar por username (campo pode não existir):', usernameError.message)
            
            // Se falhar, tentar buscar apenas por email
            try {
              user = await prisma.user.findFirst({
                where: {
                  email: credentials.username
                },
                select: {
                  id: true,
                  email: true,
                  name: true,
                  role: true,
                  password: true
                }
              })
              console.log('🔍 Busca por email como fallback:', user ? 'Encontrado' : 'Não encontrado')
            } catch (emailError) {
              console.log('❌ Erro ao buscar por email:', emailError.message)
            }
          }

          // Se não encontrou, tentar buscar por email se o input parecer um email
          if (!user && credentials.username.includes('@')) {
            try {
              user = await prisma.user.findFirst({
                where: {
                  email: credentials.username
                },
                select: {
                  id: true,
                  email: true,
                  name: true,
                  role: true,
                  password: true
                }
              })
              console.log('🔍 Busca adicional por email:', user ? 'Encontrado' : 'Não encontrado')
            } catch (error) {
              console.log('❌ Erro na busca adicional por email:', error.message)
            }
          }

          console.log('👤 Usuário final encontrado:', user ? 'Sim' : 'Não')

          if (!user || !user.password) {
            console.log('❌ Usuário não encontrado ou sem senha')
            return null
          }

          // Verificar se a senha está correta
          const isPasswordValid = await bcrypt.compare(credentials.password, user.password)
          
          console.log('🔑 Senha válida:', isPasswordValid ? 'Sim' : 'Não')

          if (!isPasswordValid) {
            console.log('❌ Senha incorreta')
            return null
          }

          console.log('✅ Autenticação bem-sucedida')
          return {
            id: user.id,
            email: user.email,
            name: user.name,
            role: user.role,
          }
        } catch (error) {
          console.error('❌ Erro geral na autenticação:', error)
          return null
        }
      }
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role
      }
      return token
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.sub!
        session.user.role = token.role
      }
      return session
    },
  },
  pages: {
    signIn: "/login",
  },
})

export { handler as GET, handler as POST }