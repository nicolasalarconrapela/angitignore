<img align="right" 
src="https://raw.githubusercontent.com/nicolasalarconrapela/angitignore/master/Readme_images/logoAnGitIgnoredV00000904.png" width="80px" height="80px">

<h1 align="left">AnGitIgnored</h1>

![GifUsage](https://raw.githubusercontent.com/nicolasalarconrapela/angitignore/master/Readme_images/Usage.gif)

![Visual Studio Marketplace Version](https://img.shields.io/visual-studio-marketplace/v/AnAppWiLos.angitignored.svg?color=yellow&label=Version&style=for-the-badge)
![Visual Studio Marketplace Installs - Azure DevOps Extension](https://img.shields.io/visual-studio-marketplace/azure-devops/installs/total/AnAppWiLos.angitignored.svg?color=important&style=for-the-badge)

## About

Extension that generates the `.gitignores` files from the [gitignore.io](https://www.toptal.com/developers/gitignore) API.

---

## Repositories

[🔗 Marketplace](https://marketplace.visualstudio.com/items?itemName=AnAppWiLos.angitignored)

[⬇️ Download VSIX](https://marketplace.visualstudio.com/_apis/public/gallery/publishers/AnAppWiLos/vsextensions/angitignored/1.2.16/vspackage)

## Description

You can :

- Add specif file in `.gitignore`
- Create an blank `.gitignore`
- Generate/Update file `.gitignore` from [gitignore.io](https://www.toptal.com/developers/gitignore)
- Show/Hide the files in the `.gitignore`

with this `Visual Studio Code` Extension.

## Usage

Right click on the file to be added in .gitignore :

![UsagePicture](https://raw.githubusercontent.com/nicolasalarconrapela/angitignore/master/Readme_images/Usage.gif)

Select an options :

| Action                | Description                                                                     |
| --------------------- | ------------------------------------------------------------------------------- |
| `Add GitInored`       | **CREATE** a blank `.gitignore`                                                 |
| `Generate GitIgnored` | **GENERATE** a `.gitignore` from the files that we select in the command window |
| - `⬆️ Update`         | **Add** the selected framework to `.gitignore`                                  |
| - `🔄 Override`       | **Overwrite** `.gitignore` the selected framework                               |
| `Hide GitIgnored`     | **HIDES** a the files that are in the `.gitignore`                              |
| `Show GitIgnored`     | **SHOW** the files that have been hidden because they are in the `.gitignore`   |

## Install

    # npm install -g vsce
    vsce package
    code --install-extension angitignored-1.2.18.vsix

## Developers

### Run this project

    npm install

### Tools for developer this project

    npm install -g npm@latest
    npm install -g yo
    npm install -g generator-code
    npm install -g vsce
    npm install -g typescript

### Automatic update the dependencies

    npm install -g npm-check-updates
    ncu -u --packageFile package.json

### Some reference guide to develop extension in VSCode

- [code.visualstudio.com](https://code.visualstudio.com/api/working-with-extensions/publishing-extension)
- [medium.com](https://medium.com/@Ealsur/extensiones-en-visual-studio-code-39463fee452e)
- [geeks.ms](https://geeks.ms/jorge/2017/07/17/crear-nuestra-primera-extension-para-visual-studio-code-i/)

## ChangeLog

- [CHANGELOG](CHANGELOG)

## Features

- [ ] Add the possibility of use without Internet
- [ ] Hiding menu options

## Compilation the bugs

- [History](History.md)

## LICENSE

- [MIT](LICENSE)

## AUTHORS

- [nicolasalarconrapela](https://github.com/nicolasalarconrapela)
