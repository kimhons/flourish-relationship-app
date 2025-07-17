module.exports = {
  dependencies: {
    'react-native-vector-icons': {
      platforms: {
        ios: {
          xcodeprojPath: 'ios/FlourishApp.xcodeproj',
          plistPath: 'ios/FlourishApp/Info.plist',
        },
      },
    },
  },
  assets: ['./src/assets/fonts/'],
};