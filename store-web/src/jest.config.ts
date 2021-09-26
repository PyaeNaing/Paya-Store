// jest.config.ts
import type {Config} from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  testMatch: ['**/__tests__/*.tsx?(x)'],
};
export default config;

