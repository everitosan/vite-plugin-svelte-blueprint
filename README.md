# Vite Svelte Blueprint plugin

## Vite plugin for [svelte-blueprint](https://www.npmjs.com/package/svelte-blueprint)

⚠️ Important   
This plugin is only compatible with svelte-blueprint >= 2.0.0

## How to:

### 📦 Install

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

### 🔧 Configure

The pluing accepts up to four configuration parameters.

| Parameter | Description | Default |
| -- | -- | -- |
|  source | Source directory of components | src/lib |
|  destination | Output directory for documentation files | src/Blueprint |
|  template | Svelte file that defines documentation structure | svelte-blueprint/templates/Blueprint.svelte |
|  debug | Flag to indicate if logs shouls be shown | false |