module.exports = function() {
  return {
    plugins: [
      '@babel/proposal-class-properties',
			'@babel/proposal-object-rest-spread',
			'@babel/transform-flow-strip-types',
    ],
		presets: [
			'@babel/react',
			'@babel/typescript',
			'module:metro-react-native-babel-preset'
		]
  };
}