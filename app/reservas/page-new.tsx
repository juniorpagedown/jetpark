"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Search, Calendar, Users, DollarSign, Clock } from "lucide-react"

interface Reserva {
  id: string
  quarto: string
  cliente: string
  checkIn: string
  checkOut: string
  valor: number
  status: 'CONFIRMADA' | 'CANCELADA' | 'FINALIZADA'
  noites: number
  hospedes: number
  observacoes?: string
}

export default function ReservasPage() {
  const [reservas] = useState<Reserva[]>([
    {
      id: 'RES-001',
      quarto: '201',
      cliente: 'Maria Santos',
      checkIn: '26/01/2025',
      checkOut: '28/01/2025',
      valor: 500.00,
      status: 'CONFIRMADA',
      noites: 2,
      hospedes: 2,
      observacoes: 'Chegada após 18h'
    },
    {
      id: 'RES-002',
      quarto: '301',
      cliente: 'Carlos Silva',
      checkIn: '28/01/2025',
      checkOut: '30/01/2025',
      valor: 800.00,
      status: 'CONFIRMADA',
      noites: 2,
      hospedes: 4
    },
    {
      id: 'RES-003',
      quarto: '102',
      cliente: 'Ana Costa',
      checkIn: '30/01/2025',
      checkOut: '02/02/2025',
      valor: 450.00,
      status: 'CONFIRMADA',
      noites: 3,
      hospedes: 2
    }
  ])

  const [searchTerm, setSearchTerm] = useState("")

  const filteredReservas = reservas.filter(reserva =>
    reserva.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    reserva.cliente.toLowerCase().includes(searchTerm.toLowerCase()) ||
    reserva.quarto.includes(searchTerm)
  )

  const reservasConfirmadas = reservas.filter(r => r.status === 'CONFIRMADA')
  const receitaTotal = reservasConfirmadas.reduce((acc, r) => acc + r.valor, 0)

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'CONFIRMADA':
        return 'bg-green-500'
      case 'CANCELADA':
        return 'bg-red-500'
      case 'FINALIZADA':
        return 'bg-gray-500'
      default:
        return 'bg-gray-500'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'CONFIRMADA':
        return 'Confirmada'
      case 'CANCELADA':
        return 'Cancelada'
      case 'FINALIZADA':
        return 'Finalizada'
      default:
        return status
    }
  }

  return (
    <DashboardLayout title="Controle de Reservas">
      <div className="space-y-6">
        {/* Botão de Nova Reserva */}
        <div className="flex justify-end">
          <Button className="w-full sm:w-auto">
            Nova Reserva
          </Button>
        </div>

        {/* Resumo - Grid Responsivo */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Reservas Ativas</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{reservasConfirmadas.length}</div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Check-ins Hoje</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2</div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Receita Prevista</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">R$ {receitaTotal.toFixed(2)}</div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Taxa Ocupação</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">85%</div>
            </CardContent>
          </Card>
        </div>

        {/* Busca */}
        <div className="w-full">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Buscar por ID, cliente ou quarto..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-full"
            />
          </div>
        </div>

        {/* Lista de Reservas */}
        <div className="space-y-4">
          {filteredReservas.map((reserva) => (
            <Card key={reserva.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-4 sm:p-6">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-lg">{reserva.id}</h3>
                        <Badge 
                          className={`${getStatusColor(reserva.status)} text-white w-fit`}
                        >
                          {getStatusText(reserva.status)}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-1">
                        <strong>Cliente:</strong> {reserva.cliente}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <strong>Quarto:</strong> {reserva.quarto} • <strong>Hóspedes:</strong> {reserva.hospedes}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                    <div className="grid grid-cols-2 sm:flex sm:gap-6 text-center sm:text-right">
                      <div>
                        <p className="text-sm text-muted-foreground">Check-in</p>
                        <p className="font-semibold">{reserva.checkIn}</p>
                      </div>
                      
                      <div>
                        <p className="text-sm text-muted-foreground">Check-out</p>
                        <p className="font-semibold">{reserva.checkOut}</p>
                      </div>

                      <div>
                        <p className="text-sm text-muted-foreground">Noites</p>
                        <p className="font-semibold">{reserva.noites}</p>
                      </div>

                      <div>
                        <p className="text-sm text-muted-foreground">Valor Total</p>
                        <p className="font-semibold text-lg">R$ {reserva.valor.toFixed(2)}</p>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-2">
                      <Button variant="outline" size="sm" className="w-full sm:w-auto">
                        Ver Detalhes
                      </Button>
                      <Button variant="outline" size="sm" className="w-full sm:w-auto">
                        Editar
                      </Button>
                      {reserva.status === 'CONFIRMADA' && (
                        <Button size="sm" className="w-full sm:w-auto">
                          Check-in
                        </Button>
                      )}
                    </div>
                  </div>
                </div>

                {reserva.observacoes && (
                  <div className="mt-4 pt-4 border-t">
                    <p className="text-sm text-muted-foreground">
                      <strong>Observações:</strong> {reserva.observacoes}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredReservas.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Nenhuma reserva encontrada</p>
          </div>
        )}
      </div>
    </DashboardLayout>
  )
}
