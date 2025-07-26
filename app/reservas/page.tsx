"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { PageHeader } from "@/components/page-header"
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
    },
    {
      id: 'RES-004',
      quarto: '202',
      cliente: 'João Oliveira',
      checkIn: '25/01/2025',
      checkOut: '27/01/2025',
      valor: 500.00,
      status: 'FINALIZADA',
      noites: 2,
      hospedes: 3
    },
    {
      id: 'RES-005',
      quarto: '101',
      cliente: 'Pedro Santos',
      checkIn: '27/01/2025',
      checkOut: '29/01/2025',
      valor: 300.00,
      status: 'CANCELADA',
      noites: 2,
      hospedes: 1
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
    <div className="min-h-screen bg-background">
      <PageHeader title="Controle de Reservas" />

      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-end mb-6">
          <Button>
            Nova Reserva
          </Button>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8">
        {/* Resumo */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Reservas Ativas</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{reservasConfirmadas.length}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Check-ins Hoje</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Receita Prevista</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">R$ {receitaTotal.toFixed(2)}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Taxa de Ocupação</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">75%</div>
              <p className="text-xs text-muted-foreground">
                Próximos 30 dias
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Busca */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Buscar por reserva, cliente ou quarto..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Lista de Reservas */}
        <div className="space-y-4">
          {filteredReservas.map((reserva) => (
            <Card key={reserva.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div>
                      <h3 className="font-semibold text-lg">{reserva.id}</h3>
                      <p className="text-sm text-muted-foreground">
                        {reserva.cliente} • Quarto {reserva.quarto}
                      </p>
                    </div>
                    <Badge 
                      variant="secondary" 
                      className={`${getStatusColor(reserva.status)} text-white`}
                    >
                      {getStatusText(reserva.status)}
                    </Badge>
                  </div>

                  <div className="flex items-center space-x-6">
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">Check-in</p>
                      <p className="font-semibold">{reserva.checkIn}</p>
                    </div>
                    
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">Check-out</p>
                      <p className="font-semibold">{reserva.checkOut}</p>
                    </div>

                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">Hóspedes</p>
                      <p className="font-semibold">{reserva.hospedes}</p>
                    </div>

                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">Valor Total</p>
                      <p className="font-semibold text-lg">R$ {reserva.valor.toFixed(2)}</p>
                    </div>

                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        Ver Detalhes
                      </Button>
                      {reserva.status === 'CONFIRMADA' && (
                        <>
                          <Button variant="outline" size="sm">
                            Editar
                          </Button>
                          <Button size="sm">
                            Check-in
                          </Button>
                        </>
                      )}
                      {reserva.status === 'FINALIZADA' && (
                        <Button variant="outline" size="sm">
                          Reimprimir
                        </Button>
                      )}
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{reserva.noites} noite{reserva.noites > 1 ? 's' : ''}</span>
                    {reserva.observacoes && (
                      <span>Obs: {reserva.observacoes}</span>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredReservas.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Nenhuma reserva encontrada</p>
          </div>
        )}
      </main>
    </div>
  )
}