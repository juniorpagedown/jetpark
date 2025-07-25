# Design System - JetPark

## 📝 Atualização de Acessibilidade e Contraste

Este documento descreve as melhorias implementadas no sistema de design para garantir excelente legibilidade e acessibilidade em ambientes com fundo claro e escuro.

## 🎨 Paleta de Cores Atualizada

### Modo Claro (Light Mode)
- **Texto Principal**: `#111827` (gray-900) - Contraste AAA
- **Texto Secundário**: `#374151` (gray-700) - Contraste AA
- **Texto Mutado**: `#4B5563` (gray-600) - Para informações secundárias
- **Texto Desabilitado**: `#9CA3AF` (gray-400) - Para elementos inativos
- **Fundo Principal**: `#FFFFFF` (white)
- **Fundo Secundário**: `#F9FAFB` (gray-50)

### Modo Escuro (Dark Mode)
- **Texto Principal**: `#F9FAFB` (gray-50)
- **Texto Secundário**: `#E5E7EB` (gray-200)
- **Fundo Principal**: `#1F2937` (gray-800)
- **Fundo Secundário**: `#374151` (gray-700)

## 🔧 Componentes Atualizados

### Button
- **Padrão**: Fundo roxo (`#8B5CF6`) com texto branco
- **Outline**: Borda cinza (`#D1D5DB`) com texto escuro (`#111827`)
- **Secondary**: Fundo cinza claro (`#F3F4F6`) com texto escuro
- **Ghost**: Transparente com hover cinza claro
- **Destructive**: Fundo vermelho (`#DC2626`) com texto branco

### Card
- **Fundo**: Branco no modo claro, cinza escuro no modo escuro
- **Borda**: Cinza claro (`#E5E7EB`) no modo claro
- **Texto**: Contraste adequado garantido em ambos os modos

### Input
- **Fundo**: Branco no modo claro, cinza escuro no modo escuro
- **Borda**: Cinza (`#D1D5DB`) no modo claro
- **Placeholder**: Cinza médio (`#6B7280`) para contraste adequado
- **Focus**: Ring roxo (`#8B5CF6`) consistente

### Badge
- **Default**: Roxo com texto branco
- **Secondary**: Cinza claro com texto escuro
- **Success**: Verde com texto branco
- **Warning**: Amarelo com texto branco
- **Outline**: Borda com texto escuro/claro conforme o tema

## ✅ Padrões de Acessibilidade Implementados

### Contraste WCAG
- **AA Mínimo**: Razão de contraste de 4.5:1 para texto normal
- **AAA Preferido**: Razão de contraste de 7:1 quando possível
- **Texto Grande**: Razão de contraste de 3:1 para títulos (18pt+)

### Estados Interativos
- **Focus**: Ring visível em elementos focáveis
- **Hover**: Mudanças sutis de cor para feedback visual
- **Active**: Estados claramente diferenciados
- **Disabled**: Opacity reduzida (0.5) mantendo legibilidade

## 🚀 Classes Utilitárias Adicionadas

```css
/* Texto com contraste otimizado */
.text-primary { color: #111827; }
.text-secondary { color: #374151; }
.text-muted { color: #4B5563; }
.text-disabled { color: #9CA3AF; }

/* Botões com contraste garantido */
.btn-outline {
  background-color: transparent;
  color: #111827;
  border: 1px solid #D1D5DB;
}

.btn-outline:hover {
  background-color: #F9FAFB;
  border-color: #9CA3AF;
}
```

## 📋 Checklist de Problemas Corrigidos

### ✅ Problemas Identificados e Resolvidos:
- ❌ ~~Texto branco em fundos claros~~
- ❌ ~~Texto cinza muito claro (#f9f9f9, #eaeaea) em fundos brancos~~
- ❌ ~~Placeholders quase invisíveis~~
- ❌ ~~Links com contraste insuficiente~~
- ❌ ~~Botões outline com texto pouco visível~~

### ✅ Melhorias Implementadas:
- ✅ Tokens de cor com contraste WCAG AA/AAA
- ✅ Suporte completo ao modo escuro
- ✅ Estados de foco e hover visíveis
- ✅ Texto legível em todos os componentes
- ✅ Placeholders com contraste adequado
- ✅ Bordas e separadores visíveis

## 🎯 Diretrizes de Uso

### Para Desenvolvedores:
1. **Sempre use as classes utilitárias** definidas no sistema
2. **Teste em modo claro e escuro** antes de fazer deploy
3. **Verifique o contraste** com ferramentas como WebAIM
4. **Mantenha a hierarquia visual** usando os tokens corretos

### Tokens Recomendados:
- **Títulos**: `text-gray-900 dark:text-gray-100`
- **Subtítulos**: `text-gray-700 dark:text-gray-200`
- **Corpo de texto**: `text-gray-600 dark:text-gray-300`
- **Texto secundário**: `text-gray-500 dark:text-gray-400`

## 🔍 Ferramentas de Teste

Para validar a acessibilidade:
- **WebAIM Contrast Checker**: https://webaim.org/resources/contrastchecker/
- **Chrome DevTools**: Lighthouse Accessibility Audit
- **axe DevTools**: Extensão para testes automatizados

## 📚 Recursos Adicionais

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Tailwind CSS Dark Mode](https://tailwindcss.com/docs/dark-mode)
- [Color Universal Design](https://jfly.uni-koeln.de/color/)

---

**Última atualização**: 25 de julho de 2025
**Versão**: 2.0.0
**Status**: ✅ Implementado e testado
