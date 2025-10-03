// jest.config.js
export default {
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['./jest.setup.js'],
    transform: {
      '^.+\\.[tj]sx?$': ['ts-jest', {
        useESM: true,
      }],
    },
    moduleFileExtensions: ['js', 'ts', 'tsx', 'json'],
    extensionsToTreatAsEsm: ['.ts', '.tsx'],
  };