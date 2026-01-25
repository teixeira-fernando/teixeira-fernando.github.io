
import React from 'react';
import { Article } from '../types';

interface ArticleDetailViewProps {
  article: Article;
}

export const ArticleDetailView: React.FC<ArticleDetailViewProps> = ({ article }) => {
  return (
    <div className="max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header className="mb-12">
        <button 
          onClick={() => window.history.back()}
          className="text-sm font-semibold text-slate-400 hover:text-blue-600 mb-8 flex items-center gap-1 transition-colors"
        >
          ← Back to Articles
        </button>
        <time className="text-sm text-slate-400 font-medium uppercase tracking-wider mono block mb-4">
          {new Date(article.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </time>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
          {article.title}
        </h1>
        <div className="mt-6 flex flex-wrap gap-2">
          {article.tags.map(tag => (
            <span key={tag} className="px-2 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wide">
              {tag}
            </span>
          ))}
        </div>
      </header>

      <div className="prose prose-slate prose-lg max-w-none text-slate-700 leading-relaxed">
        <p className="text-xl text-slate-500 italic mb-8 border-l-4 border-blue-100 pl-6">
          {article.excerpt}
        </p>
        
        {/* Simulating long form content */}
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor.
        </p>
        
        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Introduction to the Topic</h2>
        <p>
          Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in metus.
        </p>

        <div className="bg-slate-900 text-slate-100 p-6 rounded-xl my-10 mono text-sm overflow-x-auto shadow-lg">
          <pre><code>{`function optimizePerformance(data) {
  // Deep performance magic
  return data.map(item => ({
    ...item,
    optimized: true,
    timestamp: Date.now()
  }));
}`}</code></pre>
        </div>

        <p>
          Conclusion: In the end, the most important thing is to keep things simple and focus on the user experience. Performance is just one piece of that puzzle.
        </p>
      </div>

      <footer className="mt-20 pt-10 border-t border-slate-100">
        <div className="flex items-center gap-4">
          <img src="https://picsum.photos/seed/author/100/100" alt="John Doe" className="w-16 h-16 rounded-full border-2 border-slate-100" />
          <div>
            <p className="text-slate-900 font-bold">John Doe</p>
            <p className="text-slate-500 text-sm">Follow me on Twitter for more updates on web dev and performance.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
