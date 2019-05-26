# Bug `nom-install`

## Comando :

    npm install

Al ejecutar `npm install`, este acaba con `exit -1` :

```bash
    npm WARN deprecated vscode@0.10.7: Please update to version 0.11.x for improved typings and test support

    > angitignored@1.2.1 postinstall \AnGitIgnored
    > node ./node_modules/vscode/bin/install

    internal/modules/cjs/loader.js:583
        throw err;
        ^

    Error: Cannot find module 'AnGitIgnored\node_modules\vscode\bin\install'
        at Function.Module._resolveFilename (internal/modules/cjs/loader.js:581:15)
        at Function.Module._load (internal/modules/cjs/loader.js:507:25)
        at Function.Module.runMain (internal/modules/cjs/loader.js:742:12)
        at startup (internal/bootstrap/node.js:283:19)
        at bootstrapNodeJSCore (internal/bootstrap/node.js:743:3)
    npm ERR! code ELIFECYCLE
    npm ERR! errno 1
    npm ERR! angitignored@1.2.1 postinstall: `node ./node_modules/vscode/bin/install`
    npm ERR! Exit status 1
    npm ERR!
    npm ERR! Failed at the angitignored@1.2.1 postinstall script.
    npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

    npm ERR! A complete log of this run can be found in:
    npm ERR!     <path>\npm-cache\_logs\2019-05-25T12_39_35_622Z-debug.log
```
### Solución 01

### Explicación

Una de las soluciones es la implementación sobre el archivo `.package-lock.json`

### Fuente de resolución 
    http://programandonet.com/questions/40224/npm-como-usar-package-lock-json-para-instalar-basado-en-versiones-bloqueadas

    npm install [-g|-D] cipm
    cipm install

### Estado 

    Checkeado / NO FUNCIONA

### FIXED

Se copia las dependencias originales de los distintos archivos originales :

```json
    "devDependencies": {
            "@types/mocha": "^2.2.32",
            "@types/node": "^6.0.40",
            "tslint": "^5.8.0",
            "typescript": "^2.0.3",
            "vscode": "^1.0.0",
            "mocha": "^2.3.3"
        }
```

# Bug `vsce install`

Tras resolver el [Bug de instalar `npm` ](#Bug `nom-install`).

## Comando 

    vsce package

```bash 

    Executing prepublish script 'npm run vscode:prepublish'...
    Error: Command failed: npm run vscode:prepublish
    npm ERR! code ELIFECYCLE
    npm ERR! errno 2
    npm ERR! angitignored@1.2.1 compile: `tsc -p ./`
    npm ERR! Exit status 2
    npm ERR!
    npm ERR! Failed at the angitignored@1.2.1 compile script.
    npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

    npm ERR! A complete log of this run can be found in:
    npm ERR!     
    npm ERR! code ELIFECYCLE
    npm ERR! errno 2
    npm ERR! angitignored@1.2.1 vscode:prepublish: `npm run compile`
    npm ERR! Exit status 2
    npm ERR!
    npm ERR! Failed at the angitignored@1.2.1 vscode:prepublish script.
    npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

    npm ERR! A complete log of this run can be found in:
    npm ERR!   
```

### Fixed Part01

Con esto estamos fijando que se instalen todas las utlimas dependencias :

    # https://github.com/Microsoft/vscode-vsce/issues/244#issuecomment-376836712
    npm install -g node@latest
    npm install -g npm@latest
    npm install -g vscode@latest
    npm install -g vsce@latest

## Get information error

    npm run compile

### Advanced error (error TS2345)

Tras limpiar los errores por contener ya un `node_modules`, y ejecutar el comando anterior se obtiene que con el comando :

    tsc -p ./

```bash 

src/modules/ui.ts(31,13): error TS2345: Argument of type '{ canPickMany: boolean; placeHolder: string; }' is not assignable to parameter of type 'QuickPickOptions'.
  Object literal may only specify known properties, and 'canPickMany' does not exist in type 'QuickPickOptions'.
```

### Posible soluciones 01

#### Descripción 

Obtener la versión concreta del `TypeScript` con el cual funcionaba.

## Investigación acerca del error

Tras una búsqueda acerca de este error pude obtener en :

    https://stackoverflow.com/questions/42421501/error-ts2345-argument-of-type-t-is-not-assignable-to-parameter-of-type-objec

que antes de la versión `2.2` de `TypeScript` la creación :

    Object.create(1, {});

era válida.

## NO Fixed 02

    npm install -g typescript@2.1.1 
    tsc -v
    # Version 2.1.1

## Fixed 03

Tras una verificación mas exhaustiva del programa el error es producido por un parámetro no admitido 
por la version de `vscode` :

		/**
		 * Optional flag indicating if this item is picked initially.
		 * (Only honored when the picker allows multiple selections.)
		 *
		 * @see [QuickPickOptions.canPickMany](#QuickPickOptions.canPickMany)
		 */
		picked?: boolean;

Se utiliza las dependencias :

```json 
{
    //...
    "engines": {
        "vscode": "^1.22.0"
    },
    //....
    "devDependencies": {
        "@types/mocha": "^2.2.42",
        "@types/node": "^7.0.43",
        "tslint": "^5.8.0",
        "typescript": "^2.6.1",
        "vscode": "^1.1.6"
    },
    "dependencies": {
        "vsce": "^1.62.0"
    }
}
```
    
### Posible soluciones 02

#### Descripción

Quitar el `use strict`

#### Estado 
    
    Checkeado / NO FUNCIONA