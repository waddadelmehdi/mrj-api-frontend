/**
 * Test to ensure package.json has a valid version field
 * This test addresses the Jenkins pipeline issue: "npm ERR! Invalid Version"
 */

const fs = require('fs');
const path = require('path');

describe('Package.json Version Field', () => {
  let packageJson;

  beforeAll(() => {
    // Read and parse package.json
    const packageJsonPath = path.join(__dirname, '../package.json');
    const packageContent = fs.readFileSync(packageJsonPath, 'utf8');
    packageJson = JSON.parse(packageContent);
  });

  test('should have a version field', () => {
    expect(packageJson).toHaveProperty('version');
    expect(packageJson.version).toBeDefined();
  });

  test('version field should not be empty', () => {
    expect(packageJson.version).toBeTruthy();
    expect(typeof packageJson.version).toBe('string');
    expect(packageJson.version.trim()).not.toBe('');
  });

  test('version should follow semver format', () => {
    // Basic semver regex: major.minor.patch with optional pre-release and build metadata
    const semverRegex = /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*|[0-9a-zA-Z-]*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*|[0-9a-zA-Z-]*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/;
    
    expect(packageJson.version).toMatch(semverRegex);
  });

  test('version should be parseable by semver library', () => {
    // Try to use the semver library if available
    try {
      const semver = require('semver');
      const parsedVersion = semver.parse(packageJson.version);
      expect(parsedVersion).not.toBeNull();
      expect(parsedVersion.version).toBe(packageJson.version);
    } catch (error) {
      // If semver library is not available, skip this test
      console.warn('semver library not available, skipping advanced validation');
    }
  });

  test('version should be valid for npm', () => {
    // Test that the version would be acceptable to npm
    expect(packageJson.version).toMatch(/^\d+\.\d+\.\d+/);
    
    // Ensure no invalid characters
    expect(packageJson.version).not.toMatch(/[^0-9a-zA-Z.-]/);
  });

  test('package.json should be valid JSON', () => {
    // Ensure the entire package.json is valid JSON
    const packageJsonPath = path.join(__dirname, '../package.json');
    const packageContent = fs.readFileSync(packageJsonPath, 'utf8');
    
    expect(() => {
      JSON.parse(packageContent);
    }).not.toThrow();
  });
});