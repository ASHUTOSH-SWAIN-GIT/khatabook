/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",  // Shadcn components
    "./node_modules/@magiclabs/ui/**/*.{js,ts,jsx,tsx}", // Magic UI
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
