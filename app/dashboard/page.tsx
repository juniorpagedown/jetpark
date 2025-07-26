"use client"

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { DashboardLayout } from "@/components/dashboard-layout"
import { 
  Users, 
  UtensilsCrossed, 
  Bed, 
  DollarSign, 
  Clock, 
  CheckCircle,
  AlertCircle,
  TrendingUp,
  ArrowUp,
  ArrowDown
} from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login")
    }
  }, [status, router])

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Carregando...</p>
        </div>
      </div>
    )
  }

  if (!session) {
    return null
  }

  return (
    <DashboardLayout title="Dashboard">
      {/* Métricas Principais */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 lg:mb-8">
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Receita Hoje</CardTitle>
            <DollarSign className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-xl sm:text-2xl font-bold text-gray-900">R$ 2.450,00</div>
            <div className="flex items-center mt-1">
              <ArrowUp className="h-3 w-3 text-green-600 mr-1" />
              <p className="text-xs text-green-600 font-medium">
                +12% vs ontem
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Pedidos Ativos</CardTitle>
            <Clock className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-xl sm:text-2xl font-bold text-gray-900">12</div>
            <p className="text-xs text-gray-500 mt-1">
              8 em preparo, 4 prontos
            </p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Ocupação Hotel</CardTitle>
            <Bed className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-xl sm:text-2xl font-bold text-gray-900">85%</div>
            <p className="text-xs text-gray-500 mt-1">
              17 de 20 quartos ocupados
            </p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Visitantes Clube</CardTitle>
            <Users className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-xl sm:text-2xl font-bold text-gray-900">45</div>
            <p className="text-xs text-gray-500 mt-1">
              Presentes no momento
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Menu de Acesso Rápido */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 mb-6 lg:mb-8">
        <Card className="hover:shadow-lg transition-all duration-200 hover:scale-[1.02]">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center space-x-2 text-lg">
              <div className="p-2 bg-orange-100 rounded-lg">
                <UtensilsCrossed className="h-5 w-5 text-orange-600" />
              </div>
              <span>Restaurante</span>
            </CardTitle>
            <CardDescription className="text-sm">
              Gerencie mesas, comandas e pedidos
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 pt-0">
            <Link href="/mesas" className="block">
              <Button variant="outline" className="w-full justify-start text-sm hover:bg-orange-50">
                Controle de Mesas
              </Button>
            </Link>
            <Link href="/comandas" className="block">
              <Button variant="outline" className="w-full justify-start text-sm hover:bg-orange-50">
                Comandas
              </Button>
            </Link>
            <Link href="/cozinha" className="block">
              <Button variant="outline" className="w-full justify-start text-sm hover:bg-orange-50">
                Cozinha (KDS)
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-all duration-200 hover:scale-[1.02]">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center space-x-2 text-lg">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Users className="h-5 w-5 text-purple-600" />
              </div>
              <span>Clube</span>
            </CardTitle>
            <CardDescription className="text-sm">
              Controle de entrada e visitantes
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 pt-0">
            <Link href="/entradas" className="block">
              <Button variant="outline" className="w-full justify-start text-sm hover:bg-purple-50">
                Entrada de Visitantes
              </Button>
            </Link>
            <Button variant="outline" className="w-full justify-start text-sm hover:bg-purple-50">
              Relatórios de Acesso
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-all duration-200 hover:scale-[1.02] md:col-span-2 xl:col-span-1">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center space-x-2 text-lg">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Bed className="h-5 w-5 text-blue-600" />
              </div>
              <span>Hotel</span>
            </CardTitle>
            <CardDescription className="text-sm">
              Hospedagem, reservas e quartos
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 pt-0">
            <Link href="/hospedagem" className="block">
              <Button variant="outline" className="w-full justify-start text-sm hover:bg-blue-50">
                Gerenciar Quartos
              </Button>
            </Link>
            <Link href="/reservas" className="block">
              <Button variant="outline" className="w-full justify-start text-sm hover:bg-blue-50">
                Reservas
              </Button>
            </Link>
            <Link href="/hospedes" className="block">
              <Button variant="outline" className="w-full justify-start text-sm hover:bg-blue-50">
                Hóspedes
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      {/* Atividades Recentes */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">Pedidos Recentes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { status: 'yellow', mesa: 5, pedido: '#1234', itens: '2 pratos principais, 1 sobremesa', tempo: '5 min' },
                { status: 'green', mesa: 3, pedido: '#1233', itens: '1 entrada, 2 bebidas', tempo: '12 min' },
                { status: 'blue', mesa: 8, pedido: '#1232', itens: '3 pratos principais', tempo: '18 min' }
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className={`w-2 h-2 rounded-full ${
                    item.status === 'yellow' ? 'bg-yellow-500' :
                    item.status === 'green' ? 'bg-green-500' : 'bg-blue-500'
                  }`}></div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      Mesa {item.mesa} - Pedido {item.pedido}
                    </p>
                    <p className="text-xs text-gray-500 truncate">
                      {item.itens}
                    </p>
                  </div>
                  <span className="text-xs text-gray-400 flex-shrink-0">
                    {item.tempo}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">Status dos Quartos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { label: 'Quartos Livres', value: 3, color: 'text-green-600', bg: 'bg-green-100' },
                { label: 'Quartos Ocupados', value: 17, color: 'text-blue-600', bg: 'bg-blue-100' },
                { label: 'Check-outs Hoje', value: 5, color: 'text-orange-600', bg: 'bg-orange-100' },
                { label: 'Check-ins Hoje', value: 7, color: 'text-purple-600', bg: 'bg-purple-100' }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 transition-colors">
                  <span className="text-sm text-gray-700">{item.label}</span>
                  <div className={`${item.bg} ${item.color} px-2 py-1 rounded-full`}>
                    <span className="text-sm font-medium">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}