# Changelog

All notable changes to this project will be documented in this file.

## [1.1.0] - 2026-06-10

### Added
- Setup complete CI pipeline with GitHub Actions.
- Set up automatic vulnerability tracking with Dependabot.
- Configured ESLint and Prettier for maintaining repository code-quality.

### Changed
- Refactored `extension.js` fixing security practices (disabling inner script execution & optimizing `localResourceRoots`).
- Bumped VS Code Minimum Engine to `^1.90.0`.
- Expanded README with rich requirements and security details.

## [1.0.0] - 2025-11-15

### Added

- Dynamic theme support following the active VS Code theme (Light/Dark/High Contrast).

### Changed

- Removed OS-level theme detection and CDN CSS; bundled local theme styles.

### Improved

- Code block highlighting adapts to the active theme.

## [0.0.3] - 2025-08-19

### Changed

- Upgraded dependencies to the latest version
