#!/usr/bin/env node

import screenTokens from '../build/tokens/screens.json' with { type: 'json' };

export const spaceConfig = {
  minWidth: Number.parseInt(screenTokens.screens.sm.$value),
  maxWidth: Number.parseInt(screenTokens.screens.lg.$value),
  minSize: 18,
  maxSize: 22,
  positiveSteps: [1, 2, 3, 4, 6, 7],
  negativeSteps: [0.75, 0.5, 0.25],
  customSizes: ['s-l', 'xs-m'],
};
