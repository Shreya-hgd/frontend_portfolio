import React from 'react';

const projects = [
  {
    emoji: '🔐',
    gradient: 'from-[#7C3AED] to-[#3B82F6]',
    name: 'Cielo365',
    url: 'https://cielo365.com/',
    urlLabel: 'cielo365.com',
    description:
      'Cloud-based access control SaaS managing biometric devices — face, fingerprint, palm & card — across multiple enterprise locations. Integrated Gloria AI chatbot for user navigation.',
    tags: ['React', 'Redux', 'JWT Auth', 'AI Chatbot', 'WCAG'],
  },
  {
    emoji: '📺',
    gradient: 'from-[#0891B2] to-[#6D28D9]',
    name: 'Digimax',
    url: 'https://zkdigimax.in/',
    urlLabel: 'zkdigimax.in',
    description:
      'Smart digital signage platform with an intuitive CMS for scheduling and delivering dynamic media content across multiple high-resolution displays.',
    tags: ['React', 'CMS', 'Responsive UI', 'Context API'],
  },
  {
    emoji: '⏱️',
    gradient: 'from-[#059669] to-[#0284C7]',
    name: 'BioTime Cloud',
    url: 'https://biotimecloud.me/',
    urlLabel: 'biotimecloud.me',
    description:
      'Cloud-based workforce management system with real-time admin dashboards tracking attendance, work patterns, and incidents across distributed biometric devices.',
    tags: ['React', 'Dashboards', 'REST API', 'Bootstrap'],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-8 bg-white/[0.015]"
    >
      <div className="max-w-5xl mx-auto">
        <p className="font-display text-[0.7rem] font-semibold tracking-[0.18em] uppercase text-[#A78BFA] mb-3">
          Work
        </p>
        <h2 className="font-display text-[2.2rem] font-bold tracking-tight mb-14">
          Key Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p) => (
            <div
              key={p.name}
              className="bg-white/[0.025] border border-white/[0.06] rounded-2xl p-7 hover:-translate-y-1 hover:border-[#A78BFA]/35 hover:shadow-[0_12px_40px_rgba(167,139,250,0.1)] transition-all duration-300"
            >
              {/* Top row */}
              <div className="flex justify-between items-start mb-5">
                <div
                  className={`w-10 h-10 bg-gradient-to-br ${p.gradient} rounded-xl flex items-center justify-center text-lg`}
                >
                  {p.emoji}
                </div>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#6B7280] hover:text-[#A78BFA] text-[0.78rem] no-underline transition-colors duration-200"
                >
                  {p.urlLabel} ↗
                </a>
              </div>

              <h3 className="font-display font-semibold text-[1.05rem] text-[#E8E6F0] mb-3">
                {p.name}
              </h3>
              <p className="text-[#6B7280] text-[0.85rem] leading-[1.65] mb-5">
                {p.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-[#A78BFA]/08 border border-[#A78BFA]/18 text-[#C4B5FD] text-[0.72rem] font-display font-medium tracking-wide px-2.5 py-0.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
