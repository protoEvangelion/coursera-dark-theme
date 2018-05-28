# Logos Dark Theme (For Logos Bible Web App)

> This theme is currently in Beta (Needs fine tuning for certain widgets)

![Theme Example Image](/screenshots/1.png)

- [Logos Dark Theme (For Logos Bible Web App)](#logos-dark-theme-for-logos-bible-web-app)
	- [Minimal Prerequisite](#minimal-prerequisite)
	- [Building Theme Manually (If you need to make adjustments)](#building-theme-manually-if-you-need-to-make-adjustments)
		- [Building Prerequisites](#building-prerequisites)
			- [Install Dependencies](#install-dependencies)
			- [1. To run the build once run:](#1-to-run-the-build-once-run)
			- [2. To run the build in watch mode run:](#2-to-run-the-build-in-watch-mode-run)
	- [Add Styles To Stylish](#add-styles-to-stylish)
	- [Helpful Plugins to install for your code editor:](#helpful-plugins-to-install-for-your-code-editor)
		- [Prettier (formatter primarily for JS files)](#prettier-formatter-primarily-for-js-files)
		- [ESlint (linter)](#eslint-linter)
		- [EditorConfig (formatter)](#editorconfig-formatter)

## Minimal Prerequisite

* [Stylish](https://userstyles.org/styles/160573/dark-theme-logos-bible-web-app) to load the css styles
  * [Firefox extension](https://addons.mozilla.org/en-US/firefox/addon/stylish/) \* [Chrome extension](https://chrome.google.com/webstore/detail/stylish-custom-themes-for/fjnbnpbmkenffdnngjfgmeleoegfcffe?hl=en)

## Building Theme Manually (If you need to make adjustments)

### Building Prerequisites

* [Nodejs](https://nodejs.org/)
* Npm (comes with the download of Nodejs)
* A terminal

#### Install Dependencies

```shell
npm i
```

> It is necessary to either run 1 of the 2 build options below

#### 1. To run the build once run:

```shell
npm run build
```

#### 2. To run the build in watch mode run:

```shell
npm run dev
```

## Add Styles To Stylish

* [Wiki Instructions Here](https://github.com/stylish-userstyles/stylish/wiki)
* The build will be output to `dist/styles.css`
* The final step is to **copy that output** and paste it into a new Stylish stylesheet following the Wiki instructions above

## Helpful Plugins to install for your code editor:

### Prettier (formatter primarily for JS files)

> Prettier is an opinionated code formatter. https://prettier.io/playground/

* User Guide: https://github.com/prettier/prettier
* VS Code Editor Plugin: https://github.com/prettier/prettier-vscode
* Vim Plugin: https://github.com/prettier/vim-prettier
* Sublime: https://packagecontrol.io/packages/JsPrettier

### ESlint (linter)

> Eslint is a pluggable linting utility for JavaScript and JSX

* User Guide: https://eslint.org/docs/user-guide/getting-started#configuration
* VS Code Editor Plugin: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
* Vim Plugin: https://github.com/vim-syntastic/syntastic/tree/master/syntax_checkers/javascript
* Sublime: https://github.com/roadhump/SublimeLinter-eslint

### EditorConfig (formatter)

> EditorConfig helps developers define and maintain consistent coding styles between different editors and IDEs

* Info: http://editorconfig.org/
* VS Code Editor plugin: https://github.com/editorconfig/editorconfig-vscode
* Vim plugin: https://github.com/editorconfig/editorconfig-vim
* Sublime: https://github.com/sindresorhus/editorconfig-sublime
