import type { JestConfigWithTsJest } from 'ts-jest'

const jestConfig: JestConfigWithTsJest = {
  preset: 'ts-jest',

  transform: {
    "\\.(scss|svg)$": "jest-transform-stub",
    "^.+\\.tsx?$": "ts-jest",
  },

  setupFilesAfterEnv: [
    "@testing-library/react",
    "@testing-library/jest-dom"
  ],

  testEnvironment: 'jsdom',

  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
}

export default jestConfig