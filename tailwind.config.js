/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
      },
      colors: {
        bg: "#0A0A0F",
        surface: "rgba(255,255,255,0.025)",
        border: "rgba(255,255,255,0.06)",
        accent: "#A78BFA",
        "accent-blue": "#60A5FA",
        "accent-green": "#34D399",
        muted: "#6B7280",
        subtle: "#9CA3AF",
        text: "#E8E6F0",
        "text-soft": "#C4B5FD",
      },
    },
  },
  plugins: [],
};
