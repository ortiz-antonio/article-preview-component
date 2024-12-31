import { defineConfig, presetAttributify, presetMini } from 'unocss';

import theme from './theme';

export default defineConfig({
  content: {
    filesystem: ['**/*.{js,ts,jsx,tsx,njk}'],
  },
  presets: [
    presetMini({ preflight: false }),
    presetAttributify({ preflight: false }),
  ],

  theme: theme,
});
