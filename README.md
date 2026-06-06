# Goutham Arelli Portfolio

Vercel-deployable portfolio for Goutham Arelli.

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production Build

```bash
npm run build
```

## Deploy

Import this repository into Vercel.

Default build command:

```bash
npm run build
```

The output is handled by Next.js.

## LLM and Search Discovery

The site includes:

- `public/llms.txt`
- `public/llms-full.txt`
- `app/sitemap.ts`

Set `NEXT_PUBLIC_SITE_URL` in Vercel after the production URL is known. If unset, the sitemap falls back to `https://goutham-arelli.vercel.app`.
