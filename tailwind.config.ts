import type { Config } from "tailwindcss";

export default {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:"#000000",
        secondary:"#F2F5F9",
        silver:"rgba(11, 9, 9, 0.5)",
        tabColor:"#7d7c79",
        
      },
      backgroundImage:{
        gradientBg:"linear-gradient(180deg, #FF9C1A, #ED250A)"
      
      }
    },
  },
  plugins: [],
} satisfies Config;
