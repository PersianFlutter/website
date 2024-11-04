import defaultTheme from 'tailwindcss/defaultTheme';
import typographyPlugin from '@tailwindcss/typography';

function withOpacityValue(variable) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`;
    }
    return `rgb(var(${variable}) / ${opacityValue})`;
  };
}

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,json,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--aw-color-primary)',
        secondary: 'var(--aw-color-secondary)',
        accent: 'var(--aw-color-accent)',
        default: 'var(--aw-color-text-default)',
        muted: 'var(--aw-color-text-muted)',
        pfColorFirst: withOpacityValue('--pf-color-first'),
        pfColorSecond: withOpacityValue('--pf-color-second'),
        pfColorThird: withOpacityValue('--pf-color-third'),
        pfColorFourth: withOpacityValue('--pf-color-fourth'),
      },
      fontFamily: {
        sans: ['var(--aw-font-sans, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
        serif: ['var(--aw-font-serif, ui-serif)', ...defaultTheme.fontFamily.serif],
        heading: ['var(--aw-font-heading, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
        pinar: ['pinar', 'var(--aw-font-sans, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
      },
      fontWeight: {
        light: '300',
        regular: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
      },
      keyframes: {
        jello: {
          'from, 11.1%,to': {
            transform: 'translate3d(0, 0, 0)',
          },

          '22.2%': {
            transform: 'skewX(-12.5deg) skewY(-12.5deg)',
          },

          '33.3%': {
            transform: 'skewX(6.25deg) skewY(6.25deg)',
          },

          '44.4%': {
            transform: 'skewX(-3.125deg) skewY(-3.125deg)',
          },

          '55.5%': {
            transform: 'skewX(1.5625deg) skewY(1.5625deg)',
          },

          '66.6%': {
            transform: 'skewX(-0.78125deg) skewY(-0.78125deg)',
          },

          '77.7%': {
            transform: 'skewX(0.390625deg) skewY(0.390625deg)',
          },

          '88.8%': {
            transform: 'skewX(-0.1953125deg) skewY(-0.1953125deg)',
          },
        },
      },
      animation: {
        jello: 'jello 2s infinite',
      },
    },
  },
  plugins: [typographyPlugin],
  darkMode: 'class',
};
