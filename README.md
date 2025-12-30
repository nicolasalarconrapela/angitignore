<img align="right" 
src="https://raw.githubusercontent.com/nicolasalarconrapela/angitignore/master/images/logoAnGitIgnoredV00000904.png" width="100px" height="100px">

<h1 align="left">angitignored</h1>

<br/>
<p align="center">
  <a href="https://marketplace.visualstudio.com/items?itemName=AnAppWiLos.angitignored">
    <img src="https://img.shields.io/visual-studio-marketplace/azure-devops/installs/total/AnAppWiLos.angitignored.svg?color=85C1E9&style=for-the-badge" alt="Visual Studio Marketplace Installs - Azure DevOps Extension">
  </a>
  <a href="https://marketplace.visualstudio.com/items?itemName=AnAppWiLos.angitignored&ssr=false#version-history">
    <img src="https://img.shields.io/visual-studio-marketplace/v/AnAppWiLos.angitignored.svg?color=success&label=Version&style=for-the-badge" alt="Visual Studio Marketplace Version">
  </a>
</p>

## ✨ What's New in 1.4.0

- **Smart Updates**: Fixed specific bug where updating from a template would overwrite existing custom content.
- **Robust Selection**: Fixed issue where the extension would exit unexpectedly during option selection.
- **Clean & Fast**: Removed unused dependencies for a lighter extension.

## 🚀 Roadmap (January 2026)

- **Drag & Drop**: Support for dragging files to ignore them.
- **Core improvements**: Performance and stability enhancements.

## About

Extension that generates `.gitignore` files using the [toptal.com](https://www.toptal.com/developers/gitignore) API (formerly gitignore.io).

⬇️ Download it in [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=AnAppWiLos.angitignored)

## Description

With this extension you can:

- **Create** a blank `.gitignore` file.
- **Generate/Update** `.gitignore` from [toptal.com](https://www.toptal.com/developers/gitignore) selections.
- **Add specific files** to `.gitignore`.
- **Show/Hide** ignored files in the VS Code Explorer.

## Usage

![UsagePicture](https://raw.githubusercontent.com/nicolasalarconrapela/angitignore/master/images/usage.gif)

Right-click on the Explorer to select an option:

| Action | Description |
| :--- | :--- |
| `➕ Add to .gitignore` | **Creates** a blank `.gitignore` or adds selected file to it. |
| `📝 Generate the file .gitignore` | **Generates** a `.gitignore` based on your selection (OS, IDEs, Languages). |
| `👻 Hide files ignored...` | **Hides** files listed in `.gitignore` from the view. |
| `👀 Show files ignored...` | **Shows** files that were hidden by the extension. |

> **Note:** When using **Generate**, if a `.gitignore` already exists, you will be asked to:
> - `⬆️ Update`: Add new rules keeping your existing ones.
> - `🔄 Override`: Completely overwrite the file.

## Developer

### 🔨 Quick install

```bash
npm run update-vscode
npm install
```
  
### 📦 Packaging

```bash
vsce package
# Install locally:
code --install-extension angitignored-<version>.vsix
```

### ♻️ Update dependencies

```bash
ncu -u --packageFile package.json
```

## Help

Reference guides for VS Code extension development:

- [code.visualstudio.com](https://code.visualstudio.com/api/working-with-extensions/publishing-extension)
- [medium.com](https://medium.com/@Ealsur/extensiones-en-visual-studio-code-39463fee452e) (Spanish)
- [geeks.ms](https://geeks.ms/jorge/2017/07/17/crear-nuestra-primera-extension-para-visual-studio-code-i/) (Spanish)

## License

[MIT](LICENSE)

---

<div align=center>
  Written with ❤️ by AnAppWiLos
</div>
