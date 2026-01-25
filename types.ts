
export interface Article {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  content: string;
  tags: string[];
}

export interface Talk {
  id: string;
  title: string;
  event: string;
  date: string;
  videoUrl?: string;
  slidesUrl?: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  repoUrl?: string;
  liveUrl?: string;
  tech: string[];
  image: string;
}

export type View = 'home' | 'about' | 'articles' | 'talks' | 'projects' | 'article-detail';
