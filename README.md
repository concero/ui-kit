# IT UI Library for Projects like Concero or Lanca

This UI library is designed for use in projects such as **Concero** or **Lanca**.

## Installation

To install the library, run the following command:

```bash
npm i concero-ui
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

[For further instructions, refer to the Developer Documentation.](./ForDevelopers.md)
