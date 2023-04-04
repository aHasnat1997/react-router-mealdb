/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#d3ed84",

          "secondary": "#aff799",

          "accent": "#c67305",

          "neutral": "#131820",

          "base-100": "#5E3262",

          "info": "#4673CE",

          "success": "#11977D",

          "warning": "#C59B11",

          "error": "#DA254F",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

