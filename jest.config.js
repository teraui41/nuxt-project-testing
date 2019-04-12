module.exports = {
  moduleFileExtensions: [
    "ts",
    "js",
    "vue"
  ],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    ".*\\.(vue)$": "vue-jest"
  },
  testRegex: "(tests/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  setupFiles: [
    "<rootDir>/setupTests.ts"
  ],
  snapshotSerializers: [
    "<rootDir>/node_modules/jest-serializer-vue"
  ],
  collectCoverage: true
};
