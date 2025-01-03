#!/usr/bin/env node

import token from '../build/tokens/breakpoints.json' with { type: 'json' };

export const spaceConfig = {
  minWidth: Number.parseInt(token.breakpoints.sm.$value),
  maxWidth: Number.parseInt(token.breakpoints.lg.$value),
  minSize: 18,
  maxSize: 22,
  positiveSteps: [1, 2, 3, 4, 6, 7],
  negativeSteps: [0.75, 0.5, 0.25],
  customSizes: ['s-l', 'xs-m'],
};
