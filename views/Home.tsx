
import React from 'react';
import { View } from '../types';
import { ARTICLES, TALKS } from '../data/content';

interface HomeViewProps {
  onNavigate: (view: View, extra?: any) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate }) => {
  const latestArticles = ARTICLES.slice(0, 3);
  const latestTalks = TALKS.slice(0, 2);

  return (
    <div className="space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Intro */}
      <section className="space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
          Software Engineer, Speaker, and <span className="text-blue-600">Lifelong Learner</span>.
        </h1>
        <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
          I'm John, a developer based in London. I specialize in building performance-oriented web applications and sharing my experiences through technical writing and public speaking.
        </p>
      </section>

      {/* Latest Articles */}
      <section className="space-y-8">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <h2 className="text-2xl font-bold text-slate-900">Latest Articles</h2>
          <button 
            onClick={() => onNavigate('articles')}
            className="text-sm font-semibold text-blue-600 hover:text-blue-700"
          >
            View all articles →
          </button>
        </div>
        <div className="grid gap-8">
          {latestArticles.map(article => (
            <article key={article.id} className="group relative flex flex-col items-start">
              <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                <button onClick={() => onNavigate('article-detail', article)} className="text-left">
                  {article.title}
                </button>
              </h3>
              <p className="mt-2 text-slate-600 leading-relaxed line-clamp-2">
                {article.excerpt}
              </p>
              <time className="mt-3 text-sm text-slate-400 font-medium uppercase tracking-wider mono">
                {new Date(article.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </time>
            </article>
          ))}
        </div>
      </section>

      {/* Latest Talks */}
      <section className="space-y-8">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <h2 className="text-2xl font-bold text-slate-900">Recent Talks</h2>
          <button 
            onClick={() => onNavigate('talks')}
            className="text-sm font-semibold text-blue-600 hover:text-blue-700"
          >
            View all talks →
          </button>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {latestTalks.map(talk => (
            <div key={talk.id} className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-all">
              <h3 className="text-lg font-bold text-slate-900">{talk.title}</h3>
              <p className="text-sm text-blue-600 font-medium mt-1">{talk.event}</p>
              <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                {talk.description}
              </p>
              <div className="mt-4 flex space-x-4">
                {talk.videoUrl && (
                  <a href={talk.videoUrl} target="_blank" rel="noreferrer" className="text-xs font-bold text-slate-900 hover:text-blue-600">Video</a>
                )}
                {talk.slidesUrl && (
                  <a href={talk.slidesUrl} target="_blank" rel="noreferrer" className="text-xs font-bold text-slate-900 hover:text-blue-600">Slides</a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
