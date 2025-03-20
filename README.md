# Learning Language App

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=romaprok_learning_language_app&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=romaprok_learning_language_app)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=romaprok_learning_language_app&metric=coverage)](https://sonarcloud.io/summary/new_code?id=romaprok_learning_language_app)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=romaprok_learning_language_app&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=romaprok_learning_language_app)
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=romaprok_learning_language_app&metric=sqale_index)](https://sonarcloud.io/summary/new_code?id=romaprok_learning_language_app)

A React TypeScript application for language learning.

## Getting Started

### Prerequisites
- Node.js 20.x
- Yarn 1.22.x

### Installation
```bash
yarn install
```

### Development
```bash
yarn dev
```

### Testing
```bash
yarn test
```

### Build
```bash
yarn build
```

## Features
- TypeScript support
- React Testing Library
- SCSS styling
- ESLint configuration
- Vite build tool
- Continuous Integration with GitHub Actions
- Code Quality monitoring with SonarCloud

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
