/**
 * @type {import('semantic-release').GlobalConfig}
 */
export default {
  branches: ['master', 'main'],
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'conventionalcommits',
        releaseRules: [
          { type: 'feat', release: 'minor' },
          { type: 'fix', release: 'patch' },
          { type: 'perf', release: 'patch' },
          { type: 'revert', release: 'patch' },
          { type: 'docs', release: 'patch' },
          { type: 'refactor', release: 'patch' },
          { type: 'chore', release: 'patch' },
          { type: 'style', release: 'patch' },
          { type: 'ci', release: 'patch' },
          { type: 'test', release: 'patch' },
          { scope: 'no-release', release: false },
        ],
      },
    ],
    ['@semantic-release/release-notes-generator'],
    ['@semantic-release/changelog'],
    [
      '@semantic-release/github',
      {
        assets: ['dist/**'],
      },
    ],
    ['@semantic-release/git'],
  ],
};
