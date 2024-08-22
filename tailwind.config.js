/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      
      colors: {
        light: {
          background: '#f3f4f6',
          text: '#1f2937',
          primary: '#3b82f6',
          secondary: '#64748b',
        },
        dark: {
          background: '#1f2937',
          text: '#f3f4f6',
          primary: '#3b82f6',
          secondary: '#9ca3af',
        },
      },
    },
  },
  plugins: [],
};
