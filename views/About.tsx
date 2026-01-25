
import React from 'react';

export const AboutView: React.FC = () => {
  return (
    <div className="max-w-2xl animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h1 className="text-4xl font-bold text-slate-900 mb-8">Hey, I'm John.</h1>
      
      <div className="prose prose-slate prose-lg space-y-6 text-slate-600 leading-relaxed">
        <p>
          I've been building for the web for over a decade. Currently, I'm a Senior Frontend Engineer at a large tech company where I focus on performance, accessibility, and the developer experience.
        </p>
        
        <p>
          My journey started in the early days of jQuery and PHP, but these days you'll mostly find me working with <strong>React</strong>, <strong>TypeScript</strong>, and <strong>Node.js</strong>. I am a firm believer in the "use the platform" philosophy and try to leverage native web features whenever possible.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 pt-6">What I do when I'm not coding</h2>
        <p>
          When I'm not behind a screen, I'm likely training for my next marathon, exploring the local coffee scene, or reading historical non-fiction. I live in London with my golden retriever, Pixel.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 pt-6">Speaking & Community</h2>
        <p>
          I enjoy sharing my knowledge with the community. I've spoken at international conferences like JSConf, React Summit, and many local meetups. If you're organizing an event and would like me to speak, feel free to reach out.
        </p>

        <div className="pt-8">
          <a href="mailto:hello@example.com" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors">
            Get in touch
          </a>
        </div>
      </div>
    </div>
  );
};
