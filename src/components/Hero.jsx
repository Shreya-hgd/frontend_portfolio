import React from 'react';

const skills = [
  'React.js', 'JavaScript ES6+', 'Redux', 'Context API',
  'Tailwind CSS', 'Material UI', 'JWT Auth', 'REST APIs',
  'Figma', 'WCAG',
];

const stats = [
  { value: '8+',   label: 'Years of frontend experience' },
  { value: '10K+', label: 'Users on Cielo365 platform' },
  { value: '40%',  label: 'Load time reduction via optimisation' },
  { value: '30%',  label: 'Dev efficiency gain from reusable components' },
];

export default function Hero() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center relative overflow-hidden pt-28 pb-20 px-8"
    >
      {/* Background glows */}
      <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] rounded-full bg-[#7C3AED]/10 blur-[90px] pointer-events-none" />
      <div className="absolute bottom-[50px] left-[-80px] w-[350px] h-[350px] rounded-full bg-[#3B82F6]/08 blur-[90px] pointer-events-none" />

      <div className="max-w-5xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* Left: intro */}
        <div className="animate-fade-in-up">
          <p className="font-display text-[0.7rem] font-semibold tracking-[0.18em] uppercase text-[#A78BFA] mb-4">
            Frontend Developer.
          </p>

          <h1 className="font-display text-[clamp(2.4rem,5vw,4rem)] font-bold leading-[1.1] tracking-tight mb-6">
            Shreya<br />
            <span className="gradient-text">Hegde</span>
          </h1>

          <p className="text-[#9CA3AF] text-[1.05rem] leading-[1.75] max-w-[480px] mb-8">
            Building scalable, accessible web products at the intersection of{' '}
            <span className="text-[#C4B5FD]">React performance</span> and thoughtful UX.
            Currently shaping biometric access platforms at ZKTeco.
          </p>

          {/* Skill pills */}
          <div className="flex flex-wrap gap-2 mb-9">
            {skills.map((s) => (
              <span
                key={s}
                className="bg-[#A78BFA]/10 border border-[#A78BFA]/20 text-[#C4B5FD] text-xs font-display font-medium tracking-wide px-3 py-1 rounded-full"
              >
                {s}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-5 items-center">
            <a
              href="mailto:shreyahegde93@gmail.com"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#7C3AED] to-[#3B82F6] text-white font-display font-semibold text-sm tracking-wide px-8 py-3.5 rounded-full no-underline transition-all duration-200 hover:opacity-85 hover:scale-[1.03]"
            >
              Say Hello →
            </a>
            <a
              href="https://www.linkedin.com/in/shreya-hh/"
              target="_blank"
              rel="noreferrer"
              className="text-[#9CA3AF] hover:text-[#A78BFA] text-sm no-underline transition-colors duration-200"
            >
              LinkedIn ↗
            </a>
            {/* <a
              href="https://github.com/Shreya-hgd"
              target="_blank"
              rel="noreferrer"
              className="text-[#9CA3AF] hover:text-[#A78BFA] text-sm no-underline transition-colors duration-200"
            >
              GitHub ↗
            </a> */}
          </div>
        </div>

        {/* Right: stats grid */}
        <div className="grid grid-cols-2 gap-4 animate-float">
          {stats.map(({ value, label }) => (
            <div
              key={value}
              className="bg-white/[0.025] border border-white/[0.06] rounded-2xl p-7 hover:border-[#A78BFA]/40 hover:shadow-[0_0_20px_rgba(167,139,250,0.12)] transition-all duration-300"
            >
              <div className="font-display text-[2.5rem] font-bold gradient-text leading-none mb-2">
                {value}
              </div>
              <div className="text-[#6B7280] text-[0.8rem] leading-[1.45]">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
