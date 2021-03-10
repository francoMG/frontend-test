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
        'app-disabled-2': '#A0AEC0',
        'app-success': '#3CC13B',
        'app-error': '#F03738',
        'app-title': '#4A5568',
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
