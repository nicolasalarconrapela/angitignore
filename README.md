<img align="right" src="https://raw.githubusercontent.com/nicolasalarconrapela/gitignore/master/images/logoAnGitIgnoredV00000801.png" width="180px" height="100px">
<h1 align="left">AnGitIgnored</h1>

![GifUsage](https://raw.githubusercontent.com/nicolasalarconrapela/gitignore/master/Readme_images/Usage.gif)

![](images/logoAnGitIgnoredV00000904.png)

## About 

Repository that facilitates the management of `.ignore` files.

## Repositories

[⬇️ Download](https://marketplace.visualstudio.com/items?itemName=AnAppWiLos.angitignored)

## Install

    # npm install -g vsce
    vsce package
    code --install-extension angitignored-1.2.7.vsix

## Description

You can :

- Add specif file in `.gitignore`
- Create an blank `.gitignore`
- Generate/Update file `.gitignore` from [gitignore.io](https://www.gitignore.io/)
- Show/Hide the files in the `.gitignore`

with this `Visual Studio Code` Extension.

## Usage

Right click on the file to be added in .gitignore :

![UsagePicture](https://raw.githubusercontent.com/nicolasalarconrapela/gitignore/master/Readme_images/Readme01.png)

Select an options :

| Action                | Description                                                                     |
|-----------------------|---------------------------------------------------------------------------------|
| `Add GitInored`       | **CREATE** a blank `.gitignore`                                                 |
| `Generate GitIgnored` | **GENERATE** a `.gitignore` from the files that we select in the command window |
| - `Update`            | **Add** the selected framework to `.gitignore`                                  |
| - `Override`          | **Overwrite** `.gitignore` the selected framework                               |
| `Hide GitIgnored`     | **HIDES** a the files that are in the `.gitignore`                              |
| `Show GitIgnored`     | **SHOW** the files that have been hidden because they are in the `.gitignore`   |

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

* [code.visualstudio.com](https://code.visualstudio.com/api/working-with-extensions/publishing-extension)
* [medium.com](https://medium.com/@Ealsur/extensiones-en-visual-studio-code-39463fee452e)
* [geeks.ms](https://geeks.ms/jorge/2017/07/17/crear-nuestra-primera-extension-para-visual-studio-code-i/)

## ChangeLog

- [CHANGELOG](CHANGELOG)

## Features

- [FEATURES](FEATURES)

## Compilation the bugs

- [History](History.md)

## LICENSE

- [MIT](LICENSE)

## AUTHORS 

- [nicolasalarconrapela](https://github.com/nicolasalarconrapela)