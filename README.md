# Vite Svelte Blueprint plugin

## Vite plugin for [svelte-blueprint](https://www.npmjs.com/package/svelte-blueprint)



### How to use.

> Installation

Install svelte-blueprint and vite-plugin-svelte-blueprint.

```bash
$ npm i -D svelte-blueprint vite-plugin-svelte-blueprint
```

Inside `vite.config` file you should import the plugin and modify  the **plugins** section.

```js
import Blueprint from 'vite-plugin-svelte-blueprint'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    Blueprint()
  ],
})
...

```

> Configuration

The pluing accepts up to three configuration parameters.

| Parameter | Description |
| -- | -- |
|  source | Source directory of components | 
|  destination | Output directory for documentation files | 
|  template | Svelte file that defines documentation structure | 