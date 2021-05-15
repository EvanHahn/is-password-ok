const isPasswordOk = require('./is-password-ok')
const assert = require('assert')

const VALID = [
  'aaaaaaaaa',
  'gNSbMcqCN',
  'f4EYiIPYB',
  'gG57"mb|5',
  '7XzjCbrZ+',
  'l7uf#jw{oEjcoyO',
  'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
  '^n->E%lxvN<zNZ6V@;oJY"U|eq`?V~NW77e%dI_4|y)a?}t?|!mVS1O03JZZbZ",,F::AGOB'
]

const INVALID = [
  null,
  123456789012,
  ['this is an array'],
  { i: 'am an object' },

  '',
  '  ',
  'short',
  'tooshort',
  '12345678',

  'da]0G<eKg0Qk6G@3^*FJFHL"D^v#LtpVc/kyo`ikW)yIX;)NpIi[<.[:PcP8K|98p[Twe[Q3{',

  'chocolate',
  'liverpool',
  'password1',
  '999999999'
]

VALID.forEach((v) => {
  assert(isPasswordOk(v), v + ' should be valid')
})

INVALID.forEach((v) => {
  assert(!isPasswordOk(v), v + ' should be invalid')
})
