const { defaults: tsjPreset } = require('ts-jest/presets');

module.exports = {
  ...tsjPreset,

  preset: 'react-native',
  testEnvironment: 'node',
  transform: {
    // '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.(js)$': '<rootDir>/node_modules/babel-jest',
    '\\.(ts|tsx)$': '<rootDir>/node_modules/ts-jest/preprocessor.js'
  },
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'node'
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '@bluebase/code-standards/jest/fileMock.js',
    '^.+\\.(css|less|scss)$': '@bluebase/code-standards/jest/styleMock.js'
  },
  transformIgnorePatterns: [
    '/node_modules/(?!ui-components|react-native).+\\.js$',
  ],
  testPathIgnorePatterns: [
    '\\.snap$',
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
  cacheDirectory: '.jest/cache',
  globals: {
    'ts-jest': {
      babelConfig: true,
    }
  },
};
