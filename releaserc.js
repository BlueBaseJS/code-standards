module.exports = {
  branches: [
    "master",
    "next",
    { branch: "beta", prerelease: true },
    { branch: "alpha", prerelease: true }
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
    "@semantic-release/npm",
    "./scripts/version.js",
    [
      "@semantic-release/git",
      {
        assets: ["src/version.ts", "CHANGELOG.md", "package.json"],
        message:
          "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
      }
    ],
    "@semantic-release/github",
    "@qiwi/semantic-release-gh-pages-plugin"
  ]
};
