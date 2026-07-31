# Active Engineering Group

Marketing website for **Active Engineering Group (AEG)**, a civil engineering and project-management consultancy based in Kigali, Rwanda. The site presents the firm's services, projects, company profile, blog, and contact details.

Built with Next.js, React, Three.js, and Framer Motion.

## Features

- Responsive pages for Home, About, Services, Projects, Blog, and Contact
- Civil engineering service and project portfolio content
- Interactive 3D hero section powered by React Three Fiber and Three.js
- Motion and scroll-reveal effects powered by Framer Motion
- Local image and video assets
- Generated `robots.txt` and sitemap routes
- Configurable public site URL via `NEXT_PUBLIC_SITE_URL`

> The contact form currently shows a confirmation message in the browser; it does not send submissions to an email address or API.

## Tech stack

- [Next.js](https://nextjs.org/)
- React
- Three.js, `@react-three/fiber`, and `@react-three/drei`
- Framer Motion
- ESLint

## Getting started

### Prerequisites

- Node.js 20 or later
- npm
- [Git LFS](https://git-lfs.com/) — required because project videos are stored with Git LFS

### Installation

```bash
git clone https://github.com/Divin-chr/Active-engineers.git
cd Active-engineers
git lfs install
git lfs pull
npm install
```

Create a local environment file from the example:

```bash
cp .env.example .env.local
```

Set the production site URL when available:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.example
```

### Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Available commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server. |
| `npm run build` | Create a production build. |
| `npm run start` | Run the production server after building. |
| `npm run lint` | Run ESLint. |

## Project structure

```text
app/                  Route pages, metadata, sitemap, and robots configuration
components/           Shared UI, animation, and Three.js components
public/assets/img/    Images and Git LFS-managed video assets
styles/               Global, carousel, and menu styles
```

## Git LFS media

All `*.mp4` files are tracked using Git LFS. Install Git LFS before cloning or pulling so the video files are downloaded instead of their small pointer files:

```bash
git lfs install
git lfs pull
```

When adding a new video, Git LFS will track it automatically:

```bash
git add public/assets/img/your-video.mp4
git commit -m "Add video asset"
git push
```

## Deployment

Deploy the Next.js app to a platform that supports Node.js, such as Vercel. Configure `NEXT_PUBLIC_SITE_URL` with the deployed domain so generated sitemap and robots URLs use the correct address. Ensure the deployment process supports Git LFS assets.

## License

No license has been specified for this repository.

## Learn about Git LSF

https://docs.github.com/en/repositories/working-with-files/managing-large-files/collaboration-with-git-large-file-storage