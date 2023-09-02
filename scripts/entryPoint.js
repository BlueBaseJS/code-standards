const fs = require('fs');

async function prepare() {
	console.log('Updating main property in package.json');
	const packageJson = require('../package.json');
	packageJson.main = 'dist/index.js';
	console.log('Writing package.json');
	fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2));
}

module.exports = { prepare };
