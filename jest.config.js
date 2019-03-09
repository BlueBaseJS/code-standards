const path = require('path');

module.exports = {
  preset: 'react-native',
  testEnvironment: 'node',
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'node'
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': path.resolve(__dirname, './jest/fileMock.ts'),
    '^.+\\.(css|less|scss)$': path.resolve(__dirname, './jest/styleMock.ts')
  },
  transformIgnorePatterns: [
    '/node_modules/(?!ui-components|react-native).+\\.js$',
  ],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/dist/',
  ],
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    'src/**/*.{ts,tsx,js,jsx}',
    '!src/**/*.stories.{ts,tsx,js,jsx}',
    '!src/**/*.d.ts',
    '!**/__stories__/**',
  ],
  coverageThreshold: {
    global: {
      branches: 95,
      functions: 95,
      lines: 95,
      statements: 95
    }
  },
  coveragePathIgnorePatterns: [
    '.*\\.d\\.ts', 
    '<rootDir>/node_modules/',
  ],
  watchPathIgnorePatterns: [
    // 'src/*/output/**',
    // 'output/'
  ],
  setupFilesAfterEnv: [path.resolve(__dirname, './jest/setup.js')]
};
