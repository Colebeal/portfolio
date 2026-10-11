# Cole Beal Portfolio

A React portfolio for Cole Beal's photography and web-development work. The photography viewer is the primary experience; developer work and case studies live under `/dev`.

## Routes

| Route                                 | Purpose                                     |
| ------------------------------------- | ------------------------------------------- |
| `/`                                   | Photographer biography and contact details  |
| `/imagery`                            | Redirects to the photography homepage       |
| `/about`                              | Legacy alias for the photography homepage   |
| `/index/:collectionSlug`              | Continuous Index positioned at a collection |
| `/image/:collectionSlug/:imageNumber` | Shareable individual photograph             |
| `/dev`                                | Redirects to the developer homepage         |
| `/dev/home`                           | Developer portfolio                         |
| `/dev/bonsai`                         | Bonsai Buddy case study                     |
| `/dev/dorff-designs`                  | Dorff Designs case study                    |

Unknown routes display the not-found page.

## Local development

Requires a current Node.js LTS release.

```bash
npm install
npm run dev
```

Vite prints the local URL when it starts. To expose the server to other devices on the same network, run `npm run dev -- --host`.

## Quality checks

```bash
npm run check
```

This runs ESLint, repository health tests, and the production build. The health tests validate the photography collection configuration, local image paths, image metadata, and required application routes.

## Photography content

Image records live in `src/assets/sliderData.js`. `portfolioCollections` is the canonical collection list used by the viewer, gallery, navigation, and menu. Add or reorder collections there rather than adding conditional UI branches.

Each image should include:

- `src`
- `blurHash`
- `width` and `height`
- useful `alt` text when the image conveys content
- slider and gallery classes

After adding images without placeholder metadata, generate it with:

```bash
npm run gen-blur
```

The generator reads local images from `public/`, fetches remote images, and updates `sliderData.js`.

## Deployment

The project is configured for Netlify. `netlify.toml` redirects requests to `index.html` so React Router can handle direct navigation to nested routes.

Google Analytics and Google Tag Manager are initialized in `index.html`. Review both configurations before adding more analytics tags to prevent duplicate events.

## Contact email

The About form posts to the Netlify Function at `/api/contact`, which sends the inquiry to `cole@colebeal.com` through Resend. The API key stays server-side.

For local development, add `RESEND_API_KEY` to `.env` and run the site through Netlify Dev so the function route is available:

```bash
npx netlify dev
```

To send the standalone Resend test message intentionally, run:

```bash
npm run email:test
```

For production, add `RESEND_API_KEY` in the Netlify project environment variables with Functions access, then redeploy. After verifying `colebeal.com` in Resend, optionally set `RESEND_FROM_EMAIL` to a sender on that domain, such as `Cole Beal Portfolio <hello@colebeal.com>`.
