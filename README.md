# Before starting, run

```bash
npm i
npm run prepare
```

- For start with storybook: `npm run sb`
- For complex lint: `npm run lint`
- For build: `npm run build`

TO ADD a NEW component, simply place it in the /src/lib/ folder and re-export it in /src/lib/index.ts.

## Publish

### First-time setup

Log in to your npm account before publishing:

```bash
npm adduser nameUserFromNpmAccount
```

### Regular Publishing
Before publishing, remember: **you cannot publish the same version twice**.
Always update the version before publishing.

#### Example commands:
```bash
npm version major // for increment major  1.0.0 -> 2.0.0
npm version minor // for increment minor  0.1.0 -> 0.2.0
npm version patch // for increment patch  0.0.1 -> 0.0.2
```
#### Versioning Format: `MAJOR.MINOR.PATCH`

- **Major (`1.0.0`)** – Introduces breaking changes, incompatible with previous versions.
- **Minor (`0.1.0`)** – Adds or updates functionality while maintaining backward compatibility.
- **Patch (`0.0.1`)** – Includes small fixes without adding new features, only improving existing ones.

To publish a new version, run:

```bash
npm run publish
```

## Project Setup

The library uses **DM Sans** fonts, but they are **NOT included** in the final build.
You need to import them manually into your project.

#### Font Import Example:

```ts
import './assets_of_your_project/fonts/DM_Sans/typography-woff.css'
```

Additionally, you need to import the appropriate style file depending on your project (**Concero** or **Lanca**).

#### Example:

```ts
import 'concero-ui/styles/concero/index.css'
import 'concero-ui/styles/lanca/index.css'
```

## Core Component Principles

- **Extensibility and Flexibility**: Follow the **Open-Closed Principle** from SOLID — components should be open for extension but closed for modification.
- **Style Overriding**:
    - An external `className` should **override** the component’s internal styles.
    - **Avoid `!important`** to maintain flexibility for styling.
- **CSS Variables**:
    - Use CSS variables (`--space-s`, `--color-gray-100`, etc.) as much as possible.
    - Variable names should match those in **Figma** to simplify maintenance and understanding.
- **External Styles Priority**: Ensure the component accepts external styles (`className`, `style`) with the highest priority.
- **Forwarding Refs**: Support `ref` forwarding for seamless integration with parent components.
- **HTML Props Override**: Allow passing standard HTML attributes (`aria-*`, `style`, etc.) that override internal defaults.
- **Examples**:
    - `Button`, `Checkbox` handle `aria-*` attributes, `style`, and other HTML props correctly.

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
