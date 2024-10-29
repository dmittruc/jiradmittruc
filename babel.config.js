module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@screens': './src/screens',
          '@components': './src/components',
          '@interfaces': './src/interfaces',
          '@actions': './src/store/actions',
          '@images': './src/assets',
          '@theme': './src/theme',
          '@contexts': './src/contexts',
          '@hooks': './src/hooks',
          '@api': './src/api',
          '@store': './src/store',
        },
      },
    ],
  ],
};
