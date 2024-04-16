# Design Figma for the project [here](https://www.figma.com/file/s21JDtjv3cRyUfetFYAzIJ/DSFilter)

## Use Case: List Products

1. [OUT] The system informs the name and price of all products, sorted by price. 
2. [IN] The user optionally informs the minimum price and maximum price of the products.
3. [OUT] The system informs the name and price of the products, sorted by price, according to criteria.
 
Additional information: 
- You don't need to do form validation (assume that the user is going to enter valid values).
- You don't need to implement routes (you can mount the entire screen in the App). 
- If the value of the minimum price is not informed, use the value 0 (zero) by default. 
- If the maximum price value is not entered, use the value Number.MAX_VALUE by default.

## Correction criteria for this task:

1) The project should contain the main components (there can be others as you like): 
    - Header 
    - ListingBody screen 
    - Filter card 
    - Listing card 
2) The product list should be passed as a Prop to the listing card. 
3) The filter card should emit an onFilter(min, max) event. This event serves to communicate the minimum and maximum prices each time the form is submitted. 
4) Context API used to maintain the global state of the number of products shown on the screen. Whenever a new filter is made and the number of products listed changes, the number must be updated in the header.

## Layout

![Figma](https://github.com/SofiaMFonseca/assets/blob/main/dsfilter/figma-task-dsfilter.png)

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
