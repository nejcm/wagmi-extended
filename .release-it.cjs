const version = '${version}';

module.exports = {
  plugins: {
    'release-it-pnpm': {},
    '@release-it/conventional-changelog': {
      path: '.',
      infile: 'CHANGELOG.md',
      preset: 'conventionalcommits',
      gitRawCommitsOpts: {
        path: '.',
      },
    },
  },
  git: {
    push: true,
    tagName: `v${version}`,
    commitsPath: '.',
    commitMessage: `chore(release): v${version} [skip ci]`,
    requireCommits: true,
    requireCommitsFail: false,
    requireCleanWorkingDir: false,
  },
  npm: {
    publish: true,
  },
  github: {
    release: true,
  },
  hooks: {
    'before:git:release': ['git add --all'],
  },
};
