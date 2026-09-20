'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0121",
  name: "Caesar shift +8",
  description: "Shifts latin letters forward by 8.",
  run: (value) => String(value).replace(/[a-z]/gi, (ch) => { const base = ch === ch.toLowerCase() ? 97 : 65; return String.fromCharCode(((ch.charCodeAt(0) - base + 8) % 26) + base); }),
});
