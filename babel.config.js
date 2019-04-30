module.exports = function () {
	return {
		plugins: [
			'@babel/proposal-object-rest-spread',
			'@babel/plugin-transform-flow-strip-types'
		],
		presets: [
			'@babel/react',
			'@babel/typescript',
			'module:metro-react-native-babel-preset'
		]
	};
}