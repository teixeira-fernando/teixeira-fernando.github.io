
import React from 'react';
import { TALKS } from '../data/content';

export const TalksView: React.FC = () => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-slate-900">Talks</h1>
        <p className="text-lg text-slate-500 mt-4">Recordings and resources from my conference presentations.</p>
      </header>

      <div className="grid gap-12">
        {TALKS.map(talk => (
          <div key={talk.id} className="border-b border-slate-100 pb-12 last:border-0">
            <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2">
              <h2 className="text-2xl font-bold text-slate-900">{talk.title}</h2>
              <time className="text-sm text-slate-400 font-medium mono">
                {new Date(talk.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
              </time>
            </div>
            <p className="text-blue-600 font-semibold mt-1">{talk.event}</p>
            <p className="mt-4 text-slate-600 leading-relaxed max-w-2xl">
              {talk.description}
            </p>
            <div className="mt-6 flex space-x-6">
              {talk.videoUrl && (
                <a 
                  href={talk.videoUrl} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"/></svg>
                  Watch Video
                </a>
              )}
              {talk.slidesUrl && (
                <a 
                  href={talk.slidesUrl} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>
                  View Slides
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
