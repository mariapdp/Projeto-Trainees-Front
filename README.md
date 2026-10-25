# Atualizações das áreas

Projeto do processo de trainees: feed de atualizações internas por área, com criação, visualização, edição e exclusão. Os dados ficam salvos no `localStorage` do navegador.

## Tecnologias

React 19 · Vite · React Router · ESLint

## Como rodar

```bash
npm install
npm run dev      # servidor de desenvolvimento
npm run build    # gera a pasta dist
npm run lint     # verifica o código
```

## Rotas

| Rota | Tela |
| --- | --- |
| `/feed` | Lista de atualizações com filtros (busca, área e data) |
| `/criar-atualizacao` | Formulário de nova atualização |
| `/atualizacao/:id` | Visualização, edição e exclusão |
| `/atualizacao/:id/editar` | Formulário de edição |

## Regras

- Título: obrigatório, até 50 caracteres.
- Conteúdo: obrigatório, até 1000 caracteres.
- Áreas: pelo menos uma (GI & Fin, Pessoas, Projetos, Marketing, Mercado).

## Deploy

Publicado automaticamente no GitHub Pages a cada push na `main` (`.github/workflows/deploy.yml`).
