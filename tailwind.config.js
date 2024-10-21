/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-bg": "#00a651", // Wrap color values in quotes
        "secondary-bg": "#00adee", // Wrap color values in quotes
      },
    },
  },
  plugins: [],
};
