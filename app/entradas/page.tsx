"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Search, UserPlus, Clock, DollarSign, Users } from "lucide-react"

interface Visitante {
  id: string
  nome: string
  documento: string
  entrada: string
  saida?: string
  pagou: boolean
  valor?: number
  status: 'PRESENTE' | 'SAIU'
}

export default function EntradasPage() {
  const [visitantes, setVisitantes] = useState<Visitante[]>([
    {
      id: '1',
      nome: 'João Silva',
      documento: '123.456.789-00',
      entrada: '14:30',
      pagou: true,
      valor: 25.00,
      status: 'PRESENTE'
    },
    {
      id: '2',
      nome: 'Maria Santos',
      documento: '987.654.321-00',
      entrada: '15:15',
      pagou: true,
      valor: 25.00,
      status: 'PRESENTE'
    },
    {
      id: '3',
      nome: 'Pedro Costa',
      documento: '456.789.123-00',
      entrada: '13:45',
      saida: '16:30',
      pagou: true,
      valor: 25.00,
      status: 'SAIU'
    },
    {
      id: '4',
      nome: 'Ana Oliveira',
      documento: '789.123.456-00',
      entrada: '16:00',
      pagou: false,
      status: 'PRESENTE'
    }
  ])

  const [searchTerm, setSearchTerm] = useState("")

  const filteredVisitantes = visitantes.filter(visitante =>
    visitante.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
    visitante.documento.includes(searchTerm)
  )

  const visitantesPresentes = visitantes.filter(v => v.status === 'PRESENTE')
  const totalArrecadado = visitantes
    .filter(v => v.pagou && v.valor)
    .reduce((acc, v) => acc + (v.valor || 0), 0)

  const registrarSaida = (id: string) => {
    setVisitantes(visitantes.map(v => 
      v.id === id 
        ? { ...v, status: 'SAIU' as const, saida: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }) }
        : v
    ))
  }

  const marcarPagamento = (id: string) => {
    setVisitantes(visitantes.map(v => 
      v.id === id 
        ? { ...v, pagou: true, valor: 25.00 }
        : v
    ))
  }

  return (
    <DashboardLayout title="Entrada de Visitantes">
      <div className="space-y-6">
        {/* Botão de Nova Entrada */}
        <div className="flex justify-end">
          <Button className="w-full sm:w-auto">
            <UserPlus className="h-4 w-4 mr-2" />
            Registrar Entrada
          </Button>
        </div>

        {/* Resumo - Grid Responsivo */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Visitantes Presentes</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{visitantesPresentes.length}</div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Hoje</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{visitantes.length}</div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Arrecadado Hoje</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">R$ {totalArrecadado.toFixed(2)}</div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pendentes Pagamento</CardTitle>
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {visitantes.filter(v => !v.pagou && v.status === 'PRESENTE').length}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Busca */}
        <div className="w-full">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Buscar por nome ou documento..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-full"
            />
          </div>
        </div>

        {/* Lista de Visitantes */}
        <div className="space-y-4">
          {filteredVisitantes.map((visitante) => (
            <Card key={visitante.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-4 sm:p-6">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{visitante.nome}</h3>
                      <p className="text-sm text-muted-foreground">
                        {visitante.documento}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge 
                        variant={visitante.status === 'PRESENTE' ? 'default' : 'secondary'}
                        className="w-fit"
                      >
                        {visitante.status === 'PRESENTE' ? 'Presente' : 'Saiu'}
                      </Badge>
                      {!visitante.pagou && visitante.status === 'PRESENTE' && (
                        <Badge variant="destructive" className="w-fit">
                          Pagamento Pendente
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                    <div className="grid grid-cols-2 sm:flex sm:gap-6 text-center sm:text-right">
                      <div>
                        <p className="text-sm text-muted-foreground">Entrada</p>
                        <p className="font-semibold">{visitante.entrada}</p>
                      </div>
                      
                      {visitante.saida && (
                        <div>
                          <p className="text-sm text-muted-foreground">Saída</p>
                          <p className="font-semibold">{visitante.saida}</p>
                        </div>
                      )}

                      <div>
                        <p className="text-sm text-muted-foreground">Valor</p>
                        <p className="font-semibold">
                          {visitante.valor ? `R$ ${visitante.valor.toFixed(2)}` : 'Não pago'}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-2">
                      {visitante.status === 'PRESENTE' && (
                        <>
                          {!visitante.pagou && (
                            <Button 
                              variant="outline" 
                              size="sm"
                              className="w-full sm:w-auto"
                              onClick={() => marcarPagamento(visitante.id)}
                            >
                              Registrar Pagamento
                            </Button>
                          )}
                          <Button 
                            size="sm"
                            className="w-full sm:w-auto"
                            onClick={() => registrarSaida(visitante.id)}
                          >
                            Registrar Saída
                          </Button>
                        </>
                      )}
                      {visitante.status === 'SAIU' && (
                        <Button variant="outline" size="sm" className="w-full sm:w-auto">
                          Ver Histórico
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredVisitantes.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Nenhum visitante encontrado</p>
          </div>
        )}
      </div>
    </DashboardLayout>
  )
}