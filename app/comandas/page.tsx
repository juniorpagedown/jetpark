"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, Clock, DollarSign, CreditCard, Receipt } from "lucide-react"
import { DashboardLayout } from "@/components/dashboard-layout"

interface Comanda {
  id: string
  mesa: number
  cliente?: string
  status: 'ABERTA' | 'FECHADA'
  total: number
  itens: number
  tempoAbertura: string
  tempoPedido?: string
}

export default function ComandasPage() {
  const [comandas] = useState<Comanda[]>([
    {
      id: 'CMD-001',
      mesa: 2,
      cliente: 'João Silva',
      status: 'ABERTA',
      total: 85.50,
      itens: 4,
      tempoAbertura: '14:30',
      tempoPedido: '15:45'
    },
    {
      id: 'CMD-002',
      mesa: 4,
      status: 'ABERTA',
      total: 125.00,
      itens: 6,
      tempoAbertura: '13:45',
      tempoPedido: '14:20'
    },
    {
      id: 'CMD-003',
      mesa: 6,
      cliente: 'Maria Santos',
      status: 'ABERTA',
      total: 245.75,
      itens: 8,
      tempoAbertura: '12:15',
      tempoPedido: '13:30'
    },
    {
      id: 'CMD-004',
      mesa: 1,
      status: 'FECHADA',
      total: 67.80,
      itens: 3,
      tempoAbertura: '11:30',
      tempoPedido: '12:15'
    }
  ])

  const [searchTerm, setSearchTerm] = useState("")

  const filteredComandas = comandas.filter(comanda =>
    comanda.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    comanda.mesa.toString().includes(searchTerm) ||
    (comanda.cliente && comanda.cliente.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  const comandasAbertas = comandas.filter(c => c.status === 'ABERTA')
  const totalFaturamento = comandasAbertas.reduce((acc, c) => acc + c.total, 0)

  const actions = (
    <Button>
      Nova Comanda
    </Button>
  )

  return (
    <DashboardLayout title="Gerenciamento de Comandas" actions={actions}>
      <div className="space-y-8">
        {/* Resumo */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Comandas Abertas</CardTitle>
              <Receipt className="h-4 w-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{comandasAbertas.length}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Faturamento Ativo</CardTitle>
              <DollarSign className="h-4 w-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">R$ {totalFaturamento.toFixed(2)}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Ticket Médio</CardTitle>
              <CreditCard className="h-4 w-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                R$ {comandasAbertas.length > 0 ? (totalFaturamento / comandasAbertas.length).toFixed(2) : '0.00'}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Tempo Médio</CardTitle>
              <Clock className="h-4 w-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1h 25m</div>
            </CardContent>
          </Card>
        </div>

        {/* Busca */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
          <Input
            placeholder="Buscar por comanda, mesa ou cliente..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Lista de Comandas */}
        <div className="space-y-4">
          {filteredComandas.map((comanda) => (
            <Card key={comanda.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div>
                      <h3 className="font-semibold text-lg">{comanda.id}</h3>
                      <p className="text-sm text-gray-600">
                        Mesa {comanda.mesa} {comanda.cliente && `• ${comanda.cliente}`}
                      </p>
                    </div>
                    <Badge 
                      variant={comanda.status === 'ABERTA' ? 'default' : 'secondary'}
                    >
                      {comanda.status}
                    </Badge>
                  </div>

                  <div className="flex items-center space-x-6">
                    <div className="text-right">
                      <p className="text-sm text-gray-600">Total</p>
                      <p className="font-semibold text-lg">R$ {comanda.total.toFixed(2)}</p>
                    </div>
                    
                    <div className="text-right">
                      <p className="text-sm text-gray-600">Itens</p>
                      <p className="font-semibold">{comanda.itens}</p>
                    </div>

                    <div className="text-right">
                      <p className="text-sm text-gray-600">Aberta às</p>
                      <p className="font-semibold">{comanda.tempoAbertura}</p>
                    </div>

                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        Ver Detalhes
                      </Button>
                      {comanda.status === 'ABERTA' && (
                        <>
                          <Button variant="outline" size="sm">
                            Adicionar Item
                          </Button>
                          <Button size="sm">
                            Fechar Comanda
                          </Button>
                        </>
                      )}
                      {comanda.status === 'FECHADA' && (
                        <Button variant="outline" size="sm">
                          Reimprimir
                        </Button>
                      )}
                    </div>
                  </div>
                </div>

                {comanda.tempoPedido && (
                  <div className="mt-4 pt-4 border-t">
                    <p className="text-sm text-gray-600">
                      Último pedido às {comanda.tempoPedido}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredComandas.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">Nenhuma comanda encontrada</p>
          </div>
        )}
      </div>
    </DashboardLayout>
  )
}