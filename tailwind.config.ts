import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Neo-Brutalist Color System
        "bleu-nuit": "var(--bleu-nuit)",
        "bleu-marine": "var(--bleu-marine)",
        "bleu-charron": "var(--bleu-charron)",
        "bleu-accent": "var(--bleu-accent)",
        "bleu-fumee": "var(--bleu-fumee)",
        "grey-light": "var(--grey-light)",
      },
    },
  },
  plugins: [],
};

export default config;
