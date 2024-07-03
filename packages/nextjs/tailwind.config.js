/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./utils/**/*.{js,ts,jsx,tsx}",
    " './node_modules/@tremor/**/*.{js,ts,jsx,tsx}'",
  ],
  plugins: [
    require("daisyui"),
    require("tailwind-scrollbar")({ nocompatible: true }),
    require("@headlessui/tailwindcss"),
    require("@tailwindcss/forms"),
  ],
  darkTheme: "scaffoldEthDark",
  // DaisyUI theme colors
  daisyui: {
    themes: [
      {
        scaffoldEth: {
          primary: "#F00420",
          "primary-content": "#ffffff",
          secondary: "#ffffff",
          "secondary-content": "#212638",
          "secondary-text": "#4A5568",
          accent: "#93BBFB",
          "accent-content": "#212638",
          neutral: "#cbd5e0",
          "op-neutral-900": "#05060B",
          "neutral-content": "#8f9ba8",
          "base-100": "#ffffff",
          "base-200": "#f4f8ff",
          "base-300": "#F1F4F9",
          "base-400": "#E2Ee33",
          "base-content": "#212638",
          "base-content-100": "#323A43",
          info: "#93BBFB",
          success: "#34EEB6",
          warning: "#F7EAE1",
          "range-error": "#ff0000",
          "warning-content": "#DD6B20",
          error: "#FF8863",

          "--btn-text-case": "none",

          "--rounded-btn": "0.75rem",

          ".tooltip": {
            "--tooltip-tail": "6px",
          },
        },
      },
      {
        scaffoldEthDark: {
          primary: "#212638",
          "primary-content": "#F9FBFF",
          secondary: "#1f2937",
          "secondary-content": "#F9FBFF",
          "secondary-text": "#4A5568",

          accent: "#4969A6",
          "accent-content": "#F9FBFF",
          neutral: "#F9FBFF",
          "op-neutral-900": "#F9FBFF",
          "neutral-content": "#385183",

          "base-100": "#1A1E23",
          "base-200": "#15171A",
          "base-300": "#212638",
          "base-400": "#E2E8F0",
          "base-content": "#F9FBFF",
          "base-content-100": "#fff",
          info: "#385183",
          success: "#34EEB6",
          warning: "#FFCF72",
          error: "#FF8863",

          "--btn-text-case": "none",

          "--rounded-btn": "0.75rem",

          ".tooltip": {
            "--tooltip-tail": "6px",
            "--tooltip-color": "hsl(var(--p))",
          },
        },
      },
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        sora: "Sora",
      },
      colors: {
        lightGray: "#68778D",
        lightBlack: "#202327",
        "secondary-text": "#4A5568",
        customGray: "#FBFCFE",
        customWhite: "#E2E8F0",
        customGrayBtn: "#323A43",
        OPlightgray: "#CBD5E0",

        OPblack: "#4d4f52",
        OPred: "#ff0000",
        OPwhite: "#ffffff",
        OPdarkgray: "#68778D",
        OPoffwhite: "#F8FAFC",
        OPlightgreen: "#DEEDDE",
        OPdarkgreen: "#5BA85A",
        OPlightblue: "#D7E6F9",
        OPblue: "#2173DF",
        OPgray: "#a2aab6",
        OPbluegray: "#7f97b0",
        OPextradarkgray: "#47556a",
        twitterBlue: "#1DA1F2",
        purple: "#9104FF",
        tremor: {
          brand: {
            faint: colors.blue[50],
            muted: colors.blue[200],
            subtle: colors.blue[400],
            DEFAULT: colors.blue[500],
            emphasis: colors.blue[700],
            inverted: colors.white,
          },
          background: {
            muted: colors.gray[50],
            subtle: colors.gray[100],
            DEFAULT: colors.white,
            emphasis: colors.gray[700],
          },
          border: {
            DEFAULT: colors.gray[200],
          },
          ring: {
            DEFAULT: colors.gray[200],
          },
          content: {
            subtle: colors.gray[400],
            DEFAULT: colors.gray[500],
            emphasis: colors.gray[700],
            strong: colors.gray[900],
            inverted: colors.white,
          },
        },
        // dark mode
        "dark-tremor": {
          brand: {
            faint: "#0B1229",
            muted: colors.blue[950],
            subtle: colors.blue[800],
            DEFAULT: colors.blue[500],
            emphasis: colors.blue[400],
            inverted: colors.blue[950],
          },
          background: {
            muted: "#131A2B",
            subtle: colors.gray[800],
            DEFAULT: colors.gray[900],
            emphasis: colors.gray[300],
          },
          border: {
            DEFAULT: colors.gray[800],
          },
          ring: {
            DEFAULT: colors.gray[800],
          },
          content: {
            subtle: colors.gray[600],
            DEFAULT: colors.gray[500],
            emphasis: colors.gray[200],
            strong: colors.gray[50],
            inverted: colors.gray[950],
          },
        },
      },

      boxShadow: {
        center: "0 0 12px -2px rgb(0 0 0 / 0.05)",
        // light
        "tremor-input": "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        "tremor-card": "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        "tremor-dropdown": "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
        // dark
        "dark-tremor-input": "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        "dark-tremor-card": "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        "dark-tremor-dropdown": "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
      },
      borderRadius: {
        "tremor-small": "0.375rem",
        "tremor-default": "0.5rem",
        "tremor-full": "9999px",
      },
      fontSize: {
        "tremor-label": ["0.75rem", { lineHeight: "1rem" }],
        "tremor-default": ["0.875rem", { lineHeight: "1.25rem" }],
        "tremor-title": ["1.125rem", { lineHeight: "1.75rem" }],
        "tremor-metric": ["1.875rem", { lineHeight: "2.25rem" }],
      },
      safelist: [
        {
          pattern:
            /^(bg-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
          variants: ["hover", "ui-selected"],
        },
        {
          pattern:
            /^(text-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
          variants: ["hover", "ui-selected"],
        },
        {
          pattern:
            /^(border-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
          variants: ["hover", "ui-selected"],
        },
        {
          pattern:
            /^(ring-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
        },
        {
          pattern:
            /^(stroke-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
        },
        {
          pattern:
            /^(fill-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
        },
      ],
      animation: {
        "pulse-fast": "pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      screens: {
        xs: "480px",
        "b-md": "880px",
        "3xl": "1800px",
      },
    },
  },
};
