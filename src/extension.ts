import * as fs from 'fs';
import * as vscode from 'vscode';

import { ExtensionContext } from 'vscode';
import { GitignoreHider } from './gitignore-hider';
import { GitignoreReader } from './gitignore-reader';
import { PatternConverter } from './pattern-converter';
import { SettingsAccessor } from './settings-accessor';

export function activate(context: ExtensionContext): void {
    /**
     * Extensión for adding specif archive to .gitgnore
     */
    let disposable = vscode.commands.registerCommand('extension.addGitignored', (selectedFile) => {
        let filePath: string = selectedFile.path.substr(vscode.workspace.rootPath.length + 1, selectedFile.path.length)
        fs.open(vscode.workspace.rootPath + '/.gitignore', 'a', function (err, fd) {
            fs.readFile(vscode.workspace.rootPath + '/.gitignore', 'utf8', function (err, data) {
                if (data.indexOf(filePath) !== -1) return;
                if (err || data.lastIndexOf('\n') !== data.length - 1) filePath = '\n' + filePath;

                let buffer = new Buffer(filePath);
                fs.write(fd, buffer, 0, buffer.length, null, function (err) {
                    if (err) throw 'error writing file: ' + err;
                    fs.close(fd, function () {
                        console.log('file written');
                    })
                });
            });
        });

    });
    context.subscriptions.push(disposable);
    
    /**
     * Estension for show/hide the archives in .gitignore
     */
    const gitignoreHider = new GitignoreHider(
        new GitignoreReader(),
        new PatternConverter(),
        new SettingsAccessor(),
    );
    gitignoreHider.registerCommands(context);

}

export function deactivate(): void { }
