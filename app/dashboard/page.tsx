"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Users, 
  UtensilsCrossed, 
  Bed, 
  DollarSign, 
  Clock, 
  CheckCircle,
  AlertCircle,
  TrendingUp
} from "lucide-react"
import Link from "next/link"
import { DashboardLayout } from "@/components/dashboard-layout"

export default function DashboardPage() {
  return (
    <DashboardLayout title="Dashboard">
      <div className="space-y-8">
        {/* Resumo Financeiro */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Receita Hoje</CardTitle>
              <DollarSign className="h-4 w-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">R$ 2.450,00</div>
              <p className="text-xs text-gray-600">
                +12% em relação a ontem
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pedidos Ativos</CardTitle>
              <Clock className="h-4 w-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-gray-600">
                8 em preparo, 4 prontos
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Ocupação Hotel</CardTitle>
              <Bed className="h-4 w-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">85%</div>
              <p className="text-xs text-gray-600">
                17 de 20 quartos ocupados
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Visitantes Clube</CardTitle>
              <Users className="h-4 w-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">45</div>
              <p className="text-xs text-gray-600">
                Presentes no momento
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Menu de Navegação */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <UtensilsCrossed className="h-5 w-5" />
                <span>Restaurante</span>
              </CardTitle>
              <CardDescription>
                Gerencie mesas, comandas e pedidos
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <Link href="/mesas">
                <Button variant="outline" className="w-full justify-start">
                  Controle de Mesas
                </Button>
              </Link>
              <Link href="/comandas">
                <Button variant="outline" className="w-full justify-start">
                  Comandas
                </Button>
              </Link>
              <Link href="/cozinha">
                <Button variant="outline" className="w-full justify-start">
                  Cozinha (KDS)
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="h-5 w-5" />
                <span>Clube</span>
              </CardTitle>
              <CardDescription>
                Controle de entrada e visitantes
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <Link href="/entradas">
                <Button variant="outline" className="w-full justify-start">
                  Entrada de Visitantes
                </Button>
              </Link>
              <Button variant="outline" className="w-full justify-start">
                Relatórios de Acesso
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Bed className="h-5 w-5" />
                <span>Hotel</span>
              </CardTitle>
              <CardDescription>
                Hospedagem, reservas e quartos
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <Link href="/hospedagem">
                <Button variant="outline" className="w-full justify-start">
                  Gerenciar Quartos
                </Button>
              </Link>
              <Link href="/reservas">
                <Button variant="outline" className="w-full justify-start">
                  Reservas
                </Button>
              </Link>
              <Link href="/hospedes">
                <Button variant="outline" className="w-full justify-start">
                  Hóspedes
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Atividades Recentes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Pedidos Recentes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Mesa 5 - Pedido #1234</p>
                    <p className="text-xs text-gray-600">2 pratos principais, 1 sobremesa</p>
                  </div>
                  <span className="text-sm text-gray-600">5 min</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Mesa 3 - Pedido #1233</p>
                    <p className="text-xs text-gray-600">1 entrada, 2 bebidas</p>
                  </div>
                  <span className="text-sm text-gray-600">12 min</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Mesa 8 - Pedido #1232</p>
                    <p className="text-xs text-gray-600">3 pratos principais</p>
                  </div>
                  <span className="text-sm text-gray-600">18 min</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Status dos Quartos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Quartos Livres</span>
                  <span className="text-sm font-medium text-green-600">3</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Quartos Ocupados</span>
                  <span className="text-sm font-medium text-blue-600">17</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Check-outs Hoje</span>
                  <span className="text-sm font-medium text-orange-600">5</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Check-ins Hoje</span>
                  <span className="text-sm font-medium text-purple-600">7</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}