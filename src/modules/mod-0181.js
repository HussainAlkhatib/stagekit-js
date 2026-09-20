'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0181",
  name: "Caesar shift +13",
  description: "Shifts latin letters forward by 13.",
  run: (value) => String(value).replace(/[a-z]/gi, (ch) => { const base = ch === ch.toLowerCase() ? 97 : 65; return String.fromCharCode(((ch.charCodeAt(0) - base + 13) % 26) + base); }),
});
