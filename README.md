This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app@latest`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
## LIVE PREVIEW
You can see [this project](https://finder-test-app-two.vercel.app/) live,  deployed on [Vercel](https://vercel.com)
```
https://finder-test-app-two.vercel.app/
```
## Getting Started

First, clone github repository with this command:

```bash
git clone https://github.com/PawelDuplaga/finder-test-app.git
```
Then go to project folder:
```bash
cd finder-test-app
```
And download needed dependencies:
```bash
npm install
#or
yarn install
```

To run project locally run command :
```bash
npm run dev
```

Project should start on `http://localhost:3000/`

## About Project
Project was made using [`Next.js`](https://nextjs.org/) framework with Typescript. For styling I used [`tailwind`](https://tailwindcss.com/).
Project is using [App Router](https://nextjs.org/docs/app) from Next.js. In `page.tsx` located in `src/app` i just import main view - HomeView.
All components are located in `src/components`.

## Task components

> [!NOTE]
> PAGE COMPONENTS ARE FULLY RESPONSIVE !

### Main components, which grid is builded from, are located in:
 • `src/components/CategoryTile` - this element contains icon, category title and is linked to "https://www.finder.com.au/" <br/>
 • `src/components/CategoryGrid` - this element generate flex grid from `CategoryTitle.tsx` elements. </br>

HomePage view is loacted in `src/views/HomeView` </br>
Constant values are located in `src/lib/const/categoriesTilesData.ts` </br>

> [!IMPORTANT]
> Other elements are purely cosmetical and were made for better [live](https://finder-test-app-two.vercel.app/) task presentation