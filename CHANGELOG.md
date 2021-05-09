# CHANGELOG - AnGitIgnored

## V.1.2.19

- Migration of the dependencies `vscode` to `@types/vscode`
- Fixed : 'potential security vulnerabilities in your dependencies.'
- README improvements

<details>
<summary><i>CHANGELOG of this development</i></summary>

- `1.2.19-DEV-01` : Repairs and improvements in package.json
  - `package.json` :
    - Commands :
      - (+) `update-vscode`
      - (+) `install-dev`
      - (+) `vsce:package`
      - (~) `vscode:prepublish`
      - (-) `test`
      - (-) `postinstall`
      - (-) `compile`
    - Dependencies :
      - Replacing `vscode` with `@types/vscode` ([_Deprecated, use @types/vscode and vscode-test instead_](https://github.com/Microsoft/vscode-extension-vscode#readme))
      - (-) `vsce`
  - `CHANGELOG` : improvements
  - `.vscodeignore`: improvements
- `1.2.19-DEV-02` : `README` improvements
  - (-) FEATURES
  - (-) History.md
  - Improvements in Readme.md

</details>

## V.1.2.18

- `1.2.17.1` _Update url of the api_
  - Fixed the images, temporarily, by domain change
  - API url update
  - Minor improvements

## V.1.2.17

- `1.2.17` _Update the security_
  - Update the README

## V.1.2.16

- `1.2.3` _Update logo_
  - Update logo image

- `1.2.2` _Preparatory for Open Source_
  - Update Readme.md
  - Update of .github
  - FIXED: Error with 'canPickMany: true'
  - HISTORY is added
  - Minor errors are refactor

- `1.2.0.` _We add version of .gitignore generation_
  - Generation version of .gitignore is added

- `1.1.0.` _First changes of names and aggregation of Show/Hide_
  - It is going to proceed to the name change to `AnGitIgnored`
  - It adds the possibility to see / hide the files of `.gitignore`
  - Elimination of `test`

- `1.0.1.` _Update code and change author(18 Enero 2018)_
