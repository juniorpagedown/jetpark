"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Bed, Users, Calendar, DollarSign } from "lucide-react"

interface Quarto {
  id: string
  numero: string
  tipo: string
  capacidade: number
  preco: number
  status: 'LIVRE' | 'OCUPADO' | 'RESERVADO' | 'MANUTENCAO'
  hospede?: string
  checkIn?: string
  checkOut?: string
  comodidades: string[]
}

export default function HospedagemPage() {
  const [quartos] = useState<Quarto[]>([
    {
      id: '1',
      numero: '101',
      tipo: 'Standard',
      capacidade: 2,
      preco: 150.00,
      status: 'LIVRE',
      comodidades: ['Wi-Fi', 'TV', 'Ar Condicionado']
    },
    {
      id: '2',
      numero: '102',
      tipo: 'Standard',
      capacidade: 2,
      preco: 150.00,
      status: 'OCUPADO',
      hospede: 'João Silva',
      checkIn: '25/01/2025',
      checkOut: '27/01/2025',
      comodidades: ['Wi-Fi', 'TV', 'Ar Condicionado']
    },
    {
      id: '3',
      numero: '201',
      tipo: 'Deluxe',
      capacidade: 4,
      preco: 250.00,
      status: 'RESERVADO',
      hospede: 'Maria Santos',
      checkIn: '26/01/2025',
      checkOut: '28/01/2025',
      comodidades: ['Wi-Fi', 'TV', 'Ar Condicionado', 'Frigobar', 'Varanda']
    },
    {
      id: '4',
      numero: '202',
      tipo: 'Deluxe',
      capacidade: 4,
      preco: 250.00,
      status: 'OCUPADO',
      hospede: 'Pedro Costa',
      checkIn: '24/01/2025',
      checkOut: '26/01/2025',
      comodidades: ['Wi-Fi', 'TV', 'Ar Condicionado', 'Frigobar', 'Varanda']
    },
    {
      id: '5',
      numero: '301',
      tipo: 'Suíte',
      capacidade: 6,
      preco: 400.00,
      status: 'LIVRE',
      comodidades: ['Wi-Fi', 'TV', 'Ar Condicionado', 'Frigobar', 'Varanda', 'Jacuzzi']
    },
    {
      id: '6',
      numero: '302',
      tipo: 'Suíte',
      capacidade: 6,
      preco: 400.00,
      status: 'MANUTENCAO',
      comodidades: ['Wi-Fi', 'TV', 'Ar Condicionado', 'Frigobar', 'Varanda', 'Jacuzzi']
    }
  ])

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'LIVRE':
        return 'bg-green-500'
      case 'OCUPADO':
        return 'bg-red-500'
      case 'RESERVADO':
        return 'bg-yellow-500'
      case 'MANUTENCAO':
        return 'bg-gray-500'
      default:
        return 'bg-gray-500'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'LIVRE':
        return 'Livre'
      case 'OCUPADO':
        return 'Ocupado'
      case 'RESERVADO':
        return 'Reservado'
      case 'MANUTENCAO':
        return 'Manutenção'
      default:
        return status
    }
  }

  const quartosLivres = quartos.filter(q => q.status === 'LIVRE')
  const quartosOcupados = quartos.filter(q => q.status === 'OCUPADO')
  const quartosReservados = quartos.filter(q => q.status === 'RESERVADO')
  const taxaOcupacao = ((quartosOcupados.length + quartosReservados.length) / quartos.length) * 100

  return (
    <DashboardLayout title="Gerenciamento de Quartos">
      <div className="space-y-6">
        {/* Botões de ação */}
        <div className="flex flex-col sm:flex-row justify-end gap-2 sm:gap-4">
          <Button variant="outline" className="w-full sm:w-auto">
            Adicionar Quarto
          </Button>
          <Button className="w-full sm:w-auto">
            Nova Reserva
          </Button>
        </div>
        {/* Resumo - Grid Responsivo */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Taxa de Ocupação</CardTitle>
              <Bed className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{taxaOcupacao.toFixed(1)}%</div>
              <p className="text-xs text-muted-foreground">
                {quartosOcupados.length + quartosReservados.length} de {quartos.length} quartos
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Quartos Livres</CardTitle>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{quartosLivres.length}</div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Check-outs Hoje</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Receita Estimada</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                R$ {quartosOcupados.reduce((acc, q) => acc + q.preco, 0).toFixed(2)}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Grid de Quartos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
          {quartos.map((quarto) => (
            <Card key={quarto.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Quarto {quarto.numero}</CardTitle>
                  <Badge 
                    variant="secondary" 
                    className={`${getStatusColor(quarto.status)} text-white w-fit`}
                  >
                    {getStatusText(quarto.status)}
                  </Badge>
                </div>
                <CardDescription className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span>{quarto.tipo}</span>
                    <span className="font-medium">R$ {quarto.preco.toFixed(2)}/noite</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4" />
                    <span>Até {quarto.capacidade} pessoas</span>
                  </div>
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {quarto.hospede && (
                  <div className="space-y-2">
                    <div className="text-sm">
                      <strong>Hóspede:</strong> {quarto.hospede}
                    </div>
                    {quarto.checkIn && (
                      <div className="text-sm">
                        <strong>Check-in:</strong> {quarto.checkIn}
                      </div>
                    )}
                    {quarto.checkOut && (
                      <div className="text-sm">
                        <strong>Check-out:</strong> {quarto.checkOut}
                      </div>
                    )}
                  </div>
                )}

                <div>
                  <p className="text-sm font-medium mb-2">Comodidades:</p>
                  <div className="flex flex-wrap gap-1">
                    {quarto.comodidades.map((comodidade, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {comodidade}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-2">
                  {quarto.status === 'LIVRE' && (
                    <>
                      <Button size="sm" className="flex-1">
                        Reservar
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        Check-in
                      </Button>
                    </>
                  )}
                  
                  {quarto.status === 'OCUPADO' && (
                    <>
                      <Button size="sm" variant="outline" className="flex-1">
                        Ver Estadia
                      </Button>
                      <Button size="sm" variant="destructive" className="flex-1">
                        Check-out
                      </Button>
                    </>
                  )}
                  
                  {quarto.status === 'RESERVADO' && (
                    <>
                      <Button size="sm" variant="outline" className="flex-1">
                        Ver Reserva
                      </Button>
                      <Button size="sm" className="flex-1">
                        Check-in
                      </Button>
                    </>
                  )}

                  {quarto.status === 'MANUTENCAO' && (
                    <Button size="sm" variant="outline" className="w-full">
                      Finalizar Manutenção
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
}