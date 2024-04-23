module.exports = {
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest"  // Make sure all these file extensions are included
  },
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy"  // Helps handle non-JavaScript imports
  },
  testEnvironment: "jsdom",  // Ensures a browser-like environment is simulated
    // Adjusted patterns to include all files in src/test directory with specific extensions
    testMatch: [
      "**/src/tests/**/*.js",
      "**/src/tests/**/*.jsx",
      "**/src/tests/**/*.ts",
      "**/src/tests/**/*.tsx"
    ]
};
