# Joaleria Transportes — Design do Site Institucional

**Data:** 2026-08-10  
**Projeto:** Landing page one-page institucional  
**Stack:** HTML + CSS + JavaScript puro (GitHub Pages)

---

## Contexto

A Joaleria Transportes é uma transportadora brasileira com 40 anos de atuação, operando em todo o Brasil. Atua principalmente como parceira logística dedicada da Suzano S.A. (maior produtora de celulose do mundo), transportando produtos de higiene e papel tissue (papel higiênico, papel toalha, guardanapos, etc.).

**Objetivos do site (em ordem de prioridade):**
1. Credibilidade institucional — solidez, confiabilidade, escala
2. Vitrine B2B — atrair embarcadores e parceiros logísticos
3. Recrutamento — motoristas e colaboradores operacionais

---

## Identidade Visual

### Paleta de Cores
```
--azul-profundo:  #0B2545   (nav, footer, hero background)
--azul-medio:     #1363DF   (acento principal, CTAs, links ativos)
--azul-claro:     #E8F0FE   (backgrounds de seções alternadas)
--branco:         #FFFFFF   (texto sobre escuro, backgrounds limpos)
--cinza-texto:    #4A5568   (corpo de texto sobre fundo claro)
--cinza-claro:    #F7F9FC   (backgrounds neutros)
--dourado-sutil:  #C9A844   (detalhe mínimo no hero, separadores)
```

### Tipografia
- Stack nativa: `'Segoe UI', system-ui, -apple-system, sans-serif`
- Títulos: peso 700–800, letter-spacing negativo (-0.02em)
- Corpo: peso 400, line-height 1.6
- Stats/contadores: peso 900, tamanho display (48–72px)
- Zero fontes externas — sem dependência de CDN

### Estilo Visual
- Direção: **Modern Logistics Blue** — institucional contemporâneo
- Hero: fundo `#0B2545` com padrão geométrico em CSS (linhas diagonais via `linear-gradient`)
- Ícones: SVG inline desenhados para cada serviço/diferencial
- Sem imagens externas — placeholders elegantes em CSS/SVG

---

## Estrutura da Página

### 1. Nav (fixa, topo)
- Logo à esquerda (texto estilizado "Joaleria Transportes")
- Links âncora: Sobre · Serviços · Diferenciais · Área de Atuação · Contato
- Botão CTA: "Fale Conosco" (acento azul)
- Comportamento: `backdrop-filter: blur(12px)` + sombra ao rolar
- Mobile: hambúrguer com menu drawer lateral

### 2. Hero
- Fundo: `#0B2545` + padrão geométrico diagonal em CSS
- Headline: "40 Anos Movendo o Brasil" (ou similar — forte, direto)
- Subtítulo: posicionamento da empresa em 2 linhas
- Linha dourada sutil abaixo da headline (separador decorativo)
- Dois botões: "Conheça a Empresa" + "Trabalhe Conosco"
- Sem imagem de fundo — todo em CSS

### 3. Números (contadores animados)
- 4 cards em grid: **40 Anos** · **Dezenas de Veículos** · **Centenas de Entregas/mês** · **+4M Toneladas**
- Contadores animados via JS com `IntersectionObserver` (dispara ao entrar na viewport)
- Fundo branco, números em `#1363DF`, labels em `#4A5568`

### 4. Sobre
- Dois blocos: texto à esquerda + elemento visual à direita (placeholder geométrico)
- Narrativa: 40 anos de história, especialização em produtos Suzano, cobertura nacional
- Menção à parceria estratégica com a Suzano S.A.

### 5. Serviços
- 4 cards em grid responsivo (1→2→4 colunas)
- Cada card: ícone SVG + título + descrição
  1. **Transporte de Carga** — frete dedicado em todo território nacional
  2. **Distribuição Nacional** — capilaridade em todos os 26 estados + DF
  3. **Logística de Higiene e Papel** — especialização em produtos tissue
  4. **Monitoramento de Frota** — rastreamento em tempo real

### 6. Diferenciais
- Fundo `#E8F0FE` (azul claro)
- 3 colunas com ícone SVG grande + título + texto
  1. **40 Anos de Experiência** — solidez e know-how acumulado
  2. **Cobertura Nacional** — Brasil inteiro, sem exceção
  3. **Parceria de Confiança** — logística dedicada para grandes indústrias

### 7. Área de Atuação
- Fundo escuro (`#0B2545`)
- Headline + texto explicativo à esquerda
- Mapa SVG do Brasil à direita — estados preenchidos com `#1363DF`, contorno em `#FFFFFF`
- Label: "Cobertura em todos os estados brasileiros"

### 8. Trabalhe Conosco
- Fundo branco
- CTA para motoristas: ícone + texto + botão "Envie seu Currículo"
- CTA para colaboradores administrativos: ícone + texto + botão "Ver Vagas"
- Formulário via `mailto:` — sem backend

### 9. Contato
- Fundo `#F7F9FC`
- Formulário: Nome · E-mail · Assunto · Mensagem + botão enviar (ação `mailto:`)
- Coluna lateral: endereço, telefone, e-mail, horário de atendimento
- Google Maps embed simples (iframe) — opcional/placeholder

### 10. Footer
- Fundo `#0B2545`, texto branco
- Logo + tagline
- CNPJ e endereço
- Links rápidos
- Copyright 2026

---

## Arquitetura de Arquivos

```
joaleria-site/
├── index.html              (página completa — auto-contida)
├── css/
│   ├── reset.css           (normalize mínimo — box-sizing, margin 0)
│   ├── variables.css       (tokens CSS: cores, tipografia, espaçamento)
│   └── main.css            (todos os estilos da página)
├── js/
│   └── main.js             (nav scroll, contadores, menu mobile)
└── assets/
    └── favicon.svg         (ícone minimalista para a aba do browser)
```

---

## Interações & Animações

| Elemento | Comportamento |
|----------|--------------|
| Nav | `backdrop-filter: blur` + box-shadow ao rolar > 50px |
| Contadores | `IntersectionObserver` dispara animação de contagem ao entrar na viewport |
| Seções | `fade-in` + `translateY` sutil via `IntersectionObserver` |
| Botões | `transform: translateY(-2px)` + sombra no hover |
| Menu mobile | Drawer lateral com transição CSS, sem JS de terceiros |
| Âncoras | `scroll-behavior: smooth` via CSS |

---

## Estratégia Mobile-First

- Breakpoints: 480px · 768px · 1024px · 1280px
- Hero: coluna única, texto centralizado, botões empilhados
- Cards: 1 col (mobile) → 2 col (tablet) → 4 col (desktop)
- Mapa: ocupa 100% da largura no mobile (abaixo do texto)
- Nav: hambúrguer com touch targets ≥ 44px
- Formulário: campos em coluna única no mobile

---

## Restrições Técnicas

- Zero dependências externas (sem npm, sem CDN obrigatório, sem frameworks)
- Sem backend — formulário usa `action="mailto:"`
- Compatível com GitHub Pages (arquivos estáticos puros)
- Sem cookies / tracking / analytics (salvo integração futura)
- Placeholders elegantes em CSS/SVG — substituíveis por fotos reais depois
- Compatibilidade: Chrome, Edge, Firefox, Safari (versões modernas)

---

## Critérios de Sucesso

- [ ] Renderiza corretamente em mobile (375px) e desktop (1440px)
- [ ] Contadores animam ao entrar na viewport
- [ ] Nav fixa funciona sem sobreposição de conteúdo
- [ ] Menu mobile abre/fecha sem bugs de layout
- [ ] Mapa SVG exibe o Brasil com todos os estados destacados
- [ ] Formulário abre cliente de e-mail ao enviar
- [ ] Lighthouse Performance > 90 (sem imagens externas, HTML puro)
- [ ] Zero erros de console JS
