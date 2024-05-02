import type { JestConfigWithTsJest } from 'ts-jest'

const jestConfig: JestConfigWithTsJest = {
  preset: 'ts-jest',

  transform: {
    "\\.(scss)$": "jest-transform-stub",
    "^.+\\.tsx?$": "ts-jest",
  },

  setupFilesAfterEnv: [
    "@testing-library/react",
    "@testing-library/jest-dom"
  ],

  testEnvironment: 'jsdom',
}

export default jestConfig