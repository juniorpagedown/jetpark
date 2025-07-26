"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Clock, ChefHat, CheckCircle, AlertCircle } from "lucide-react"

interface ItemPedido {
  id: string
  produto: string
  quantidade: number
  observacao?: string
  mesa: number
  comanda: string
  tempo: string
  status: 'PENDENTE' | 'PREPARANDO' | 'PRONTO' | 'ENTREGUE'
  prioridade: 'NORMAL' | 'ALTA' | 'URGENTE'
}

export default function CozinhaPage() {
  const [pedidos, setPedidos] = useState<ItemPedido[]>([
    {
      id: '1',
      produto: 'Hambúrguer Artesanal',
      quantidade: 2,
      observacao: 'Sem cebola, ponto da carne mal passado',
      mesa: 5,
      comanda: 'CMD-001',
      tempo: '15:30',
      status: 'PENDENTE',
      prioridade: 'ALTA'
    },
    {
      id: '2',
      produto: 'Pizza Margherita',
      quantidade: 1,
      mesa: 3,
      comanda: 'CMD-002',
      tempo: '15:25',
      status: 'PREPARANDO',
      prioridade: 'NORMAL'
    },
    {
      id: '3',
      produto: 'Salada Caesar',
      quantidade: 1,
      observacao: 'Molho à parte',
      mesa: 8,
      comanda: 'CMD-003',
      tempo: '15:20',
      status: 'PRONTO',
      prioridade: 'NORMAL'
    },
    {
      id: '4',
      produto: 'Risotto de Camarão',
      quantidade: 1,
      mesa: 2,
      comanda: 'CMD-004',
      tempo: '15:15',
      status: 'PREPARANDO',
      prioridade: 'URGENTE'
    },
    {
      id: '5',
      produto: 'Filé à Parmegiana',
      quantidade: 2,
      mesa: 6,
      comanda: 'CMD-005',
      tempo: '15:35',
      status: 'PENDENTE',
      prioridade: 'NORMAL'
    }
  ])

  const updateStatus = (id: string, newStatus: ItemPedido['status']) => {
    setPedidos(pedidos.map(pedido => 
      pedido.id === id ? { ...pedido, status: newStatus } : pedido
    ))
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'PENDENTE':
        return 'bg-red-500'
      case 'PREPARANDO':
        return 'bg-yellow-500'
      case 'PRONTO':
        return 'bg-green-500'
      case 'ENTREGUE':
        return 'bg-gray-500'
      default:
        return 'bg-gray-500'
    }
  }

  const getPriorityColor = (prioridade: string) => {
    switch (prioridade) {
      case 'URGENTE':
        return 'border-red-500 bg-red-50'
      case 'ALTA':
        return 'border-orange-500 bg-orange-50'
      default:
        return 'border-gray-200'
    }
  }

  const pedidosPendentes = pedidos.filter(p => p.status === 'PENDENTE')
  const pedidosPreparando = pedidos.filter(p => p.status === 'PREPARANDO')
  const pedidosProntos = pedidos.filter(p => p.status === 'PRONTO')

  return (
    <DashboardLayout title="Cozinha - KDS">
      <div className="space-y-6">
        {/* Status dos pedidos */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
          <Badge variant="outline" className="text-red-600 text-sm px-4 py-2">
            {pedidosPendentes.length} Pendentes
          </Badge>
          <Badge variant="outline" className="text-yellow-600 text-sm px-4 py-2">
            {pedidosPreparando.length} Preparando
          </Badge>
          <Badge variant="outline" className="text-green-600 text-sm px-4 py-2">
            {pedidosProntos.length} Prontos
          </Badge>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Coluna Pendentes */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <h2 className="text-lg font-semibold">Pendentes ({pedidosPendentes.length})</h2>
            </div>
            <div className="space-y-4">
              {pedidosPendentes.map((pedido) => (
                <Card 
                  key={pedido.id} 
                  className={`${getPriorityColor(pedido.prioridade)} border-l-4`}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base">{pedido.produto}</CardTitle>
                      <Badge variant="secondary">
                        Mesa {pedido.mesa}
                      </Badge>
                    </div>
                    <CardDescription className="flex items-center space-x-4">
                      <span>Qtd: {pedido.quantidade}</span>
                      <span className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{pedido.tempo}</span>
                      </span>
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-3">
                    {pedido.observacao && (
                      <div className="bg-yellow-50 p-2 rounded text-sm">
                        <strong>Obs:</strong> {pedido.observacao}
                      </div>
                    )}
                    
                    <div className="text-xs text-muted-foreground">
                      Comanda: {pedido.comanda}
                    </div>
                    
                    <Button 
                      size="sm" 
                      className="w-full"
                      onClick={() => updateStatus(pedido.id, 'PREPARANDO')}
                    >
                      Iniciar Preparo
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Coluna Preparando */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <h2 className="text-lg font-semibold">Preparando ({pedidosPreparando.length})</h2>
            </div>
            <div className="space-y-4">
              {pedidosPreparando.map((pedido) => (
                <Card 
                  key={pedido.id} 
                  className={`${getPriorityColor(pedido.prioridade)} border-l-4`}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base">{pedido.produto}</CardTitle>
                      <Badge variant="secondary">
                        Mesa {pedido.mesa}
                      </Badge>
                    </div>
                    <CardDescription className="flex items-center space-x-4">
                      <span>Qtd: {pedido.quantidade}</span>
                      <span className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{pedido.tempo}</span>
                      </span>
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-3">
                    {pedido.observacao && (
                      <div className="bg-yellow-50 p-2 rounded text-sm">
                        <strong>Obs:</strong> {pedido.observacao}
                      </div>
                    )}
                    
                    <div className="text-xs text-muted-foreground">
                      Comanda: {pedido.comanda}
                    </div>
                    
                    <Button 
                      size="sm" 
                      className="w-full bg-green-600 hover:bg-green-700"
                      onClick={() => updateStatus(pedido.id, 'PRONTO')}
                    >
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Marcar como Pronto
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Coluna Prontos */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <h2 className="text-lg font-semibold">Prontos ({pedidosProntos.length})</h2>
            </div>
            <div className="space-y-4">
              {pedidosProntos.map((pedido) => (
                <Card 
                  key={pedido.id} 
                  className="border-l-4 border-green-500 bg-green-50"
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base">{pedido.produto}</CardTitle>
                      <Badge variant="secondary">
                        Mesa {pedido.mesa}
                      </Badge>
                    </div>
                    <CardDescription className="flex items-center space-x-4">
                      <span>Qtd: {pedido.quantidade}</span>
                      <span className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{pedido.tempo}</span>
                      </span>
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-3">
                    {pedido.observacao && (
                      <div className="bg-yellow-50 p-2 rounded text-sm">
                        <strong>Obs:</strong> {pedido.observacao}
                      </div>
                    )}
                    
                    <div className="text-xs text-muted-foreground">
                      Comanda: {pedido.comanda}
                    </div>
                    
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="w-full"
                      onClick={() => updateStatus(pedido.id, 'ENTREGUE')}
                    >
                      Marcar como Entregue
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}