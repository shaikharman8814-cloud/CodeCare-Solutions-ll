/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F5F1EC',
        creamSoft: '#F8F5EF',
        sepia: '#E7DED2',
        ochre: '#B99A5D',
        brass: '#C9A961',
        umber: '#7C5C2E',
        slateInk: '#2F2418',
      },
      fontFamily: {
        display: ['"Cinzel"', 'serif'],
        serif: ['"EB Garamond"', '"Cormorant"', 'serif'],
        body: ['"Cormorant"', '"EB Garamond"', 'serif'],
      },
      opacity: {
        12: '0.12',
        15: '0.15',
        35: '0.35',
        45: '0.45',
        55: '0.55',
        65: '0.65',
        98: '0.98',
      },
      boxShadow: {
        card: '0 18px 40px -28px rgba(47, 36, 24, 0.35)',
        lift: '0 40px 70px -45px rgba(47, 36, 24, 0.55)',
      },
    },
  },
  plugins: [],
};
