module.exports = function() {
	return {
		plugins: [
			'@babel/proposal-object-rest-spread',
			'@babel/plugin-transform-flow-strip-types'
		],
		presets: [
			'babel-preset-expo',
			'@babel/react',
			'@babel/typescript',
		]
	};
};
