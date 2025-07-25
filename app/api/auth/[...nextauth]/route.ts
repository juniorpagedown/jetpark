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

        // Garantir que os usuários padrão existam
        await ensureDefaultUsers()

        // Buscar o usuário no banco de dados por username ou email
        const user = await prisma.user.findFirst({
          where: {
            OR: [
              { username: credentials.username },
              { email: credentials.username }
            ]
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

        console.log('👤 Usuário encontrado:', user ? 'Sim' : 'Não')

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