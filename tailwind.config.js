/**
 * @format
 * @type {import('tailwindcss').Config}
 */

const { Scale } = require('lucide-react')

module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    colors: {
      "primary-color": "#001F3F",
      "secondary-color": "#5A5A5A",
      "green-color": "#16A085",
      "accent-color-1": "#4682B4",
      "accent-color-1-focus": "#4291d4",
      "accent-color-2": "#A9A9A9",
      "background-color": "#F5F5F5",
      "error-color": "#E74C3C",
      "error-color-focus": "#f04230",
    },

    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "pop-up": {
          from: { transform: "scale(100%)"},
          to: { transform: "scale(110%)"},
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pop-up": "pop-up 0.5s forwards ",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("tailwindcss-animated")],
};
