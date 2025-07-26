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
        total: 85.50,
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
      status: 'OCUPADA',
      comanda: {
        id: 'cmd-002',
        total: 125.00,
        tempoAbertura: '13:45'
      }
    },
    {
      id: '5',
      numero: 5,
      lugares: 2,
      status: 'LIVRE'
    },
    {
      id: '6',
      numero: 6,
      lugares: 8,
      status: 'OCUPADA',
      comanda: {
        id: 'cmd-003',
        total: 245.75,
        tempoAbertura: '12:15'
      }
    }
  ])

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
      {/* Botões de Ação */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" className="text-sm">
            Adicionar Mesa
          </Button>
          <Button className="text-sm">
            Nova Comanda
          </Button>
        </div>
      </div>
      {/* Resumo - Responsivo */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-6 lg:mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total de Mesas</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{mesas.length}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Mesas Livres</CardTitle>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {mesas.filter(m => m.status === 'LIVRE').length}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Mesas Ocupadas</CardTitle>
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {mesas.filter(m => m.status === 'OCUPADA').length}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Faturamento Ativo</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                R$ {mesas
                  .filter(m => m.comanda)
                  .reduce((acc, m) => acc + (m.comanda?.total || 0), 0)
                  .toFixed(2)}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Grid de Mesas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {mesas.map((mesa) => (
            <Card key={mesa.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Mesa {mesa.numero}</CardTitle>
                  <Badge 
                    variant="secondary" 
                    className={getStatusBadge(mesa.status)}
                  >
                    {getStatusText(mesa.status)}
                  </Badge>
                </div>
                <CardDescription className="flex items-center space-x-2">
                  <Users className="h-4 w-4" />
                  <span>{mesa.lugares} lugares</span>
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {mesa.comanda && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Comanda:</span>
                      <span className="font-medium">{mesa.comanda.id}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Total:</span>
                      <span className="font-medium">R$ {mesa.comanda.total.toFixed(2)}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>Aberta às:</span>
                      </span>
                      <span className="font-medium">{mesa.comanda.tempoAbertura}</span>
                    </div>
                  </div>
                )}

                <div className="flex space-x-2">
                  {mesa.status === 'LIVRE' && (
                    <Button size="sm" className="flex-1">
                      Abrir Comanda
                    </Button>
                  )}
                  
                  {mesa.status === 'OCUPADA' && (
                    <>
                      <Button size="sm" variant="outline" className="flex-1">
                        Ver Comanda
                      </Button>
                      <Button size="sm" variant="destructive">
                        Fechar
                      </Button>
                    </>
                  )}
                  
                  {mesa.status === 'RESERVADA' && (
                    <Button size="sm" variant="outline" className="flex-1">
                      Ver Reserva
                    </Button>
                  )}
                </div>

                <Button 
                  size="sm" 
                  variant="ghost" 
                  className="w-full flex items-center space-x-2"
                >
                  <QrCode className="h-4 w-4" />
                  <span>QR Code</span>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
    </DashboardLayout>
  )
}