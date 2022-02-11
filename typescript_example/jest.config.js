/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  "preset": 'ts-jest',
  "testEnvironment": 'node',
  "coverageThreshold": {
    "global": {
      "branches": 100,
      "functions": 100,
      "lines": 100,
      "statements": 0
    }
  },
  "rootDir": "./",
  "verbose": true,
  "maxWorkers": 1,
  "collectCoverageFrom": [
    "src/**/*.ts",
    "index.ts"
  ]
};