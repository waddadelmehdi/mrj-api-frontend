module.exports = {
  // Use the default configuration from react-scripts
  preset: 'react-app',
  
  // Transform configuration
  transformIgnorePatterns: [
    "node_modules/(?!(axios)/)",
  ],
  
  // Coverage configuration
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageReporters: ["text", "lcov", "html", "json"],
  
  // Files to collect coverage from
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!src/**/*.d.ts",
    "!src/index.tsx",
    "!src/reportWebVitals.ts",
    "!src/setupTests.ts",
    "!src/**/*.test.{js,jsx,ts,tsx}",
    "!src/**/*.spec.{js,jsx,ts,tsx}",
    "!src/react-app-env.d.ts"
  ],
  
  // Coverage thresholds
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 50,
      lines: 50,
      statements: 50
    }
  },
  
  // Test environment
  testEnvironment: "jsdom",
  
  // Module file extensions
  moduleFileExtensions: [
    "js",
    "jsx",
    "ts",
    "tsx",
    "json"
  ],
  
  // Setup files
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  
  // Module name mapping for CSS and other assets
  moduleNameMapping: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy"
  }
};
