import type { Config } from "tailwindcss"
const { fontFamily } = require("tailwindcss/defaultTheme")

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
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
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "rotate": {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "spin-slow": "rotate 40s linear infinite",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        DM: ["DM Sans", "sans-serif"],
        IBM: ["IBM Plex Sans", "sans-serif"],
        Montserrat: ["Montserrat", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
        Nunito: ["Nunito", "sans-serif"],
        Jost: ["Jost", "sans-serif"],
        Playwrite: ["Playwrite DE Grund", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config