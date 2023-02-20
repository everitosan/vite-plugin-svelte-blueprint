const blueprint = require("svelte-blueprint")
const utils = require("./src/utils")

function ViteSvelteBlueprint(opts=utils.defaultOptions) {
  const options = {
    ...utils.defaultOptions,
    ...opts
  }

  const dstPath = options.dst + '/Pages'

  // todo initial compilation

  return {
    name: 'svelteBluePrint-hmr',
    enforce: 'post',
    // HMR
    handleHotUpdate({ file, server }) {      
      if (utils.validateFileChanged(file, options.source)) {
        console.log(`Svelte file detected ${file}`)
        document(file, dstPath, options.template),  
        server.ws.send({     
          type: 'update',          
          path: '*'
        });
      }
    },
  }
}

module.export = ViteSvelteBlueprint