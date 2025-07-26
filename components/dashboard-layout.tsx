"use client"

import { useState } from 'react'
import { Sidebar } from './sidebar'
import { PageHeader } from './page-header'

interface DashboardLayoutProps {
  children: React.ReactNode
  title: string
}

export function DashboardLayout({ children, title }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      {/* Overlay para mobile quando sidebar está aberto */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden" 
          onClick={() => setSidebarOpen(false)}
        />
      )}
      
      {/* Conteúdo Principal */}
      <div className="lg:ml-64 min-h-screen">
        {/* Header */}
        <PageHeader 
          title={title} 
          showHomeButton={false}
          onMenuClick={() => setSidebarOpen(true)} 
        />
        
        {/* Conteúdo */}
        <main className="px-4 pt-1 pb-4 sm:px-6 sm:pt-2 sm:pb-6 lg:px-8 lg:pt-3 lg:pb-8 max-w-full">
          <div className="mx-auto max-w-7xl dashboard-content">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
