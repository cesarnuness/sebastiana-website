/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./*.html"],
  theme: {
    extend: {
      colors: {
        cor: {
          primaria: "#ff6b6b" /* Vermelho */,
          secundaria: "#0a1831" /* Amarelo */,
          fundo: "#f3f4ed" /* Bege */,
          texto: "#333333" /* Preto */,
        },
      },
    },
  },
  plugins: [],
};
