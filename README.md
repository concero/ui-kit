## Editor Configuration Recommendations

For a smooth development experience with this library, consider using the following VS Code settings:

```json
{
  "files.autoSave": "afterDelay",  // Enables automatic saving of files after a short delay, ensuring no work is lost.
  "files.eol": "\n",  // Ensures the use of Unix-style line endings for consistency across platforms.
  "emmet.includeLanguages": {
    "postcss": "css"  // Configures Emmet to work with PostCSS as if it were CSS, improving productivity with shorthand syntax.
  },
  "editor.formatOnSave": true,  // Automatically formats the code every time a file is saved.
  "editor.defaultFormatter": "esbenp.prettier-vscode",  // Specifies Prettier as the default code formatter for all file types.
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"  // Ensures Prettier is used as the formatter specifically for JavaScript files.
  },
  "eslint.useFlatConfig": true
}
```
Recommended extensions:

- [CSS Modules](https://marketplace.visualstudio.com/items?itemName=clinyong.vscode-css-modules)
- [Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens)
- [PostCSS](https://marketplace.visualstudio.com/items?itemName=csstools.postcss)
- [PostCSS Syntax](https://marketplace.visualstudio.com/items?itemName=vunguyentuan.vscode-postcss)
- [Prettier - Code Formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)

