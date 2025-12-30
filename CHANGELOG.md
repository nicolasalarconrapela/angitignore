# Changelog

All notable changes to the "angitignored" extension will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.3.13] - 2025-12-30
### Added
- **Community**: Structured Issue Templates for better bug reporting and feature requests.
### Fixed
- **Docs**: Broken links in `CONTRIBUTING.md`.

## [1.3.12] - 2025-12-30
### Security
- Removed unused dev-dependencies (`minimist`, `https-proxy-agent`) to reduce potential attack surface.

## [1.3.11] - 2025-12-30
### Documentation
- **README**: Complete overhaul. Fixed typos, removed redundant GIFs, clarified usage table, and standardized API references.
- **Marketplace**: Fixed icon path configuration.

## [1.3.0] - 2025-12-30
### Changed
- **Branding**: Extension renamed to **angitignored** (Publisher: `AnAppWiLos`).
- **Core**: Migrated API usage to `toptal.com` (formerly gitignore.io).
- **UX**: Hidden redundant commands from the Command Palette to reduce noise.
### Fixed
- `Update` command logic to prevent overwriting custom rules without warning.

---
## Legacy Versions

## [1.2.19]
### Changed
- **Dependencies**: Migrated `vscode` engine dependency to `@types/vscode`.
- **Security**: Fixed potential vulnerabilities in dependencies.
- **Docs**: README improvements.
### Internal
- Repairs and improvements in `package.json` scripts (`update-vscode`, `install-dev`, `vsce:package`).
- Removed deprecated scripts (`test`, `postinstall`, `compile`).

## [1.2.18]
- Fixed API URL and images temporarily due to domain change.
- Minor improvements.

## [1.2.17]
- Security updates.
- README cleanup.

## [1.2.16]
- Updated extension logo.

## [1.2.2]
- **Open Source Prep**: Updated `.github` configs and README.
- **Fix**: Resolved error with `canPickMany: true`.
- Added HISTORY file.

## [1.2.0]
- Added versioning for `.gitignore` generation.

## [1.1.0]
### Changed
- **Branding**: Renamed project to `AnGitIgnored`.
- **Feature**: Added Show/Hide functionality for ignored files.
- Removed `test` script.

## [1.0.1] - 2018-01-18
- Initial code update and author change.
