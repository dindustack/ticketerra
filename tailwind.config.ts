/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
  	extend: {
  		fontFamily: {
  			uniform: [
  				'var(--font-uniform)'
  			],
  			wagner: [
  				'var(--font-wagner)'
  			]
  		},
  		colors: {
  			black: '#101010',
  			gray: '#a0a0a0',
			purple: "#7f56d8",
			cyan: "#f5eaff"
  		},
		container: {
  			padding: '1rem',
  			center: true
  		},
  		
  	}
  },
    plugins: [require("tailwindcss-animate")]
} satisfies Config;

export default config;
