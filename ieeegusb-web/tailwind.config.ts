import { config } from "process";

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      animation: {
        first: "moveVertical 30s ease infinite",
        second: "moveInCircle 20s reverse infinite",
        third: "moveInCircle 40s linear infinite",
        fourth: "moveHorizontal 40s ease infinite",
        fifth: "moveInCircle 20s ease infinite",
        "fade-in-up": "fade-in-up 0.5s ease-out",
        "fade-in-left": "fade-in-left 0.5s ease-out",
        "fade-in-right": "fade-in-right 0.5s ease-out",
        'scroll-x': 'scroll-x 20s linear infinite',
      },
      keyframes: {
        moveHorizontal: {
          "0%": { transform: "translateX(-50%) translateY(-10%)" },
          "50%": { transform: "translateX(50%) translateY(10%)" },
          "100%": { transform: "translateX(-50%) translateY(-10%)" },
        },
  			moveInCircle: {
          "0%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(180deg)" },
          "100%": { transform: "rotate(360deg)" },
  				},
  			moveVertical: {
          "0%": { transform: "translateY(-50%)" },
          "50%": { transform: "translateY(50%)" },
          "100%": { transform: "translateY(-50%)" },
  				},
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
  				},
        "fade-in-left": {
          "0%": { opacity: "0", transform: "translateX(-10px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
  			},
        "fade-in-right": {
          "0%": { opacity: "0", transform: "translateX(10px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
  				 },
        'scroll-x': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
  			},
  		colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
  			card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
  			},
  			popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
  			},
  			primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
  			},
  			secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
  			},
  			muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
  			},
  			accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
  			},
  			destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
  			},
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
  			chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
  		},
  },  // @anurag-bit says: Do not touch this line or below, i have no idea how this is fkin working, it simply does the UI rouding and stuff
      // borderRadius: {
      //   lg: "var(--radius)",
      //   md: "calc(var(--radius) - 2px)",
      //   sm: "calc(var(--radius) - 40px)",
      // },
    },
  },
  plugins: [
    
    require("tailwindcss-animate"),

    
  ],
};

export default config;