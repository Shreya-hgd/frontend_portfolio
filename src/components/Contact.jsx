import React from 'react';

const socialLinks = [
  { label: 'LinkedIn',   href: 'https://www.linkedin.com/in/shreya-hh/' },
  { label: 'GitHub',     href: 'https://github.com/Shreya-hgd' },
  { label: 'Résumé PDF', href: '/frontend_portfolio/resume.pdf' },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 pb-36 px-8">
      <div className="max-w-lg mx-auto text-center">
        <p className="font-display text-[0.7rem] font-semibold tracking-[0.18em] uppercase text-[#A78BFA] mb-4">
          Get In Touch
        </p>

        <h2 className="font-display text-[2.5rem] font-bold tracking-tight leading-tight mb-5">
          Let's build<br />
          <span className="gradient-text">something great.</span>
        </h2>

        <p className="text-[#6B7280] text-[0.95rem] leading-[1.75] mb-10">
          Open to frontend roles, freelance projects, and interesting conversations
          about React, UX, or biometric tech.
        </p>

        <a
          href="mailto:shreyahegde93@gmail.com"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-[#7C3AED] to-[#3B82F6] text-white font-display font-semibold text-base tracking-wide px-10 py-4 rounded-full no-underline transition-all duration-200 hover:opacity-85 hover:scale-[1.03]"
        >
          shreyahegde93@gmail.com
        </a>

        <div className="flex justify-center gap-7 mt-10">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="text-[#9CA3AF] hover:text-[#A78BFA] text-xs uppercase tracking-widest no-underline transition-colors duration-200 font-display font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
