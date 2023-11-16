module.exports = {
  roots: ["<rootDir>/src"],
  
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest',
   "^.+\\.tsx?$": "ts-jest"
  },
  
  setupFilesAfterEnv: [
    "@testing-library/jest-dom/extend-expect"
  ],
  
  testRegex: ".*\\.test\\.tsx?$",
  
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],

  testEnvironment: 'jsdom'
};