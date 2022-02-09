const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      'resource-video': {
        base: colors.purple['500'],
        light: colors.purple['900'],
        dark: colors.purple['500'],
      },
      'resource-article': {
        base: colors.green['500'],
        light: colors.blue['500'],
        dark: colors.green['500'],
      },
      'resource-code': {
        base: colors.yellow['500'],
        light: colors.yellow['500'],
        dark: colors.yellow['500'],
      },
      ...colors,
    },
    extend: {},
  },
  purge: {
    safelist: [
      'to-resource-video-dark',
      'to-resource-article-dark',
      'to-resource-code-dark',

      'from-resource-video-dark',
      'from-resource-article-dark',
      'from-resource-code-dark',

      'to-red-400',
      'to-blue-400',
      'to-yellow-400',
      'to-indigo-400',
      'to-green-400',
    ],
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
