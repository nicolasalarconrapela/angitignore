import * as os from "os";
import { readFile } from "./filesystem";
import { getData } from "./http";
import { API_URL, BANNER, USER_RULES } from "./config";

export async function getList(path: string | null, keepCurrent: boolean) {
    const data = await getData(`${API_URL}/list`);

    if (data === null) {
        return null;
    }

    const selectedItems = getSelectedItems(path, keepCurrent);

    const items = data.split(/[,\n\r]+/).map(item => ({
        label: item,
        picked: selectedItems.indexOf(item) !== -1,
    }));

    items.pop();

    items.sort((a, b) => {
        if (a.picked) {
            return -1;
        } else if (b.picked) {
            return 1;
        }

        return 0;
    });

    return items;
}

export function getOs() {
    const systems = {
        darwin: "macos",
        linux: "linux",
        win32: "windows",
    };

    const system = systems[os.platform()];

    return system ? system : null;
}

export function getCurrentItems(path: string) {
    const file = readFile(path);

    if (file === null) {
        return [];
    }

    const regex = /^# Created by.+\/(.+)$/m;
    const result = regex.exec(file);

    return result && result[1] ? result[1].split(",") : [];
}

export function getUserRules(filePath) {
    const file = readFile(filePath);

    if (file === null) {
        return null;
    }

    if (file.includes(USER_RULES)) {
        const result = file.split(USER_RULES)[1];
        return result ? result.trim() : null;
    }

    const endOfGitignoreIoRegex = /^# End of https:\/\/.*$/m;
    const match = endOfGitignoreIoRegex.exec(file);

    if (match) {
        const endIndex = match.index + match[0].length;
        const customContent = file.substring(endIndex).trim();
        return customContent.length > 0 ? customContent : null;
    }

    if (!file.includes("AnAppWiLos")) {
        return file.trim();
    }

    return null;
}

export function getSelectedItems(
    filePath: string | null,
    keepCurrent: boolean
) {
    const selected = [];

    if (!keepCurrent) {
        selected.push("visualstudiocode", getOs());
    }

    if (keepCurrent && filePath) {
        selected.push(...getCurrentItems(filePath));
    }

    return selected.filter(item => !!item);
}

export function generateFile(path: string, output: string, override: boolean) {
    output = `# ${BANNER}\n${output}\n# ${USER_RULES}\n`;

    if (!override) {
        const userRules = getUserRules(path);
        output += userRules ? `\n${userRules}` : "";
    }

    return `${output}\n`;
}
