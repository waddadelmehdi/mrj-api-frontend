module.exports = {
  // ... other config
  transformIgnorePatterns: [
    "node_modules/(?!(axios)/)", // add any other ESM deps here
  ]
};
