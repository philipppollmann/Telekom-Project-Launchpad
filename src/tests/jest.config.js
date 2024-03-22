module.exports = {
    testMatch: [
        "**/*.test.js"
    ],
    testEnvironment: 'node',
    moduleFileExtensions: ['js', 'json'],
    transform: {
        '^.+\\.js$': 'babel-jest'
    },
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/../$1'
    },
    setupFilesAfterEnv: ['./setupTests.js'],
    verbose: false,
};