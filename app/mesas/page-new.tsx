"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { DashboardLayout } from "@/components/dashboard-layout"
import { QrCode, Users, Clock, DollarSign } from "lucide-react"

interface Mesa {
  id: string
  numero: number
  lugares: number
  status: 'LIVRE' | 'OCUPADA' | 'RESERVADA'
  comanda?: {
    id: string
    total: number
    tempoAbertura: string
  }
}

export default function MesasPage() {
  const [mesas] = useState<Mesa[]>([
    {
      id: '1',
      numero: 1,
      lugares: 4,
      status: 'LIVRE'
    },
    {
      id: '2',
      numero: 2,
      lugares: 2,
      status: 'OCUPADA',
      comanda: {
        id: 'cmd-001',
        total: 125.50,
        tempoAbertura: '14:30'
      }
    },
    {
      id: '3',
      numero: 3,
      lugares: 6,
      status: 'RESERVADA'
    },
    {
      id: '4',
      numero: 4,
      lugares: 4,
      status: 'LIVRE'
    },
    {
      id: '5',
      numero: 5,
      lugares: 8,
      status: 'OCUPADA',
      comanda: {
        id: 'cmd-002',
        total: 89.25,
        tempoAbertura: '13:45'
      }
    },
    {
      id: '6',
      numero: 6,
      lugares: 2,
      status: 'LIVRE'
    }
  ])

  const mesasLivres = mesas.filter(m => m.status === 'LIVRE').length
  const mesasOcupadas = mesas.filter(m => m.status === 'OCUPADA').length
  const receitaTotal = mesas
    .filter(m => m.comanda)
    .reduce((acc, m) => acc + (m.comanda?.total || 0), 0)

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'LIVRE':
        return 'bg-green-600 text-white hover:bg-green-700'
      case 'OCUPADA':
        return 'bg-red-600 text-white hover:bg-red-700'
      case 'RESERVADA':
        return 'bg-yellow-600 text-white hover:bg-yellow-700'
      default:
        return 'bg-gray-600 text-white hover:bg-gray-700'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'LIVRE':
        return 'Livre'
      case 'OCUPADA':
        return 'Ocupada'
      case 'RESERVADA':
        return 'Reservada'
      default:
        return status
    }
  }

  return (
    <DashboardLayout title="Controle de Mesas">
      <div className="space-y-6">
        {/* Botões de Ação */}
        <div className="flex flex-col sm:flex-row justify-end gap-2 sm:gap-4">
          <Button variant="outline" className="w-full sm:w-auto">
            Adicionar Mesa
          </Button>
          <Button className="w-full sm:w-auto">
            Nova Comanda
          </Button>
        </div>

        {/* Resumo - Grid Responsivo */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total de Mesas</CardTitle>
              <QrCode className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{mesas.length}</div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Mesas Livres</CardTitle>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{mesasLivres}</div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Mesas Ocupadas</CardTitle>
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{mesasOcupadas}</div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Receita Ativa</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">R$ {receitaTotal.toFixed(2)}</div>
            </CardContent>
          </Card>
        </div>

        {/* Grid de Mesas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
          {mesas.map((mesa) => (
            <Card 
              key={mesa.id} 
              className={`hover:shadow-lg transition-all duration-200 cursor-pointer border-2 ${
                mesa.status === 'LIVRE' ? 'hover:border-green-200' :
                mesa.status === 'OCUPADA' ? 'hover:border-red-200' :
                'hover:border-yellow-200'
              }`}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-bold">
                    Mesa {mesa.numero}
                  </CardTitle>
                  <Badge className={`px-2 py-1 text-xs font-medium ${getStatusBadge(mesa.status)}`}>
                    {getStatusText(mesa.status)}
                  </Badge>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Users className="h-4 w-4 mr-1" />
                  <span>{mesa.lugares} lugares</span>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0 space-y-3">
                {mesa.comanda && (
                  <div className="bg-slate-50 p-3 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-slate-700">
                        Comanda: {mesa.comanda.id}
                      </span>
                      <span className="text-sm text-slate-600 flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {mesa.comanda.tempoAbertura}
                      </span>
                    </div>
                    <div className="text-lg font-bold text-green-600">
                      R$ {mesa.comanda.total.toFixed(2)}
                    </div>
                  </div>
                )}
                
                <div className="flex flex-col gap-2">
                  {mesa.status === 'LIVRE' && (
                    <Button size="sm" className="w-full">
                      Ocupar Mesa
                    </Button>
                  )}
                  
                  {mesa.status === 'OCUPADA' && (
                    <>
                      <Button size="sm" className="w-full">
                        Ver Comanda
                      </Button>
                      <Button variant="outline" size="sm" className="w-full">
                        Fechar Mesa
                      </Button>
                    </>
                  )}
                  
                  {mesa.status === 'RESERVADA' && (
                    <Button variant="outline" size="sm" className="w-full">
                      Ver Reserva
                    </Button>
                  )}
                </div>

                <Button variant="ghost" size="sm" className="w-full flex items-center gap-2">
                  <QrCode className="h-4 w-4" />
                  <span>QR Code</span>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
}
