This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

IMPORTANT UPDATE: I've accidentaly built this project with my working account when this was supposed to be a personal projects :pray:

## PitchBang

This project is a web application where creative, entrepeneur minds can share their idea with a community and get visibility. Feel free to run it and try by yourself! Give it a star if you like :smile:

I build this project to test some cool features and technologies.

I'm using Next.js, specifically Next.js 15 and I focused on testing how much value can the new feature ISR (Incremental Site Regeneration) and TurboPack bring to both the client and developer.

Of course I've used Tailwind CSS for utility-first CSS classes.

For Authentication and Authorization I've used Auth.js which is pretty scalable, optimized for integrating with Next.js, has a good developer experience, is self-hosted and fully customizable.

I've used some ShadcnUI as a component library since it's one of my favorite component libraries. You get full ownership of the components (you literally get tsx file for the component on your components folder) and they are full customizable by editing the classname attribute. Really speeds up front-end development using it alongside Tailwind CSS.

For content management I've used Sanity Content OS. I've used one of it's versions as an headless CMS but now the it's at it's best, much more stable and offering a stunning content management studio out of the box that works perfectly. I'm really impressed on how simple it is to use Sanity client for read and write data. The only part that could still be improved is the markdown editor for content managers. It could have a better UX and it's a pretty commom requirement for projects with content management.

I've also tried Sentry for the first time in this project and it's pretty amazing! Beyond the amazing developer experience it really helps tracking the app performance, saving tons of support time.

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
