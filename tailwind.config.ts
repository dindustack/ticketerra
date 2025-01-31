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
     
    
    },
  },
  
} satisfies Config;

export default config;
