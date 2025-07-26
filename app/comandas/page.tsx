"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Search, Clock, DollarSign, CreditCard, Receipt } from "lucide-react"

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

  return (
    <DashboardLayout title="Gerenciamento de Comandas">
      <div className="space-y-6">
        {/* Botão de Nova Comanda */}
        <div className="flex justify-end">
          <Button className="w-full sm:w-auto">
            Nova Comanda
          </Button>
        </div>

        {/* Resumo - Grid Responsivo */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Comandas Abertas</CardTitle>
              <Receipt className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{comandasAbertas.length}</div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Faturamento Ativo</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">R$ {totalFaturamento.toFixed(2)}</div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Ticket Médio</CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                R$ {comandasAbertas.length > 0 ? (totalFaturamento / comandasAbertas.length).toFixed(2) : '0.00'}
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Tempo Médio</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1h 25m</div>
            </CardContent>
          </Card>
        </div>

        {/* Busca */}
        <div className="w-full">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Buscar por comanda, mesa ou cliente..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-full"
            />
          </div>
        </div>

        {/* Lista de Comandas */}
        <div className="space-y-4">
          {filteredComandas.map((comanda) => (
            <Card key={comanda.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-4 sm:p-6">
                <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-lg truncate">{comanda.id}</h3>
                      <p className="text-sm text-muted-foreground truncate">
                        Mesa {comanda.mesa} {comanda.cliente && `• ${comanda.cliente}`}
                      </p>
                    </div>
                    <Badge 
                      variant={comanda.status === 'ABERTA' ? 'default' : 'secondary'}
                      className="w-fit shrink-0"
                    >
                      {comanda.status}
                    </Badge>
                  </div>

                  <div className="flex flex-col xl:flex-row gap-4 xl:gap-6">
                    <div className="grid grid-cols-3 gap-4 text-center xl:flex xl:gap-6 xl:text-right">
                      <div className="min-w-0">
                        <p className="text-sm text-muted-foreground">Total</p>
                        <p className="font-semibold text-lg truncate">R$ {comanda.total.toFixed(2)}</p>
                      </div>
                      
                      <div className="min-w-0">
                        <p className="text-sm text-muted-foreground">Itens</p>
                        <p className="font-semibold">{comanda.itens}</p>
                      </div>

                      <div className="min-w-0">
                        <p className="text-sm text-muted-foreground">Aberta às</p>
                        <p className="font-semibold">{comanda.tempoAbertura}</p>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-2 shrink-0">
                      <Button variant="outline" size="sm" className="w-full sm:w-auto">
                        Ver Detalhes
                      </Button>
                      {comanda.status === 'ABERTA' && (
                        <>
                          <Button variant="outline" size="sm" className="w-full sm:w-auto">
                            Adicionar Item
                          </Button>
                          <Button size="sm" className="w-full sm:w-auto">
                            Fechar Comanda
                          </Button>
                        </>
                      )}
                      {comanda.status === 'FECHADA' && (
                        <Button variant="outline" size="sm" className="w-full sm:w-auto">
                          Reimprimir
                        </Button>
                      )}
                    </div>
                  </div>
                </div>

                {comanda.tempoPedido && (
                  <div className="mt-4 pt-4 border-t">
                    <p className="text-sm text-muted-foreground">
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
            <p className="text-muted-foreground">Nenhuma comanda encontrada</p>
          </div>
        )}
      </div>
    </DashboardLayout>
  )
}