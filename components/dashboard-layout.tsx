"use client"

import { useSession, signOut } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface DashboardLayoutProps {
  children: React.ReactNode
  title: string
  actions?: React.ReactNode
}

export function DashboardLayout({ children, title, actions }: DashboardLayoutProps) {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login")
    }
  }, [status, router])

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Carregando...</p>
        </div>
      </div>
    )
  }

  if (!session) {
    return null
  }

  const handleSignOut = () => {
    signOut({ callbackUrl: "/login" })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header fixo */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/dashboard" className="text-xl font-bold text-gray-900 hover:text-purple-600">
                Sistema de Gestão
              </Link>
              <span className="text-gray-400">|</span>
              <h1 className="text-lg font-semibold text-gray-700">{title}</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              {actions}
              <div className="flex items-center space-x-3">
                <span className="text-sm text-gray-600">
                  Olá, {session.user?.name || session.user?.email}
                </span>
                <Button variant="outline" size="sm" onClick={handleSignOut}>
                  Sair
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Conteúdo principal com padding-top para compensar o header fixo */}
      <main className="pt-20 pb-8">
        <div className="container mx-auto px-4">
          {children}
        </div>
      </main>
    </div>
  )
}