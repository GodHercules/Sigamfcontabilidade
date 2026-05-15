# MF Contabilidade — Site Next.js (API integrada)

Projeto montado para reproduzir a página de referência com Next.js, React e TypeScript.

Os endpoints de API estão integrados no próprio Next.js (Route Handlers), o que facilita hospedar tudo em um único projeto (por exemplo, na Vercel).

## Rodar o frontend

```bash
cd frontend
npm install
npm run dev
```

Abra: http://localhost:3000

## Endpoints de API (no Next.js)

- `GET /api/health`
- `GET /api/services`
- `POST /api/contact`

## Assets incluídos

As imagens foram recortadas da referência enviada: logo, mascote do hero, mascote do CTA e escritório.


## Pipeline de imagens (WebP/AVIF)

No frontend existe um pipeline controlado para otimizar imagens pesadas:

```bash
cd frontend
npm run images:optimize
```

Arquivos gerados:

- `public/assets/optimized/*.webp`
- `public/assets/optimized/*.avif`
- `public/assets/optimized/optimization-report.json`

## Lint moderno (ESLint Flat Config)

```bash
cd frontend
npm run lint
```

Configuracao em: `frontend/eslint.config.mjs`

## Testes visuais de regressao (desktop/mobile)

Gerar/atualizar baseline:

```bash
cd frontend
npm run test:visual:update
```

Executar comparacao:

```bash
cd frontend
npm run test:visual
```
