const fs = require('fs');

/**
 * Create version.ts and sync the repos i.e. master and develop branches
 * @param {*} pluginConfig The semantic-release plugin config
 * @param {*} context The context provided by semantic-release
 */
async function prepare() {
	updatePackageJson();
}

// A function to update the value of "main" in package.json
function updatePackageJson() {
	const packageJson = require('package.json');
	packageJson.main = 'dist/index.js';
	fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2));
}

module.exports = { prepare };
