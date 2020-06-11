export const API_URL = "https://www.toptal.com/developers/gitignore/api";
export const FILE_NAME = ".gitignore";

export const MESSAGES = {
    network_error: "There was a problem reaching gitignore.io. Try again.",
    fetching: "Fetching list from gitignore.io...",
    generated: `Your ${FILE_NAME} file has been [action]!`,
    generating: `Generating ${FILE_NAME} file...`,
    save_error: `There was an error while saving ${FILE_NAME} file.`,
};

export const PLACEHOLDERS = {
    location: `Where should ${FILE_NAME} file be generated?`,
    override: `${FILE_NAME} file exists. Do you want to override it?`,
    selection_hint: "Select using Space or by clicking",
};

export const USER_RULES =
    "Custom rules (everything added below won't be overriden by 'Generate .gitignore File' if you use 'Update' option)";

export const BANNER =
    "--------------------------------------------------------------------------------" + "\n" +
    "# File created using 'AnGitIgnored' extensions for Visual Studio Code: " + "\n" +
    "# https://marketplace.visualstudio.com/items?itemName=AnAppWiLos.angitignored " + "\n" +
    "#-------------------------------------------------------------------------------";


export const OVERRIDE_OPTIONS = [
    {
        label: "🔄 Override",
        description: `Overrides entire ${FILE_NAME} file`,
    },
    {
        label: "⬆️ Update",
        description: `Updates ${FILE_NAME} file keeping existing and user-defined rules`,
    },
];