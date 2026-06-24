import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.05] py-6 px-8 text-center">
      <p className="font-display text-[#57657a] text-[0.76rem] m-0">
        © {new Date().getFullYear()} Shreya Hegde · Designed & built with React
      </p>
    </footer>
  );
}
