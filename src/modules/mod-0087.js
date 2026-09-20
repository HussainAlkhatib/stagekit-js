'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0087",
  name: "Caesar shift +6",
  description: "Shifts latin letters forward by 6.",
  run: (value) => String(value).replace(/[a-z]/gi, (ch) => { const base = ch === ch.toLowerCase() ? 97 : 65; return String.fromCharCode(((ch.charCodeAt(0) - base + 6) % 26) + base); }),
});
