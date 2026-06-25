import React from 'react';

const jobs = [
  {
    role: 'Senior Software Engineer',
    company: 'ZKTeco Biometric R&D',
    location: 'Bangalore',
    period: 'Oct 2020 – Present',
    duration: '~5 years',
    color: '#A78BFA',
    bullets: [
      'Scaled Cielo365, a cloud-based access control SaaS managing 10K+ users & biometric devices',
      'Built modular React/Redux component library, cutting development time by 30%',
      'Integrated JWT auth, Gloria AI chatbot, and full WCAG accessibility compliance',
      'Achieved 40% load time reduction via lazy loading, code splitting & memoization',
      'Collaborated with backend teams on seamless REST API integration',
    ],
  },
  {
    role: 'Front End Developer',
    company: 'Resolve Biz Apps & Services',
    location: 'Bangalore',
    period: 'May 2018 – Oct 2020',
    duration: '2.4 years',
    color: '#60A5FA',
    bullets: [
      'Built responsive web apps improving mobile usability by 40%',
      'Architected scalable UI using Bootstrap and modern JavaScript patterns',
      'Translated wireframes into production-ready interfaces in Agile sprints',
      'Ensured cross-browser compatibility across desktop and mobile platforms',
    ],
  },
  {
    role: 'Web Developer',
    company: 'Socioactiv Brand Solutions',
    location: 'Bangalore',
    period: 'May 2017 – May 2018',
    duration: '1 year',
    color: '#34D399',
    bullets: [
      'Developed responsive internal apps with pixel-perfect HTML/CSS from Photoshop designs',
      'Resolved cross-browser inconsistencies, improving UI consistency by 30%',
      'Delivered static web pages and brand-aligned UI for clients',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-8">
      <div className="max-w-5xl mx-auto">
        <p className="font-display text-[0.7rem] font-semibold tracking-[0.18em] uppercase text-[#A78BFA] mb-3">
          Career
        </p>
        <h2 className="font-display text-[2.2rem] font-bold tracking-tight mb-14">
          Experience
        </h2>

        <div className="flex flex-col">
          {jobs.map((job, i) => (
            <div
              key={job.company}
              className={`grid grid-cols-[180px_1fr] gap-10 ${
                i < jobs.length - 1 ? 'pb-14' : ''
              }`}
            >
              {/* Date column */}
              <div className="border-r border-[#A78BFA]/15 pr-8 text-right">
                <div
                  className="font-display font-semibold text-[0.78rem]"
                  style={{ color: job.color }}
                >
                  {job.period}
                </div>
                <div className="text-[#6B7280] text-[0.75rem] mt-1">{job.duration}</div>
              </div>

              {/* Content column */}
              <div className="relative">
                {/* Timeline dot */}
                <div
                  className="absolute -left-[50px] top-[6px] w-2.5 h-2.5 rounded-full"
                  style={{
                    background: job.color,
                    boxShadow: `0 0 10px ${job.color}99`,
                  }}
                />

                <div className="font-display font-semibold text-[1.1rem] text-[#E8E6F0] mb-1">
                  {job.role}
                </div>
                <div
                  className="text-sm font-medium mb-4"
                  style={{ color: job.color }}
                >
                  {job.company} · {job.location}
                </div>

                <ul className="text-[#9CA3AF] text-[0.875rem] leading-[1.8] pl-5 m-0 space-y-1">
                  {job.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
