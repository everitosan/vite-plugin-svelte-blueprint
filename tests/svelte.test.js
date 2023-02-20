const utils = require("../src/utils")


const fileChanged = "/home/evesan/Code/Maneltos/SvelteBluePrint/blueprint-test/src/lib/Counter.svelte"

test("Accept a file that changes from source", () => {
  let res = utils.validateFileChanged(fileChanged, "./src/lib")
  expect(res).toBe(true)
})


test("Reject a file that changes from source", () => {
  let res = utils.validateFileChanged(fileChanged, "./src/Components")
  expect(res).toBe(false)
})