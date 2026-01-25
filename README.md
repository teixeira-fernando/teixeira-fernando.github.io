# Modern Personal Website

A modern, minimalist personal website built with React, TypeScript, and Vite. Features a clean design with smooth animations and responsive layout.

## Features

✨ **Modern Stack**
- React 19 for UI components
- TypeScript for type safety
- Vite for fast development and building
- Tailwind CSS for styling (via CDN)

🎨 **Clean Design**
- Modern, minimalist aesthetic
- Smooth animations and transitions
- Fully responsive layout
- Optimized for performance

📝 **Content Sections**
- Home page with latest content
- About page
- Articles with detail views
- Talks and presentations
- Projects showcase

## Quick Start

### Prerequisites

- Node.js 18+ ([installation guide](https://nodejs.org/))
- npm or yarn

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/teixeira-fernando/personal-website.git
   cd personal-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open your browser to `http://localhost:3000`

## Development

### Running the dev server
```bash
npm run dev
```

### Building for production
```bash
npm run build
```

### Preview production build
```bash
npm run preview
```

## Customization

### Updating Content

All content is stored in `data/content.ts`. You can easily update:
- Articles
- Talks
- Projects

### Personalizing Information

1. Update the name in `App.tsx` (search for "John Doe")
2. Update social links in the footer
3. Modify the About page content in `views/About.tsx`
4. Update the home page intro in `views/Home.tsx`

### Styling

The site uses Tailwind CSS via CDN. All styles are inline using Tailwind utility classes. To customize:
- Edit component files in the `views/` directory
- Modify global styles in `index.html`

## Project Structure

```
.
├── data/
│   └── content.ts          # All content (articles, talks, projects)
├── views/
│   ├── Home.tsx           # Home page
│   ├── About.tsx          # About page
│   ├── Articles.tsx       # Articles listing
│   ├── ArticleDetail.tsx  # Article detail view
│   ├── Talks.tsx          # Talks listing
│   └── Projects.tsx       # Projects showcase
├── App.tsx                # Main app component
├── index.tsx              # Entry point
├── types.ts               # TypeScript type definitions
├── index.html             # HTML template
├── vite.config.ts         # Vite configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies and scripts
```

## Deployment

### GitHub Pages

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy the `dist` folder to GitHub Pages

### Other Platforms

The built static files in the `dist` folder can be deployed to:
- Vercel
- Netlify
- Cloudflare Pages
- Any static hosting service

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

MIT License - feel free to use this for your own personal website!

---

**Happy coding! 🚀**

