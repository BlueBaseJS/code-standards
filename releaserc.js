module.exports = {
  // https://github.com/semantic-release/evolution/blob/release-workflows/_drafts/release-workflows.md#pre-releases
  branches: [
    "master",
    "next",
    { name: "beta", prerelease: true },
    { name: "alpha", prerelease: true }
  ],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    [
      "@semantic-release/exec",
      {
        prepareCmd: "yarn fix:md"
      }
    ],
    [
      "@semantic-release/exec",
      {
        prepareCmd: "yarn fix:prettier"
      }
    ],
    "@semantic-release/npm",
    "./scripts/version.js",
    "./scripts/postMessage.js",
    [
      "@semantic-release/git",
      {
        assets: ["src/version.ts", "CHANGELOG.md", "package.json"],
        message:
          "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
      }
    ],
    "@semantic-release/github"
    // "@qiwi/semantic-release-gh-pages-plugin"
  ]
};
