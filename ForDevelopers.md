# Before starting, run the following in the `concero-ui` repository:

```bash
npm i
npm run prepare
```

- To start Storybook: `npm run sb`
- To run a full lint check: `npm run lint`
- For build: `npm run build`

 TO ADD a NEW component, simply place it in the /src/lib/ folder and **re-export** it in /src/lib/index.ts.

## Publish

### First-time setup

Log in to your npm account before publishing:

```bash
npm adduser nameUserFromNpmAccount
```

### Regular Publishing

Before publishing, remember: **you cannot publish the same version twice**.
Always update the version before publishing.

#### Steps to publish a new version:

1. Commit all changes and confirm the commit.
2. Update the version using one of the following commands:

    #### Versioning Format: `MAJOR.MINOR.PATCH`

    - **Major (`1.0.0`)** – Introduces breaking changes, incompatible with previous versions.
    - **Minor (`0.1.0`)** – Adds or updates functionality while maintaining backward compatibility.
    - **Patch (`0.0.1`)** – Includes small fixes without adding new features, only improving existing ones.

    ```bash
    npm version patch  # 0.0.1 → 0.0.2
    npm version minor  # 0.1.0 → 0.2.0
    npm version major  # 1.0.0 → 2.0.0
    ```

3. Push tags to GitHub: you need push tags
    ```bash
    git push origin --tags
    ```
4. Publish to npm:
    ```bash
    npm run publish
    ```
5. Then, for a more canonical development process, it is recommended to go to the GitHub repository release page (https://github.com/concero/ui-kit/releases) and create a new release based on the tag. In the description, add the changes either briefly or in detail.

> **ℹ️ Note:**
> You should change the version **only if it affects the use of the library in a real project**.

If we update **Storybook configs**, it won't impact projects that install the library from NPM.

If the changes are **only for developers**, there's **no need to bump the version**!

## Core Component Principles
- **Use this reccomendations https://www.w3.org/WAI/ARIA/apg/patterns/**
- **Extensibility and Flexibility**: Follow the **Open-Closed Principle** from SOLID — components should be open for extension but closed for modification.
- **Style Overriding**:
    - An external `className` should **override** the component’s internal styles.
    - **Avoid `!important`** to maintain flexibility for styling.
- **CSS Variables**:
    - Use CSS variables (`--space-s`, `--color-gray-100`, etc.) as much as possible.
    - Variable names should match those in **Figma** to simplify maintenance and understanding.
- **External Styles Priority**: Ensure the component accepts external styles (`className`, `style`) with the highest priority.
- **Forwarding Refs**: Support `ref` forwarding for seamless integration with parent components.
- **HTML Props Override**: Allow passing standard HTML attributes (aria-*, style, onMouseEnter, etc.)   
        that override internal defaults, while wrapping any remaining attributes in a separate field, such as htmlProps or htmlButtonProps or htmlDivProps and etc.
- **State Props**: Allow passing pseudo-state classes (`isHovered`, `isPressed`, `isFocused`, and others as needed) to specify component states programmatically.
- **Examples**:
    - `Button`, `Checkbox` handle `aria-*` attributes, `style`, and other HTML props correctly.

## Individual styles

Regarding colors for two or more projects:

- Colors and general CSS variables are currently stored in `src/lib/styles/variables.pcss`.
- However, project-specific styles should be kept separately, namely in `public/styles/project/index.css`.

If, in the future, different padding or warning colors are required for projects, they should be:

1. Removed from `variables.pcss`.
2. Added individually in the project's style file (`public/styles/project/index.css`).

## Editor Configuration Recommendations

For a smooth development experience with this library, consider using the following VS Code settings:
For convenience, you can create a separate settings profile in VSCode

```json
{
	"files.autoSave": "afterDelay", // Enables automatic saving of files after a short delay, ensuring no work is lost.
	"files.eol": "\n", // Ensures the use of Unix-style line endings for consistency across platforms.
	"emmet.includeLanguages": {
		"postcss": "css" // Configures Emmet to work with PostCSS as if it were CSS, improving productivity with shorthand syntax.
	},
	"editor.formatOnSave": true, // Automatically formats the code every time a file is saved.
	"editor.defaultFormatter": "esbenp.prettier-vscode", // Specifies Prettier as the default code formatter for all file types.
	"[javascript]": {
		"editor.defaultFormatter": "esbenp.prettier-vscode" // Ensures Prettier is used as the formatter specifically for JavaScript files.
	},
    "[typescript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode",
        "editor.formatOnSave": true,
    },
    "[typescriptreact]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode",
        "editor.formatOnSave": true
    },
	"eslint.useFlatConfig": true, // For support eslint config
	"cssvar.files": ["**/*.css", "**/*.pcss"] // For global css/pcss variables
}
```

Recommended extensions:

- [CSS Modules](https://marketplace.visualstudio.com/items?itemName=clinyong.vscode-css-modules)
- [CSS Var Complete](https://marketplace.visualstudio.com/items?itemName=phoenisx.cssvar)
- [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
- [Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Mdx](https://marketplace.visualstudio.com/items?itemName=unifiedjs.vscode-mdx)
- [PostCSS Language Support](https://marketplace.visualstudio.com/items?itemName=csstools.postcss)
- [PostCSS Intellisense and Highlighting](https://marketplace.visualstudio.com/items?itemName=vunguyentuan.vscode-postcss)
- [Prettier - Code Formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens)
- [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)
