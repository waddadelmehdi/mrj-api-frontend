#!/bin/bash

# Fix Coverage Script for mrj-api-frontend
# This script resolves the Jest/Babel coverage issue by cleaning the project,
# reinstalling dependencies, and running tests with coverage

echo "🔧 Starting coverage fix process..."

# Clean the project
echo "🧹 Cleaning project..."
rm -rf node_modules
rm -rf coverage
rm -f package-lock.json

# Clear npm cache
echo "🗑️ Clearing npm cache..."
npm cache clean --force

# Reinstall dependencies
echo "📦 Reinstalling dependencies..."
npm install

# Verify critical dependencies are installed
echo "✅ Verifying dependencies..."
if npm ls wrappy >/dev/null 2>&1; then
    echo "✅ wrappy dependency is available"
else
    echo "❌ wrappy dependency is missing"
fi

# Run tests with coverage
echo "🧪 Running tests with coverage..."
npm run test:coverage

# Check if coverage was generated
if [ -d "coverage" ]; then
    echo "✅ Coverage generated successfully!"
    echo "📊 Coverage report available in the coverage/ directory"
    echo "🌐 Open coverage/lcov-report/index.html to view detailed report"
else
    echo "❌ Coverage generation failed!"
    exit 1
fi

echo "🎉 Coverage fix completed successfully!"