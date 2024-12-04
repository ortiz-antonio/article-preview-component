module.exports = {
  plugins: [
    require('postcss-import-ext-glob'),
    require('postcss-import'),
    require('tailwindcss'),
    ...(process.env.NODE_ENV === 'production'
        ? [require("cssnano")({ preset: "default" })]
        : [])
  ]
};
