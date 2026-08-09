# Design System

## Theme

Uma central técnica contemporânea: página clara, precisa e silenciosa, enquadrada por um fundo petróleo atmosférico. A composição segue a referência editorial enviada, mas a estrutura visual proprietária é o Trajeto LIJT.

## Color

- Petroleum: `oklch(31% 0.062 219)` / referência `#0B3B4A`
- Emerald: `oklch(61% 0.13 162)` / referência `#1D9E75`, reservado a conclusão, check e ação decisiva
- Off-white: `oklch(97.5% 0.003 220)` / referência `#F7F7F5`
- Technical grey: `oklch(47% 0.01 75)` / referência `#5F5E5A`
- Ink: `oklch(22% 0.025 219)`

## Typography

- Display e interface: Manrope, geométrica e segura
- Dados e estados: Azeret Mono, exclusivamente em protocolos, etapas, prazos e valores
- H1 fluido com teto de 78px e tracking mínimo de -0.035em

## Layout

- Documento central de até 1440px sobre campo externo petróleo
- Seções entre 96px e 152px de respiro no desktop
- Grid assimétrico no hero e em conteúdo B2B; cards apenas quando representam escolha ou plano
- Raios entre 10px e 16px; botões em pill

## Components

- `Trajectory`: pontos conectados; apenas o estado concluído é verde
- `Intent router`: três escolhas com comportamento contextual
- `Accountant lane`: faixa B2B escura e distinta
- `Process rail`: sequência real de quatro etapas
- `Technical accordion`: FAQ com rótulos monoespaçados
- `Lead dialog`: formulário contextual com confirmação no Trajeto

## Motion

Entrada orquestrada no hero, progressão sutil do trajeto e deslocamentos curtos em interações. Nunca ocultar conteúdo por padrão. Respeitar `prefers-reduced-motion`.
