const fs = require('fs');
const { parse } = require('semver');
const replace = require('replace-in-file');

/**
 * Create version.ts and sync the repos i.e. master and develop branches
 * @param {*} pluginConfig The semantic-release plugin config
 * @param {*} context The context provided by semantic-release
 */
async function prepare(_pluginConfig, ctx) {
	await updateVersionFile(_pluginConfig, ctx);
	await updateFiles(_pluginConfig, ctx);
}

async function updateVersionFile(_pluginConfig, { nextRelease: { version }, logger }) {
	const number = getVersionNumber(version);
	version = version.replace('-', '.');

	const data = `// THIS IS AN AUTO GENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
	export const VERSION = '${version}';
	export const VERSION_NUMBER = ${number};
	`;

	// write data to file sample.html
	fs.writeFile(
		'src/version.ts',
		data,
		// callback function that is called after writing file is done
		function(err) {
			if (err) throw err;
			// if no error
			logger.log('Version file created successfully.');
		}
	);
}

async function updateFiles(_pluginConfig, { nextRelease: { version } }) {
	const number = getVersionNumber(version);
	version = version.replace('-', '.');

	// Update app.config.ts
	replace.sync({
		files: ['app.config.ts', 'app.config.js'],
		from: /const VERSION = .*;/g,
		to: `const VERSION = '${version}';`,
	});

	replace.sync({
		files: ['app.config.ts', 'app.config.js'],
		from: /const VERSION_CODE = .*;/g,
		to: `const VERSION_CODE = ${number};`,
	});

	// Update dist/version.js
	replace.sync({
		files: ['dist/version.js'],
		from: /exports.VERSION = '.*';/g,
		to: `exports.VERSION = '${version}';`,
	});

	replace.sync({
		files: ['dist/version.js'],
		from: /exports.VERSION_NUMBER = [0-9]+;/g,
		to: `exports.VERSION_NUMBER = ${number};`,
	});
}

/**
 * Calculate a numeric version code based on the next release and used expo version.
 * This uses the versioning specifically designed for Android version codes.
 *
 * Final Output is 9 digits: [Major 2][Minor 2][Patch 2][Preid 1][Prenum 2]
 * @see https://medium.com/@maxirosson/versioning-android-apps-d6ec171cfd82
 */
function getVersionNumber(version) {
	const semver = parse(version);

	return (
		semver.major * 100000000 +
		semver.minor * 1000000 +
		semver.patch * 1000 +
		getPreReleaseCode(semver.prerelease)
	);
}

function getPreReleaseCode(prerelease) {
	try {
		const preid = prerelease[0];
		const num = parseInt(prerelease[1]);

		switch (preid) {
			case undefined:
				return 0;

			case 'alpha':
				return 100 + num;

			case 'beta':
				return 200 + num;

			default:
				return 300 + num;
		}
	} catch (error) {
		return 0;
	}
}

module.exports = { prepare, getVersionNumber };
