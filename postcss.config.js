module.exports = {
  plugins: {
    tailwindcss: {},
    'postcss-focus-visible': {
      replaceWith: '[data-focus-visible-added]',
    },
    autoprefixer: {},
    'postcss-flexbugs-fixes': {},
    'postcss-100vh-fix': {},
  },
};
