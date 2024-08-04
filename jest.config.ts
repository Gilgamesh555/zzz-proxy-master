import type { Config } from "jest";

// Sync object
const config: Config = {
  verbose: true,
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    "^.+\\.tsx?$": "ts-jest", // If you need to process .js files
  },
};
export default config;
