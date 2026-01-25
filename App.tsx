
import React, { useState, useEffect } from 'react';
import { View, Article } from './types';
import { ARTICLES, TALKS, PROJECTS } from './data/content';
import { HomeView } from './views/Home';
import { AboutView } from './views/About';
import { ArticlesView } from './views/Articles';
import { TalksView } from './views/Talks';
import { ProjectsView } from './views/Projects';
import { ArticleDetailView } from './views/ArticleDetail';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('home');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  // Simple routing simulation based on hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash.startsWith('article/')) {
        const slug = hash.split('/')[1];
        const art = ARTICLES.find(a => a.slug === slug);
        if (art) {
          setSelectedArticle(art);
          setCurrentView('article-detail');
        }
      } else if (['about', 'articles', 'talks', 'projects'].includes(hash)) {
        setCurrentView(hash as View);
      } else {
        setCurrentView('home');
      }
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Run on mount

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (view: View, extra?: any) => {
    if (view === 'article-detail' && extra) {
      window.location.hash = `article/${extra.slug}`;
    } else if (view === 'home') {
      window.location.hash = '';
    } else {
      window.location.hash = view;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <nav className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <button 
            onClick={() => navigateTo('home')}
            className="text-lg font-bold tracking-tight text-slate-900 hover:text-blue-600 transition-colors"
          >
            John Doe
          </button>
          
          <ul className="flex items-center space-x-6 text-sm font-medium text-slate-600">
            <li>
              <button 
                onClick={() => navigateTo('about')}
                className={`hover:text-slate-900 transition-colors ${currentView === 'about' ? 'text-blue-600' : ''}`}
              >
                About
              </button>
            </li>
            <li>
              <button 
                onClick={() => navigateTo('talks')}
                className={`hover:text-slate-900 transition-colors ${currentView === 'talks' ? 'text-blue-600' : ''}`}
              >
                Talks
              </button>
            </li>
            <li>
              <button 
                onClick={() => navigateTo('articles')}
                className={`hover:text-slate-900 transition-colors ${currentView === 'articles' ? 'text-blue-600' : ''}`}
              >
                Articles
              </button>
            </li>
            <li>
              <button 
                onClick={() => navigateTo('projects')}
                className={`hover:text-slate-900 transition-colors ${currentView === 'projects' ? 'text-blue-600' : ''}`}
              >
                Projects
              </button>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow max-w-4xl mx-auto px-6 py-12 w-full">
        {currentView === 'home' && <HomeView onNavigate={navigateTo} />}
        {currentView === 'about' && <AboutView />}
        {currentView === 'articles' && <ArticlesView onNavigate={navigateTo} />}
        {currentView === 'talks' && <TalksView />}
        {currentView === 'projects' && <ProjectsView />}
        {currentView === 'article-detail' && selectedArticle && (
          <ArticleDetailView article={selectedArticle} />
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-100 py-12">
        <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} John Doe. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="https://twitter.com" className="hover:text-blue-500">Twitter</a>
            <a href="https://github.com" className="hover:text-slate-900">GitHub</a>
            <a href="https://linkedin.com" className="hover:text-blue-700">LinkedIn</a>
            <a href="/rss.xml" className="hover:text-orange-500">RSS</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
