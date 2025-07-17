#!/bin/bash

# fix-coverage.sh
# Script to clean project, install dependencies, and run coverage tests
# This script addresses Jest/Babel wrappy coverage issues

set -e

echo "🧹 Cleaning project..."
# Remove node_modules and package-lock.json
rm -rf node_modules
rm -f package-lock.json

# Clean coverage directory
rm -rf coverage

echo "📦 Installing critical dependencies..."
# Install the critical packages first to avoid conflicts
npm install --save-dev jest@^27.5.1 babel-plugin-istanbul@^6.1.1 wrappy@^1.0.2

echo "🔄 Reinstalling all dependencies..."
# Install all dependencies with legacy peer deps
npm install --legacy-peer-deps

echo "🧪 Running coverage tests..."
# Run tests with coverage
npm test -- --coverage --watchAll=false

echo "✅ Coverage tests completed successfully!"
echo "📊 Coverage report available in ./coverage/"