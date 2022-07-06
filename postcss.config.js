module.exports = {
  plugins: {
    tailwindcss: {},
    'postcss-focus-visible': {
      replaceWith: '[data-focus-visible-added]',
    },
    'postcss-flexbugs-fixes': {},
    'postcss-100vh-fix': {},
    autoprefixer: {},
  },
};
