/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Open Sans'", "sans-serif"],
      },
      colors: {
        page: "#F9FAFB",
        "grey-desc": "#6B7280",
        "grey-card-border": "#E5E7EB",
        "blue-heading": "#374151",
        theme: {
          DEFAULT: "#272e71", //Default theme color
        },
      },
      borderRadius: {
        DEFAULT: "6px",
      },
    },
    container: {
      center: true,
      padding: '0.625rem',
    },
  },
  plugins: [],
}