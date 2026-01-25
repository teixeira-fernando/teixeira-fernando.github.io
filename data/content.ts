
import { Article, Talk, Project } from '../types';

export const ARTICLES: Article[] = [
  {
    id: '1',
    title: 'Mastering the Art of Technical Speaking',
    excerpt: 'Sharing your knowledge is as much about storytelling as it is about technical depth.',
    date: '2024-05-15',
    slug: 'technical-speaking',
    tags: ['Soft Skills', 'Community'],
    content: `Technical speaking is a skill that takes time to develop. It's not just about the code you show on screen; it's about how you connect with the audience...`
  },
  {
    id: '2',
    title: 'Performance Optimization in Modern Web Apps',
    excerpt: 'Deep dive into rendering cycles, bundle size reduction, and the power of static generation.',
    date: '2024-04-20',
    slug: 'performance-optimization',
    tags: ['Web Performance', 'React'],
    content: `Web performance is no longer a luxury—it's a requirement for high SEO rankings and user retention...`
  },
  {
    id: '3',
    title: 'The Future of Frontend Tooling',
    excerpt: 'Exploring the transition from webpack to esbuild and beyond.',
    date: '2024-03-10',
    slug: 'frontend-tooling',
    tags: ['Tooling', 'DevOps'],
    content: `The JavaScript ecosystem moves fast, but the underlying build tools are becoming more specialized...`
  }
];

export const TALKS: Talk[] = [
  {
    id: 't1',
    title: 'Building for the Next Billion Users',
    event: 'Global Dev Conf 2024',
    date: '2024-06-12',
    videoUrl: 'https://youtube.com',
    slidesUrl: 'https://slideshare.net',
    description: 'A deep dive into internationalization and performance constraints for emerging markets.'
  },
  {
    id: 't2',
    title: 'CSS Architecture at Scale',
    event: 'StyleSummit 2023',
    date: '2023-11-05',
    description: 'How we managed thousands of CSS modules without losing our minds.'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'EcoTrack CLI',
    description: 'A rust-based command line tool to track and offset digital carbon footprint.',
    repoUrl: 'https://github.com',
    tech: ['Rust', 'CLI'],
    image: 'https://picsum.photos/seed/eco/600/400'
  },
  {
    id: 'p2',
    title: 'Lumina Design System',
    description: 'Accessible, component-driven UI library used by over 50 teams.',
    liveUrl: 'https://example.com',
    tech: ['TypeScript', 'React', 'Tailwind'],
    image: 'https://picsum.photos/seed/lumina/600/400'
  }
];
