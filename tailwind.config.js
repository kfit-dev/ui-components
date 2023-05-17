module.exports = {
  content: ['./src/**/*.tsx', './src/**/*.ts'],
  presets: [require('fave-tailwindcss-presets')],
  theme: {
    extend: {
      screens: {
        // overrides existing media queries
        xs: {'min': '0px', 'max': '575px' },
        sm: {'min': '576px', 'max': '767px' },
        md: {'min': '768px', 'max': '991px' },
        lg: {'min': '992px', 'max': '1199px' },
        xl: {'min': '1200px'}
      }
    },
  },
}
