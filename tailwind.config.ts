import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "midnight-blue": "hsla(282, 83%, 52%, 1)",
        "ocean-teal": "hsla(230, 76%, 59%, 1)",
        "charcoal-gray": "hsla(230, 31%, 31%, 1)",
        "pearl-white": "hsla(231, 100%, 97%, 1)",
        "pale-sky-blue": "hsla(230, 60%, 98%, 1)",
        "slate-gray": "hsla(231, 33%, 34%, 1)",
        "dusty-rose": "hsla(224, 20%, 49%, 1)",
        "crimson-red": "hsla(14, 83%, 74%, 1)",
        "mint-green": "hsla(204, 94%, 68%, 1)",
      },
      fontSize: {
        h1: [
          "6rem",
          {
            letterSpacing: "-0.33px",
          },
        ],
        h2: [
          "5rem",
          {
            letterSpacing: "-0.25px",
          },
        ],
        h3: [
          "1.125rem",
          {
            letterSpacing: "-0.25px",
          },
        ],
        h4: [
          "0.875rem",
          {
            letterSpacing: "-0.2px",
          },
        ],
        "body-1": "4rem",
        "body-2": "0.9375rem",
        "body-3": "0.8125rem",
      },
    },
  },
  plugins: [],
};
export default config;
