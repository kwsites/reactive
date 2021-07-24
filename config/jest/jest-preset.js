module.exports = {
   transform: {
      '\\.[[jt]sx?$': require.resolve('./jest-transform-src'),
   },
   moduleNameMapper: {
      '\\.(sa|sc|c)ss$': require.resolve('identity-obj-proxy'),
   },
   setupFiles: [require.resolve('./setupFiles')],
   setupFilesAfterEnv: [require.resolve('./setupFilesAfterEnv')],
   testEnvironment: 'jsdom',
   testPathIgnorePatterns: ['/node_modules/', '<rootDir>/lib/', '<rootDir>/dist/'],
   collectCoverageFrom: ['**/*.{ts,tsx}', '!**/*.d.ts'],
   coveragePathIgnorePatterns: ['/node_modules/', '/__fixtures__/'],
   moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'jsx', 'node', 'cjs'],
};
