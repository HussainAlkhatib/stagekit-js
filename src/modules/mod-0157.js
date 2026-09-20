'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0157",
  name: "Atbash",
  description: "Applies the Atbash cipher.",
  run: (value) => String(value).replace(/[a-z]/gi, (ch) => { const base = ch === ch.toLowerCase() ? 97 : 65; return String.fromCharCode(25 - (ch.charCodeAt(0) - base) + base); }),
});
