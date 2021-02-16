---
title: CLI
---

## Installation with NPM

-   Requires [Node v14+ and NPM](https://nodejs.org/en/download/). (Installing Node will install NPM as well)

-   Run `npm install -g platformer-cli@latest`

-   To use Yarn instead of NPM: `yarn add -g platformer-cli`

-   The Platformer CLI can now be accessed with the `platformer` command.

### Upgrading

-   Run `npm install -g platformer-cli@latest`

## Installation via a Standalone binary

-   Check the [Releases section](https://github.com/platformercloud/cli/releases) and download the relavent binary based on your Operating System.

-   Once installed, the Platformer CLI will be accessible with the `platformer` command.

## Install on Ubuntu/Debian

- Export __latest__ version `export VERSION=0.1.X`

- Download *.deb `wget  https://github.com/platformercloud/cli/releases/download/v$VERSION/platformer_$VERSION-1_amd64.deb`

- Install downloaded *.deb file `sudo dpkg -i platformer_$VERSION-1_amd64.deb `
