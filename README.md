# 🌊 Pousada Plafitpufit — Landing Page

Landing page completa e responsiva criada para a **Pousada Plafitpufit**, localizada no coração da Vila de Jericoacoara, CE. O projeto combina um design system próprio, hero com vídeo de fundo em tela cheia e páginas individuais para cada tipo de quarto.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![CSS Grid](https://img.shields.io/badge/CSS_Grid-Layout-76BCCC?style=flat-square)
![Responsive](https://img.shields.io/badge/Responsivo-Mobile_First-E7F24E?style=flat-square&logoColor=black)
![WCAG AA](https://img.shields.io/badge/WCAG-AA-7171D3?style=flat-square)

---

## ✨ Principais Recursos e Diferenciais

### 🎬 Hero com Vídeo de Fundo em Tela Cheia

A seção hero usa `<video autoplay muted loop playsinline>` como background em largura e altura total — sem bibliotecas externas. Overlay com gradiente direcional garante contraste e legibilidade em qualquer dispositivo. O conteúdo textual e o widget de reserva ficam sobrepostos ao vídeo com posicionamento absoluto.

### 📅 Widget de Reserva Integrado

Card de reserva com campos de Check-in, Check-out e Hóspedes posicionado na borda inferior do hero com `transform: translateY(50%)`, criando o efeito de transição visual entre o hero e o conteúdo. Validação de datas com JavaScript puro e integração via WhatsApp.

### 🎨 Design System Próprio com CSS Custom Properties

Tokens de design definidos em `:root` para cores, tipografia, espaçamentos, bordas e sombras. Paleta principal: Beige `#F4EFDC`, Moonstone `#76BCCC`, Violet `#7171D3` e Green-Yellow `#E7F24E` (exclusivo para CTAs).

### 🛏 Páginas Individuais por Quarto

Três páginas HTML independentes, uma para cada acomodação:
- **Quarto Standard Casal** — 18 m², Cama Queen Size, Varanda
- **Quarto Deluxe Família** — 26 m², Cama King + Solteiro, Térreo
- **Quarto Triplo** — 26 m², 3 Camas Box Solteiro, Térreo

Cada página inclui hero com foto do quarto, breadcrumb de navegação, comodidades em pills, destaques em cards, CTA de reserva e seção "Confira também" com os outros quartos.

### 📱 Layout Responsivo — Mobile First

CSS Grid em todas as seções com breakpoints em `768px`, `1024px` e `1200px`. Menu mobile com hambúrguer animado via JavaScript puro (`IntersectionObserver`, `classList.toggle`). Nenhuma dependência externa de layout.

### ♿ Acessibilidade WCAG AA

- Semântica HTML5 (`<header>`, `<main>`, `<footer>`, `<article>`, `<figure>`, `<nav>`, `<address>`)
- Skip-link para conteúdo principal
- `aria-label`, `aria-expanded`, `aria-controls` em todos os elementos interativos
- `alt` descritivos em todas as imagens
- `focus-visible` com outline personalizado
- Respeito a `prefers-reduced-motion`

### 🚀 Performance

- Imagens em formato **WebP** com `loading="lazy"`
- Vídeo hero com `loading="eager"` para carregamento prioritário
- CSS e JS externos compartilhados entre todas as páginas
- Sem frameworks ou bibliotecas — zero dependências em produção
- Fonte via Google Fonts: **Rethink Sans** + **Playfair Display**

---

## 🗂 Estrutura de Arquivos

```
pousada-plafitpufit/
├── index.html                       ← Landing page principal
├── quarto-standard-casal.html       ← Página do Quarto Standard Casal
├── quarto-deluxe-familia.html       ← Página do Quarto Deluxe Família
├── quarto-triplo.html               ← Página do Quarto Triplo
├── assets/
│   ├── css/
│   │   └── style.css                ← Design system + todos os estilos
│   ├── js/
│   │   └── main.js                  ← Menu mobile, booking e reveal
│   ├── imagens/
│   │   ├── acomodacoes/             ← Fotos dos quartos (.webp)
│   │   ├── galeria/                 ← Galeria da pousada (.webp)
│   │   ├── instagram/               ← Posts do Instagram (.webp)
│   │   ├── jericoacoara/            ← Foto de Jericoacoara (.webp)
│   │   └── sobre-pousada/           ← Foto da entrada (.webp)
│   ├── logos/
│   │   ├── logo-preto.png           ← Logo para header (fundo claro)
│   │   ├── logo-claro.png           ← Logo para footer (fundo escuro)
│   │   └── favicon.png              ← Favicon do site
│   ├── icons/
│   │   ├── instagram.svg            ← Ícone Instagram (Lucide)
│   │   └── whatsapp.svg             ← Ícone WhatsApp
│   └── videos/
│       └── video-hero-section.mp4   ← Vídeo de fundo do hero
```

---

## 🎨 Design System — Tokens de Cor

| Token | Valor | Uso |
|---|---|---|
| `--beige` | `#F4EFDC` | Background principal |
| `--white` | `#FFFFFF` | Cards e superfícies |
| `--moonstone` | `#76BCCC` | Destaque, links, bordas |
| `--violet` | `#7171D3` | Eyebrows, foco |
| `--green-yellow` | `#E7F24E` | CTAs exclusivamente |
| `--ink` | `#2A2A2A` | Texto principal |

---

## 🖥 Seções da Landing Page

| # | Seção | Descrição |
|---|---|---|
| 1 | **Hero** | Vídeo de fundo + headline + widget de reserva |
| 2 | **Sobre** | História e diferenciais da pousada |
| 3 | **Acomodações** | Cards dos 3 quartos com link para páginas individuais |
| 4 | **Avaliações** | Depoimentos de hóspedes |
| 5 | **Diferenciais** | Recepção 24h, Wi-Fi, Piscina, Café da manhã |
| 6 | **Galeria** | Grid de fotos com hover animado |
| 7 | **Instagram** | Posts recentes |
| 8 | **Jericoacoara** | Por que visitar o destino |

---

## 🚀 Como Usar

Clone o repositório e abra diretamente no navegador — não há processo de build:

```bash
git clone https://github.com/leodevdesign/pousada-plafitpufit.git
cd pousada-plafitpufit
# Abra index.html no navegador
```

> Para visualizar o vídeo do hero corretamente, sirva os arquivos por um servidor local (ex: Live Server no VS Code) em vez de abrir o arquivo diretamente pelo sistema de arquivos.

---

## 👨‍💻 Desenvolvido por

<a href="https://nextautomatik.com/" target="_blank">
  <strong>Next Automatik</strong> — Design & Desenvolvimento Digital
</a>

Estúdio especializado em experiências digitais de alta performance para marcas que querem se destacar.
