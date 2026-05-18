# Giroto Story Maker — Site Next.js

## Stack
- Next.js 14 (App Router)
- Tailwind CSS
- TypeScript
- Deploy: Vercel (gratuito)

## Como rodar localmente

```bash
npm install
npm run dev
```
Acesse: http://localhost:3000

## Como fazer deploy no Vercel (gratuito)

1. Crie uma conta em https://vercel.com (use o GitHub)
2. Faça upload deste projeto no GitHub
3. No Vercel, clique em "Add New Project"
4. Importe o repositório do GitHub
5. Clique em "Deploy" — pronto!

## Como apontar o domínio eternamoments.com.br

1. No painel do Vercel, vá em Settings > Domains
2. Adicione: eternamoments.com.br
3. No painel do seu registro de domínio (Registro.br), adicione:
   - Tipo: CNAME | Nome: www | Valor: cname.vercel-dns.com
   - Tipo: A | Nome: @ | Valor: 76.76.21.21

## Após publicar — ações importantes para SEO

1. **Google Search Console**: acesse search.google.com/search-console
   - Adicione o domínio
   - Cole o código de verificação no layout.tsx (onde está COLE_SEU_GOOGLE_VERIFICATION_CODE_AQUI)
   - Envie o sitemap: eternamoments.com.br/sitemap.xml

2. **Google Meu Negócio**: crie a ficha em business.google.com
   - Categoria: Serviços de Fotografia / Serviços de Eventos
   - Adicione o site, WhatsApp e fotos

3. **Foto og-image.jpg**: crie uma imagem 1200x630px com o logo + texto
   e salve em /public/og-image.jpg

## Estrutura de arquivos

```
giroto-storymaker/
├── app/
│   ├── layout.tsx      ← SEO, Schema JSON-LD, metadados
│   ├── page.tsx        ← Página principal completa
│   └── globals.css     ← Estilos globais
├── public/
│   ├── og-image.jpg    ← Criar! (1200x630px)
│   └── favicon.ico     ← Criar!
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## Personalizar conteúdo

- **Depoimentos**: edite o array `depoimentos` em page.tsx
- **Serviços**: edite o array `servicos` em page.tsx
- **Preços**: quando tiver, adicione uma seção nova após #servicos
- **Portfólio**: quando tiver fotos, substituia o placeholder no card da seção #sobre
- **FAQ**: edite o array `faqs` em page.tsx e em layout.tsx (Schema)

## Sitemap (recomendado adicionar)

Crie app/sitemap.ts:
```ts
import { MetadataRoute } from 'next'
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://eternamoments.com.br', lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
  ]
}
```
