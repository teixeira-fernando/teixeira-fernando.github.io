
import React from 'react';
import { View, Article } from '../types';
import { ARTICLES } from '../data/content';

interface ArticlesViewProps {
  onNavigate: (view: View, extra?: any) => void;
}

export const ArticlesView: React.FC<ArticlesViewProps> = ({ onNavigate }) => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-slate-900">Articles</h1>
        <p className="text-lg text-slate-500 mt-4">Writing about code, performance, and soft skills.</p>
      </header>

      <div className="space-y-12">
        {ARTICLES.map(article => (
          <article key={article.id} className="group grid md:grid-cols-4 gap-4">
            <time className="text-sm text-slate-400 font-medium uppercase tracking-wider mono py-1">
              {new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
            </time>
            <div className="md:col-span-3">
              <h2 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                <button onClick={() => onNavigate('article-detail', article)} className="text-left">
                  {article.title}
                </button>
              </h2>
              <p className="mt-2 text-slate-600 leading-relaxed">
                {article.excerpt}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {article.tags.map(tag => (
                  <span key={tag} className="px-2 py-0.5 rounded bg-slate-100 text-slate-500 text-xs font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};
