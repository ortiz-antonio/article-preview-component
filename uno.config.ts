import { defineConfig, presetUno } from 'unocss';

import theme from './theme';

export default defineConfig({
  content: {
    filesystem: ['**/*.{js,ts,jsx,tsx,njk}'],
  },
  theme: theme,
  presets: [presetUno({ preflight: false })],
});
