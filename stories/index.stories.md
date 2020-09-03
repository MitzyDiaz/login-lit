```js script
import { html } from '@open-wc/demoing-storybook';
import '../login-comp.js';

export default {
  title: 'LoginComp',
  component: 'login-comp',
  options: { selectedPanel: "storybookjs/knobs/panel" },
};
```

# LoginComp

A component for...

## Features:

- a
- b
- ...

## How to use

### Installation

```bash
yarn add login-comp
```

```js
import 'login-comp/login-comp.js';
```

```js preview-story
export const Simple = () => html`
  <login-comp></login-comp>
`;
```

## Variations

###### Custom Title

```js preview-story
export const CustomTitle = () => html`
  <login-comp title="Hello World"></login-comp>
`;
```
