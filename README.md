<img align="right" 
src="https://raw.githubusercontent.com/nicolasalarconrapela/angitignore/master/Readme_images/logoAnGitIgnoredV00000904.png" width="80px" height="80px">

<h1 align="left">AnGitIgnored</h1>

![GifUsage](https://raw.githubusercontent.com/nicolasalarconrapela/angitignore/master/Readme_images/Usage.gif)

<p align="center">
  <a href="https://marketplace.visualstudio.com/items?itemName=AnAppWiLos.angitignored">
    <img src="https://img.shields.io/visual-studio-marketplace/azure-devops/installs/total/AnAppWiLos.angitignored.svg?color=85C1E9&style=for-the-badge" alt="Visual Studio Marketplace Installs - Azure DevOps Extension">
  </a>
  <a href="#">
    <img src="https://img.shields.io/visual-studio-marketplace/v/AnAppWiLos.angitignored.svg?color=success&label=Version&style=for-the-badge" alt="Visual Studio Marketplace Version">
  </a>
</p>

## About

Extension that generates the `.gitignores` files from the [toptal.com](https://www.toptal.com/developers/gitignore) API (_old gitignore.io API_).

⬇️ Download it in [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=AnAppWiLos.angitignored)

## Description

You can :

- Add specif file in `.gitignore`
- Create an blank `.gitignore`
- Generate/Update file `.gitignore` from [gitignore.io](https://www.toptal.com/developers/gitignore)
- Show/Hide the files in the `.gitignore`

with this `Visual Studio Code` Extension.

## Usage

![UsagePicture](https://raw.githubusercontent.com/nicolasalarconrapela/angitignore/master/Readme_images/Usage.gif)

Right click on the  Explorer in order to selected an option :

| Action                | Description                                                                     |
| --------------------- | ------------------------------------------------------------------------------- |
| `Add GitInored`       | **CREATE** a blank `.gitignore`                                                 |
| `Generate GitIgnored` | **GENERATE** a `.gitignore` from the files that we select in the command window |
| - `⬆️ Update`          | **Add** the selected framework to `.gitignore`                                  |
| - `🔄 Override`        | **Overwrite** `.gitignore` the selected framework                               |
| `Hide GitIgnored`     | **HIDES** a the files that are in the `.gitignore`                              |
| `Show GitIgnored`     | **SHOW** the files that have been hidden because they are in the `.gitignore`   |

## Developer

### 🔨 Quick install

    # npm install -g node@latest 
    # npm install -g npm@latest
    npm run update-vscode
    npm install
  
### 📦 Packaging

    # npm install -g vsce
    vsce package
    code --install-extension angitignored-<version>.vsix

### ♻️ Update dependencies

    # npm install -g npm-check-updates
    ncu -u --packageFile package.json

## Help

Some reference guide to develop extension in VSCode

- [code.visualstudio.com](https://code.visualstudio.com/api/working-with-extensions/publishing-extension)
- [medium.com](https://medium.com/@Ealsur/extensiones-en-visual-studio-code-39463fee452e)
- [geeks.ms](https://geeks.ms/jorge/2017/07/17/crear-nuestra-primera-extension-para-visual-studio-code-i/)

## License

[MIT](LICENSE)

---

<div align=center>
<table class=bannerparthead>
    <td class=runninghead noWrap>
      <div align=justify>
      Written with ❤️ by AnAppWiLos
      </div>
    </td>
  </table>
</div>
