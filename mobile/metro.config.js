const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
  resolver: {
    alias: {
      '@': './src',
      '@shared': '../shared',
      '@assets': './src/assets',
      '@components': './src/components',
      '@screens': './src/screens',
      '@services': './src/services',
      '@utils': './src/utils',
      '@constants': './src/constants',
      '@contexts': './src/contexts',
      '@hooks': './src/hooks',
      '@types': './src/types',
    },
    platforms: ['ios', 'android', 'native', 'web'],
  },
  watchFolders: [
    // Watch shared folder for changes
    '../shared',
  ],
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);