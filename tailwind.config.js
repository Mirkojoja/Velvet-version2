const colors = require('tailwindcss/colors')

module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false,
    theme: {
      extend: {
        backgroundImage: {
          'bg-image': "url('https://images.unsplash.com/photo-1526234362653-3b75a0c07438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80')",
          'bg-fresh': "url('https://images.unsplash.com/photo-1542794961-5647fd97e6f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')",
          
        },
        colors: {
          rose: colors.rose,
          emerald: colors.emerald,
          darkLight: 'rgba(47, 50, 56, 0.18)',
          transparent: '#0000005e',
          bgPrimary: '#0b0b0b'
        }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }