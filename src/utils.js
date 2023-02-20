const Path = require("path")

const defaultOptions = {
  source: "src/lib", // directory where it will look for changes in .svelte files
  destination: "src/Blueprint", // output directory
  template: "svelte-blueprint/templates/Blueprint.svelte", // template to include in outpupu .svelte file
  debug: false // Flag to show output in console
}

const validateFileChanged = (file, source) => {
  let p = Path.normalize(source)
  return file.includes(p) && file.endsWith(".svelte")
}


module.exports = {
  defaultOptions,
  validateFileChanged
}