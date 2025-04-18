import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["./jest.setup.ts"],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{ts,tsx}", "!src/**/*.d.ts"],
  coverageDirectory: "coverage",
};

export default config;

// export default {
//   preset: "ts-jest",
//   testEnvironment: "jsdom",
//   setupFilesAfterEnv: ["./jest.setup.ts"],
//   moduleNameMapper: {
//     "\\.(css|less|scss|sass)$": "identity-obj-proxy",
//   },
//   collectCoverage: true,
//   collectCoverageFrom: ["src/**/*.{ts,tsx}", "!src/**/*.d.ts"],
//   coverageDirectory: "coverage",
// };
