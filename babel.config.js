module.exports = function() {
  return {
    plugins: [
      '@babel/proposal-class-properties',
			'@babel/proposal-object-rest-spread',
			'@babel/plugin-transform-flow-strip-types',
			'@babel/plugin-proposal-class-properties',
    ],
		presets: [
			'@babel/react',
			'@babel/typescript',
			'module:metro-react-native-babel-preset'
		]
  };
}