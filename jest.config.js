module.exports = {
  transformIgnorePatterns: [
    "node_modules/(?!(axios)/)",
  ],
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
    '!src/index.tsx',
    '!src/serviceWorker.ts',
    '!src/reportWebVitals.ts',
  ],
  coverageDirectory: 'coverage',
  coverageReporters: ['html', 'text', 'lcov', 'json-summary'],
  resetMocks: true,
  clearMocks: true,
  restoreMocks: true,
};
