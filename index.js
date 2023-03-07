const blueprint = require("svelte-blueprint")
const utils = require("./src/utils")

function ViteSvelteBlueprint(opts=utils.defaultOptions) {
  const options = {
    ...utils.defaultOptions,
    ...opts
  }

  const dstPath = options.destination + '/Pages'

  const p1_path = __dirname.split("node_modules")

  const res = blueprint.document(`${p1_path[0]}${options.source}`, dstPath, options.template)
  if (options.debug) {
    console.log(`Generating documentation for ${p1_path[0]}${options.source}`)
    console.log(res)
  }

  return {
    name: 'svelteBluePrint-hmr',
    enforce: 'post',
    // HMR
    handleHotUpdate({ file, server }) {      
      if (utils.validateFileChanged(file, options.source)) {
        const res = blueprint.document(file, dstPath, options.template)
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
