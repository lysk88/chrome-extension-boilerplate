# Chrome Extension Boilerplate


## Features
A basic Chrome Extention boilerplate for easy an kickstarting. 

- Automatic reload the browser on code changes
- `background.js` <--> `content.js` communication

## Installing and Running

1. Check if have node installed
2. Clone this repository.
3. Change the package's `name`, `description`, and `repository` fields in `package.json`.
4. Change the `name` and the `description` of your extension on `src/manifest.json`.
5. Run `npm install` to install the dependencies.
6. Run `npm start`
7. Load your extension on Chrome following:
   1. Access `chrome://extensions/`
   2. Check `Developer mode`
   3. Click on `Load unpacked extension`
   4. Select the `dist` folder.

## Structure
All your extension's code must be placed in the src folder.
The boilerplate is already prepared to have a content and a background script.