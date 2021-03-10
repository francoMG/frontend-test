// tailwind.config.js
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        'app-blue': '#1E1ADD',
        'app-background': '#F7FAFC',
      },
      borderRadius: {
        app: '5px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
