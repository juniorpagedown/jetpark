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
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      {/* Conteúdo Principal */}
      <div className="lg:ml-64">
        {/* Header */}
        <PageHeader 
          title={title} 
          showHomeButton={false}
          onMenuClick={() => setSidebarOpen(true)} 
        />
        
        {/* Conteúdo */}
        <main className="p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  )
}
