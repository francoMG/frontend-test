// tailwind.config.js
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        'app-blue': '#1E1ADD',
        'app-background': '#F7FAFC',
        'app-disabled': '#718096',
      },
      borderRadius: {
        app: '5px',
        'app-2': '8px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
