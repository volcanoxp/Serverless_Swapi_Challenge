/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	transform: {
		'^.+.tsx?$': ['ts-jest', {}],
	},
	testMatch: ['**/__tests__/**/*.ts', '**/?(*.)+(spec|test).ts'],
	moduleFileExtensions: ['ts', 'js'],
	modulePathIgnorePatterns: ['dist', 'node_modules'],
	collectCoverageFrom: ['src/**/*.ts'],
	fakeTimers: {
		enableGlobally: true,
	},
}
