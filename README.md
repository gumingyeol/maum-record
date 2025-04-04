This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

```
maumrecord
├─ eslint.config.mjs
├─ jsconfig.json
├─ next.config.mjs
├─ package-lock.json
├─ package.json
├─ postcss.config.js
├─ public
│  ├─ audio
│  │  └─ VOLI_TTS_설아.wav
│  ├─ file.svg
│  ├─ flowers
│  │  ├─ Cosmo.png
│  │  ├─ Daffodil.png
│  │  ├─ Daisy.png
│  │  ├─ Lavender.png
│  │  ├─ Lily.png
│  │  ├─ LilyOfTheValley.png
│  │  ├─ Orchid.png
│  │  ├─ Pansy.png
│  │  ├─ Poppy.png
│  │  ├─ Rose.png
│  │  ├─ Sunflower.png
│  │  └─ Tulip.png
│  ├─ globe.svg
│  ├─ images
│  │  ├─ calendar-example.png
│  │  ├─ healing-example.png
│  │  ├─ record-example.png
│  │  └─ result-example.png
│  ├─ music
│  │  ├─ 1.mp3
│  │  ├─ 2.mp3
│  │  ├─ 3.mp3
│  │  ├─ 4.mp3
│  │  ├─ 5.mp3
│  │  ├─ 6.mp3
│  │  └─ bell.mp3
│  ├─ next.svg
│  ├─ profile-default.png
│  ├─ vercel.svg
│  ├─ video
│  │  ├─ 1.mp4
│  │  ├─ 2.mp4
│  │  ├─ 3.mp4
│  │  └─ 4.mp4
│  └─ window.svg
├─ README.md
├─ src
│  ├─ app
│  │  ├─ admin
│  │  │  ├─ layout.tsx
│  │  │  ├─ page.tsx
│  │  │  └─ users
│  │  │     ├─ page.tsx
│  │  │     └─ [id]
│  │  │        └─ page.tsx
│  │  ├─ analyzing
│  │  │  └─ page.js
│  │  ├─ api
│  │  │  └─ admin
│  │  │     └─ users
│  │  │        └─ route.ts
│  │  ├─ calendar
│  │  │  └─ page.js
│  │  ├─ components
│  │  │  ├─ admin
│  │  │  │  ├─ AdminHeader.tsx
│  │  │  │  ├─ AdminLogout.tsx
│  │  │  │  ├─ AdminSidebar.tsx
│  │  │  │  ├─ HealingProgramList.tsx
│  │  │  │  ├─ HealingProgramTrendChart.tsx
│  │  │  │  ├─ StatCard.tsx
│  │  │  │  └─ withAdminAuth.tsx
│  │  │  ├─ FooterLogo.js
│  │  │  ├─ HamburgerMenu.js
│  │  │  └─ ProfileIcon.js
│  │  ├─ favicon.ico
│  │  ├─ globals.css
│  │  ├─ healing
│  │  │  ├─ meditation
│  │  │  │  └─ page.js
│  │  │  ├─ music
│  │  │  │  └─ page.js
│  │  │  ├─ page.js
│  │  │  └─ yoga
│  │  │     └─ page.js
│  │  ├─ layout.js
│  │  ├─ login
│  │  │  └─ page.js
│  │  ├─ page.js
│  │  ├─ profile
│  │  │  └─ page.js
│  │  ├─ record
│  │  │  └─ page.js
│  │  ├─ result
│  │  │  └─ page.js
│  │  └─ signup
│  │     └─ page.js
│  └─ components
│     └─ ResultPage.js
├─ tailwind.config.js
└─ tsconfig.json

```