#!/usr/bin/env node

import screenTokens from '../build/tokens/screens.json' with { type: 'json' };

export const fontConfig = {
  minWidth: Number.parseInt(screenTokens.screens.sm.$value),
  maxWidth: Number.parseInt(screenTokens.screens.lg.$value),
  minFontSize: 18,
  maxFontSize: 22,
  minTypeScale: 1.175,
  maxTypeScale: 1.25,
  positiveSteps: 5,
  negativeSteps: 0,
};
