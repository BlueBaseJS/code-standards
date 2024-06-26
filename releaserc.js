module.exports = {
	// https://github.com/semantic-release/evolution/blob/release-workflows/_drafts/release-workflows.md#pre-releases
	branches: [
		'master',
		'main',
		'next',
		{ name: 'beta', prerelease: true },
		{ name: 'alpha', prerelease: true }
	],
	plugins: [
		'@semantic-release/commit-analyzer',
		'@semantic-release/release-notes-generator',
		'@semantic-release/changelog',
		[
			'@semantic-release/exec',
			{
				prepareCmd: 'npm run fix:md'
			}
		],
		[
			'@semantic-release/exec',
			{
				prepareCmd: 'npm run fix:prettier'
			}
		],
		'@semantic-release/npm',
		'./scripts/version.js',
		[
			'@semantic-release/git',
			{
				assets: ['src/version.ts', 'CHANGELOG.md', 'package.json', 'app.config.ts', 'ios', 'android'],
				message:
          'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}'
			}
		],
		'./scripts/entryPoint.js',
		'@semantic-release/github'
		// "@qiwi/semantic-release-gh-pages-plugin"
	]
};
