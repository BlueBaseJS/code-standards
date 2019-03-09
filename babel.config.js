module.exports = function() {
  return {
    plugins: [
      '@babel/proposal-class-properties',
			'@babel/proposal-object-rest-spread',
    ],
		presets: [
			'@babel/env',
			'@babel/react',
			'@babel/typescript',
			'module:metro-react-native-babel-preset'
		]
  };
}