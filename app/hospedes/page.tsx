"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { PageHeader } from "@/components/page-header"
import { Search, UserPlus, Calendar, Phone, Mail } from "lucide-react"

interface Hospede {
    id: string
    nome: string
    documento: string
    telefone?: string
    email?: string
    endereco?: string
    ultimaEstadia: string
    totalEstadias: number
    valorGasto: number
    status: 'ATIVO' | 'INATIVO'
}

export default function HospedesPage() {
    const [hospedes] = useState<Hospede[]>([
        {
            id: '1',
            nome: 'João Silva',
            documento: '123.456.789-00',
            telefone: '(11) 99999-9999',
            email: 'joao@email.com',
            endereco: 'Rua das Flores, 123',
            ultimaEstadia: '24/01/2025',
            totalEstadias: 5,
            valorGasto: 2450.00,
            status: 'ATIVO'
        },
        {
            id: '2',
            nome: 'Maria Santos',
            documento: '987.654.321-00',
            telefone: '(11) 88888-8888',
            email: 'maria@email.com',
            ultimaEstadia: '20/01/2025',
            totalEstadias: 3,
            valorGasto: 1200.00,
            status: 'ATIVO'
        },
        {
            id: '3',
            nome: 'Pedro Costa',
            documento: '456.789.123-00',
            telefone: '(11) 77777-7777',
            ultimaEstadia: '15/12/2024',
            totalEstadias: 8,
            valorGasto: 4800.00,
            status: 'INATIVO'
        },
        {
            id: '4',
            nome: 'Ana Oliveira',
            documento: '789.123.456-00',
            email: 'ana@email.com',
            endereco: 'Av. Principal, 456',
            ultimaEstadia: '22/01/2025',
            totalEstadias: 2,
            valorGasto: 800.00,
            status: 'ATIVO'
        },
        {
            id: '5',
            nome: 'Carlos Ferreira',
            documento: '321.654.987-00',
            telefone: '(11) 66666-6666',
            email: 'carlos@email.com',
            ultimaEstadia: '10/01/2025',
            totalEstadias: 12,
            valorGasto: 7200.00,
            status: 'ATIVO'
        }
    ])

    const [searchTerm, setSearchTerm] = useState("")

    const filteredHospedes = hospedes.filter(hospede =>
        hospede.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
        hospede.documento.includes(searchTerm) ||
        (hospede.email && hospede.email.toLowerCase().includes(searchTerm.toLowerCase()))
    )

    const hospedesAtivos = hospedes.filter(h => h.status === 'ATIVO')
    const totalGasto = hospedes.reduce((acc, h) => acc + h.valorGasto, 0)

    return (
        <div className="min-h-screen bg-background">
            <PageHeader title="Cadastro de Hóspedes" />

            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-end mb-6">
                    <Button>
                        <UserPlus className="h-4 w-4 mr-2" />
                        Novo Hóspede
                    </Button>
                </div>
            </div>

            <main className="container mx-auto px-4 py-8">
                {/* Resumo */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Total de Hóspedes</CardTitle>
                            <UserPlus className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{hospedes.length}</div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Hóspedes Ativos</CardTitle>
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{hospedesAtivos.length}</div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Receita Total</CardTitle>
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">R$ {totalGasto.toFixed(2)}</div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Ticket Médio</CardTitle>
                            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">
                                R$ {hospedes.length > 0 ? (totalGasto / hospedes.length).toFixed(2) : '0.00'}
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Busca */}
                <div className="mb-6">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                        <Input
                            placeholder="Buscar por nome, documento ou email..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10"
                        />
                    </div>
                </div>

                {/* Lista de Hóspedes */}
                <div className="space-y-4">
                    {filteredHospedes.map((hospede) => (
                        <Card key={hospede.id} className="hover:shadow-md transition-shadow">
                            <CardContent className="p-6">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-4">
                                        <div>
                                            <h3 className="font-semibold text-lg">{hospede.nome}</h3>
                                            <p className="text-sm text-muted-foreground">
                                                {hospede.documento}
                                            </p>
                                            <div className="flex items-center space-x-4 mt-1">
                                                {hospede.telefone && (
                                                    <span className="text-sm text-muted-foreground flex items-center space-x-1">
                                                        <Phone className="h-3 w-3" />
                                                        <span>{hospede.telefone}</span>
                                                    </span>
                                                )}
                                                {hospede.email && (
                                                    <span className="text-sm text-muted-foreground flex items-center space-x-1">
                                                        <Mail className="h-3 w-3" />
                                                        <span>{hospede.email}</span>
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                        <Badge
                                            variant={hospede.status === 'ATIVO' ? 'default' : 'secondary'}
                                        >
                                            {hospede.status}
                                        </Badge>
                                    </div>

                                    <div className="flex items-center space-x-6">
                                        <div className="text-right">
                                            <p className="text-sm text-muted-foreground">Última Estadia</p>
                                            <p className="font-semibold">{hospede.ultimaEstadia}</p>
                                        </div>

                                        <div className="text-right">
                                            <p className="text-sm text-muted-foreground">Total Estadias</p>
                                            <p className="font-semibold">{hospede.totalEstadias}</p>
                                        </div>

                                        <div className="text-right">
                                            <p className="text-sm text-muted-foreground">Valor Gasto</p>
                                            <p className="font-semibold text-lg">R$ {hospede.valorGasto.toFixed(2)}</p>
                                        </div>

                                        <div className="flex space-x-2">
                                            <Button variant="outline" size="sm">
                                                Ver Histórico
                                            </Button>
                                            <Button variant="outline" size="sm">
                                                Editar
                                            </Button>
                                            <Button size="sm">
                                                Nova Reserva
                                            </Button>
                                        </div>
                                    </div>
                                </div>

                                {hospede.endereco && (
                                    <div className="mt-4 pt-4 border-t">
                                        <p className="text-sm text-muted-foreground">
                                            <strong>Endereço:</strong> {hospede.endereco}
                                        </p>
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {filteredHospedes.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-muted-foreground">Nenhum hóspede encontrado</p>
                    </div>
                )}
            </main>
        </div>
    )
}