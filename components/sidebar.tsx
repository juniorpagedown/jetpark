"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { 
  Home, 
  UtensilsCrossed, 
  Users, 
  Bed, 
  Clock,
  DollarSign,
  ChefHat,
  CalendarDays,
  UserCheck,
  Menu,
  X
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

const menuItems = [
  { 
    title: "Dashboard", 
    href: "/dashboard", 
    icon: Home 
  },
  { 
    title: "Mesas", 
    href: "/mesas", 
    icon: UtensilsCrossed 
  },
  { 
    title: "Comandas", 
    href: "/comandas", 
    icon: Clock 
  },
  { 
    title: "Cozinha", 
    href: "/cozinha", 
    icon: ChefHat 
  },
  { 
    title: "Entradas", 
    href: "/entradas", 
    icon: UserCheck 
  },
  { 
    title: "Hospedagem", 
    href: "/hospedagem", 
    icon: Bed 
  },
  { 
    title: "Reservas", 
    href: "/reservas", 
    icon: CalendarDays 
  },
  { 
    title: "Hóspedes", 
    href: "/hospedes", 
    icon: Users 
  }
]

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname()

  return (
    <>
      {/* Sidebar */}
      <aside className={`
        fixed top-0 left-0 z-50 h-full w-64 bg-white border-r border-gray-200 
        transform transition-transform duration-300 ease-in-out
        lg:translate-x-0 lg:static lg:z-0
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        {/* Header da Sidebar */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 lg:justify-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">JP</span>
            </div>
            <span className="font-bold text-lg text-foreground">JetPark</span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="lg:hidden"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Menu de Navegação */}
        <nav className="p-4 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={`
                  flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors
                  hover:bg-gray-100 active:bg-gray-200
                  ${isActive 
                    ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700' 
                    : 'text-gray-700 hover:text-gray-900'
                  }
                `}
              >
                <Icon className={`h-5 w-5 ${isActive ? 'text-blue-700' : 'text-gray-500'}`} />
                <span className="font-medium">{item.title}</span>
              </Link>
            )
          })}
        </nav>
      </aside>
    </>
  )
}
