import React from 'react';

const skills = [
  'React.js', 'JavaScript ES6+', 'Redux', 'Context API', 'React Hooks',
  'HTML5', 'CSS3', 'Tailwind CSS', 'Material UI', 'Bootstrap',
  'SASS / LESS', 'Figma', 'Adobe XD', 'Git', 'Postman',
  'Swagger', 'REST APIs', 'JWT Auth', 'WCAG Accessibility',
  'React Testing Library', 'Lazy Loading', 'Code Splitting',
  'Agile / Scrum', 'AI Tools (Claude, Copilot, ChatGPT)',
];

export default function Skills() {
  return (
    <section className="py-20 px-8">
      <div className="max-w-5xl mx-auto">
        <p className="font-display text-[0.7rem] font-semibold tracking-[0.18em] uppercase text-[#A78BFA] mb-10 text-center">
          Technical Stack
        </p>
        <div className="flex flex-wrap gap-2.5 justify-center">
          {skills.map((skill) => (
            <span
              key={skill}
              className="bg-[#A78BFA]/08 border border-[#A78BFA]/18 text-[#C4B5FD] text-[0.8rem] font-display font-medium tracking-wide px-4 py-1.5 rounded-full hover:border-[#A78BFA]/50 hover:bg-[#A78BFA]/15 transition-all duration-200 cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
