"use client"

import { useSession, signOut } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { Home, LogOut, Menu } from "lucide-react"
import Link from "next/link"

interface PageHeaderProps {
  title: string
  showHomeButton?: boolean
  onMenuClick?: () => void
}

export function PageHeader({ title, showHomeButton = true, onMenuClick }: PageHeaderProps) {
  const { data: session } = useSession()

  return (
    <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-30 shadow-sm">
      <div className="px-4 py-1.5 sm:py-2 lg:py-2.5">
        <div className="flex items-center justify-between max-w-full">
          <div className="flex items-center space-x-2 sm:space-x-4 min-w-0 flex-1">
            {/* Menu Hamburguer - apenas mobile */}
            {onMenuClick && (
              <Button
                variant="ghost"
                size="sm"
                onClick={onMenuClick}
                className="lg:hidden p-2 shrink-0"
                aria-label="Abrir menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            )}
            
            {/* Botão Home - apenas se não tiver sidebar */}
            {showHomeButton && !onMenuClick && (
              <Link href="/dashboard">
                <Button variant="ghost" size="sm" className="gap-2 hidden sm:flex shrink-0">
                  <Home className="h-4 w-4" />
                  <span className="hidden sm:inline">Home</span>
                </Button>
              </Link>
            )}
            
            <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground truncate min-w-0">
              {title}
            </h1>
          </div>
          
          <div className="flex items-center space-x-2 sm:space-x-4 shrink-0">
            <span className="text-xs sm:text-sm text-muted-foreground hidden sm:block truncate max-w-32 lg:max-w-none">
              Olá, {session?.user?.name || session?.user?.email}
            </span>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => signOut({ callbackUrl: '/login' })}
              className="gap-1 sm:gap-2 px-2 sm:px-3 shrink-0"
            >
              <LogOut className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="hidden sm:inline">Sair</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
