# NgTodo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


# Steps to configure Prettier:
first ot all Install Prettier plugin on VSCode - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
1.  Open file explorer and paste this line in the address bar : `%APPDATA%\Code\User`
2. You will find there a file named `settings.json` Open this fi
3.  Paste the following code in it:


```
{
  "git.confirmSync": false,
  "team.showWelcomeMessage": false,
  "tslint.autoFixOnSave": true,
  "javascript.format.enable": false,
  "typescript.format.enable": false,
  "html.format.enable": true,
  "json.format.enable": true,
  "editor.formatOnSave": true,
  "html.format.wrapAttributes": "force-aligned",
  "git.enableSmartCommit": true,
  "gitlens.advanced.messages": {
    "suppressShowKeyBindingsNotice": true
  },
  "prettier.singleQuote": false,
  "prettier.bracketSpacing": false,
  "prettier.tabWidth": 2,
  "prettier.printWidth": 300,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "editor.semanticHighlighting.enabled": true,
  "typescript.updateImportsOnFileMove.enabled": "always",
  "gitlens.gitCommands.closeOnFocusOut": true,
  "gitlens.gitCommands.skipConfirmations": ["fetch:command", "switch:command"],
  "workbench.iconTheme": "material-icon-theme",
  "workbench.colorCustomizations": {},
  "terminal.integrated.shell.windows": "C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe",
  // "terminal.integrated.shell.windows": "C:\\Users\\yehudabu\\AppData\\Roaming\\Microsoft\\Windows\\Start Menu\\Programs\\Windows PowerShell\\powershell.exe",
  "terminal.integrated.windowsEnableConpty": false,
  // "terminal.integrated.shell.windows": "C:PROGRA~1Git\\bin\\bash.exe",
  "javascript.updateImportsOnFileMove.enabled": "always",
  "peacock.favoriteColors": [
    {
      "name": "Angular Red",
      "value": "#dd0531"
    },
    {
      "name": "Azure Blue",
      "value": "#007fff"
    },
    {
      "name": "JavaScript Yellow",
      "value": "#f9e64f"
    },
    {
      "name": "Mandalorian Blue",
      "value": "#1857a4"
    },
    {
      "name": "Node Green",
      "value": "#215732"
    },
    {
      "name": "React Blue",
      "value": "#61dafb"
    },
    {
      "name": "Something Different",
      "value": "#832561"
    },
    {
      "name": "Svelte Orange",
      "value": "#ff3d00"
    },
    {
      "name": "Vue Green",
      "value": "#42b883"
    }
  ],
  "git.autofetch": true,
  "extensions.ignoreRecommendations": false,
  "workbench.startupEditor": "newUntitledFile",
  "security.workspace.trust.untrustedFiles": "open"
}

```

4. Refresh vscode
5.  Done!

