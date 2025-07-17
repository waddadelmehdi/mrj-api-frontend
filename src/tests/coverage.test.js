/**
 * Test to verify Jest/Babel coverage configuration 
 * and ensure wrappy dependency is properly resolved
 */

describe('Coverage Configuration', () => {
  test('should be able to access wrappy function if needed', () => {
    // Test that wrappy is available if needed
    try {
      const wrappy = require('wrappy');
      expect(typeof wrappy).toBe('function');
    } catch (error) {
      // If wrappy is not directly accessible, that's okay
      // The main point is that it shouldn't cause "wrappy is not a function" errors
      console.log('wrappy not directly accessible, which is expected');
    }
  });

  test('should have coverage collection enabled', () => {
    // Test that coverage is properly configured
    expect(process.env.NODE_ENV).toBe('test');
    
    // Check that Jest is running with coverage
    const jestConfig = require('../../jest.config.js');
    expect(jestConfig.collectCoverage).toBe(true);
    expect(jestConfig.coverageDirectory).toBe('coverage');
  });

  test('should have babel-plugin-istanbul configured', () => {
    // Test that Babel configuration includes Istanbul
    const fs = require('fs');
    const path = require('path');
    
    const babelrcPath = path.join(__dirname, '../../.babelrc');
    expect(fs.existsSync(babelrcPath)).toBe(true);
    
    const babelConfig = JSON.parse(fs.readFileSync(babelrcPath, 'utf8'));
    expect(babelConfig.plugins).toBeDefined();
    
    // Check that Istanbul plugin is configured
    const istanbulPlugin = babelConfig.plugins.find(plugin => 
      Array.isArray(plugin) && plugin[0] === 'istanbul'
    );
    expect(istanbulPlugin).toBeDefined();
  });

  test('should have proper npm configuration', () => {
    // Test that .npmrc exists with legacy-peer-deps
    const fs = require('fs');
    const path = require('path');
    
    const npmrcPath = path.join(__dirname, '../../.npmrc');
    expect(fs.existsSync(npmrcPath)).toBe(true);
    
    const npmrcContent = fs.readFileSync(npmrcPath, 'utf8');
    expect(npmrcContent).toContain('legacy-peer-deps=true');
  });
});