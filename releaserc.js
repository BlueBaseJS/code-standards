module.exports = {
  branch: "master",
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    [
      "@semantic-release/exec",
      {
        prepareCmd: "yarn fix:md"
      }
    ]
  ],
  verifyConditions: [
    "@semantic-release/changelog",
    "@semantic-release/npm",
    "semantic-release-git-branches"
  ],
  prepare: [
    "@semantic-release/npm",
    "./scripts/version.js",
    {
      path: "semantic-release-git-branches",
      assets: ["src/version.ts", "CHANGELOG.md", "package.json"],
      message:
        "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
    }
  ],

  publish: [
    "@semantic-release/github",
    "@qiwi/semantic-release-gh-pages-plugin"
  ],
  success: "@semantic-release/github",
  fail: "@semantic-release/github"
};
