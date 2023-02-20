const blueprint = require("svelte-blueprint")
const utils = require("./src/utils")

function ViteSvelteBlueprint(opts=utils.defaultOptions) {
  const options = {
    ...utils.defaultOptions,
    ...opts
  }

  const dstPath = options.destination + '/Pages'

  // todo initial compilation

  return {
    name: 'svelteBluePrint-hmr',
    enforce: 'post',
    // HMR
    handleHotUpdate({ file, server }) {      
      if (utils.validateFileChanged(file, options.source)) {
        let res = blueprint.document(file, dstPath, options.template)
        if(options.debug) {
          console.log(`Svelte file detected ${file}`)
          console.log(options)
          console.log(`Documentation generated: ${res}`)
        }
        server.ws.send({     
          type: 'update',          
          path: '*'
        });
      }
    },
  }
}

module.exports = ViteSvelteBlueprint
