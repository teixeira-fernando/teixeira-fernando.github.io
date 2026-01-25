
import React from 'react';
import { PROJECTS } from '../data/content';

export const ProjectsView: React.FC = () => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-slate-900">Projects</h1>
        <p className="text-lg text-slate-500 mt-4">Selected open source work and experiments.</p>
      </header>

      <div className="grid md:grid-cols-2 gap-8">
        {PROJECTS.map(project => (
          <div key={project.id} className="group overflow-hidden rounded-2xl bg-white border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="aspect-video overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-slate-900">{project.title}</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {project.tech.map(t => (
                  <span key={t} className="text-[10px] font-bold uppercase tracking-wider text-slate-400 border border-slate-200 px-1.5 py-0.5 rounded">
                    {t}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-slate-600 text-sm leading-relaxed">
                {project.description}
              </p>
              <div className="mt-6 flex space-x-4">
                {project.repoUrl && (
                  <a href={project.repoUrl} target="_blank" rel="noreferrer" className="text-xs font-bold text-slate-900 hover:text-blue-600 flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                    GitHub
                  </a>
                )}
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noreferrer" className="text-xs font-bold text-slate-900 hover:text-blue-600 flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
