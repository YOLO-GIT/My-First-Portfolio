/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    relative: true,
    transform: (content) => content.replace(/taos:/g, ''),
    files: ['./*.{html,js}', 'node_modules/preline/dist/*.js'],
  },
  theme: {
    extend: {},
  },
  plugins: [
    require('taos/plugin'),
    require('tailwind-animatecss'),
    require('@tailwindcss/forms'),
    require('preline/plugin'),
  ],
  safelist: [
    '!duration-[0ms]',
    '!delay-[0ms]',
    'html.js :where([class*="taos:"]:not(.taos-init))'
  ]
}