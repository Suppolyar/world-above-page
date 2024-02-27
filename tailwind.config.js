/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'logo-screen': {'raw': '(max-height: 860px)'}
    },
    extend: {
      backgroundImage: {
        "world-above": "url('@/assets/bg.jpeg')",
        "button-bg": "url('@/assets/button.svg')",
      },
      colors: {
        footer: '#131114',
        block: '#EACDAB',
        'block-inner': '#D7B693'
      },
      borderRadius: {
        xd: '20px'
      }
    },
  },
  plugins: [],
};
