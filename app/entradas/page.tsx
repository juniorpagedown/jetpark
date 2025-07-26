"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { PageHeader } from "@/components/page-header"
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
    <div className="min-h-screen bg-background">
      <PageHeader title="Entrada de Visitantes" />

      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-end mb-6">
          <Button>
            <UserPlus className="h-4 w-4 mr-2" />
            Registrar Entrada
          </Button>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8">
        {/* Resumo */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Visitantes Presentes</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{visitantesPresentes.length}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Hoje</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{visitantes.length}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Arrecadado Hoje</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">R$ {totalArrecadado.toFixed(2)}</div>
            </CardContent>
          </Card>

          <Card>
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
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Buscar por nome ou documento..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Lista de Visitantes */}
        <div className="space-y-4">
          {filteredVisitantes.map((visitante) => (
            <Card key={visitante.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div>
                      <h3 className="font-semibold text-lg">{visitante.nome}</h3>
                      <p className="text-sm text-muted-foreground">
                        {visitante.documento}
                      </p>
                    </div>
                    <Badge 
                      variant={visitante.status === 'PRESENTE' ? 'default' : 'secondary'}
                    >
                      {visitante.status === 'PRESENTE' ? 'Presente' : 'Saiu'}
                    </Badge>
                    {!visitante.pagou && visitante.status === 'PRESENTE' && (
                      <Badge variant="destructive">
                        Pagamento Pendente
                      </Badge>
                    )}
                  </div>

                  <div className="flex items-center space-x-6">
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">Entrada</p>
                      <p className="font-semibold">{visitante.entrada}</p>
                    </div>
                    
                    {visitante.saida && (
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground">Saída</p>
                        <p className="font-semibold">{visitante.saida}</p>
                      </div>
                    )}

                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">Valor</p>
                      <p className="font-semibold">
                        {visitante.valor ? `R$ ${visitante.valor.toFixed(2)}` : 'Não pago'}
                      </p>
                    </div>

                    <div className="flex space-x-2">
                      {visitante.status === 'PRESENTE' && (
                        <>
                          {!visitante.pagou && (
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => marcarPagamento(visitante.id)}
                            >
                              Registrar Pagamento
                            </Button>
                          )}
                          <Button 
                            size="sm"
                            onClick={() => registrarSaida(visitante.id)}
                          >
                            Registrar Saída
                          </Button>
                        </>
                      )}
                      {visitante.status === 'SAIU' && (
                        <Button variant="outline" size="sm">
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
      </main>
    </div>
  )
}