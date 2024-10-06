/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      // Using CSS variables for dynamic themes
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },

      fontFamily: {
        inter: ['var(--font-inter)'],
        geistSans: ['var(--font-geist-sans)'],
        geistMono: ['var(--font-geist-mono)'],
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      // Adding custom variants for theme-based styling
      addVariant('theme-light', '.theme-light &');
      addVariant('theme-dark', '.theme-dark &');
      addVariant('theme-ocean', '.theme-ocean &');
      addVariant('theme-desert', '.theme-desert &');
    },
  ],
};
