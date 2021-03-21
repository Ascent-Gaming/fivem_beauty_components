# FiveM Beauty Components

## Usage

```JavaScript
import { html, render } from "https://unpkg.com/htm/preact/index.mjs?module"

import Button from "https://cfx-nui-beauty_components/src/html/components/button.js"

const App = () => html`<${Button}>Click me!<//>`

render(html`<${App} />`, document.getElementById("render"))
```
