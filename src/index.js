#lang "sweet.js"

const Ajv = require('ajv')
const ajv = new Ajv({ v5: true, jsonPointers: true, allErrors: true })

export syntax schema = function (ctx) {
  const identifier = ctx.next().value
  const reference  = `#/${identifier}`

  ctx.next() // '='

  const obj   = ctx.expand('expr').value
  const valid = ajv.validateSchema(obj)

  if (valid) {
    ajv.addMetaSchema(obj, reference)
  } else {
    throw 'Invalid JSON Schema'
  }

  obj.$validate = ajv.getSchema(reference)

  return #`(function (${identifier}) {
    ${ctx}
  }(${obj}))`
}

syntax is = function (ctx) {
  const identifier = ctx.next().value
}

