// const fs = require('fs');
const replace = require('replace-in-file');

async function prepare() {
	// console.log('Updating main property in package.json');
	// const packageJson = require('../package.json');
	// packageJson.main = 'dist/index.js';
	// console.log('Writing package.json');
	// fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2));

	updateFiles();
}

async function updateFiles() {
	// Update main property in package.json
	replace.sync({
		files: ['package.json'],
		from: /"main": ".*"/g,
		to: `"main": "dist/index.js"`,
	});
}

// prepare();
module.exports = { prepare };
