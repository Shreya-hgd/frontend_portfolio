import React, { useState, useEffect } from 'react';

const navLinks = [
  { label: 'About',      href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Contact',    href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-xl bg-[#0A0A0F]/85 border-b border-white/5 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-5xl mx-auto px-8 py-5 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#about"
          className="font-display font-bold text-lg text-[#E8E6F0] tracking-tight no-underline"
        >
          SH<span className="text-[#A78BFA]">.</span>
        </a>

        {/* Links */}
        <ul className="flex gap-9 list-none m-0 p-0">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[#9CA3AF] hover:text-[#A78BFA] text-xs uppercase tracking-widest no-underline transition-colors duration-200 font-medium"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
