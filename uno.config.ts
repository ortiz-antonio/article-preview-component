import { defineConfig, presetAttributify, presetMini } from 'unocss';

import theme from './theme'

export default defineConfig({
  content: {
    filesystem: [
      '**/*.{js,ts,jsx,tsx,njk}',
    ],
  },
  presets: [
    presetMini({preflight:false}),
    presetAttributify({preflight:false}),
  ],

  theme: theme,
  // preflights: [
  // {
  //   getCSS: ({ theme }) => {
  //     const cssVars = Object.entries(theme.colors || {})
  //       .map(([key, value]) => `--color-${key}: ${value};`)
  //       .join('\n');
  //     return `:root {\n${cssVars}\n}`;
  //   },
  // },
  //   ]
})
