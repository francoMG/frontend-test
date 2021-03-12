// tailwind.config.js
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'app-blue': '#1E1ADD',
        'app-bg': '#F7FAFC',
        'app-disabled': '#718096',
        'app-disabled-2': '#A0AEC0',
        'app-success': '#3CC13B',
        'app-error': '#F03738',
        'app-title': '#4A5568',
        dark: '#0d212f',
        'dark-2': '#173b4e',
      },
      borderRadius: {
        app: '4px',
        'app-2': '5px',
        'app-3': '8px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
