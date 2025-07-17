module.exports = {
  transformIgnorePatterns: [
    "node_modules/(?!(axios)/)",
  ],
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
    '!src/index.tsx',
    '!src/reportWebVitals.ts',
  ],
  coverageDirectory: 'coverage',
  coverageReporters: ['html', 'text', 'lcov'],
  resetMocks: true,
  clearMocks: true,
};
