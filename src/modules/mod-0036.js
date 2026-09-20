'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0036",
  name: "Caesar shift +3",
  description: "Shifts latin letters forward by 3.",
  run: (value) => String(value).replace(/[a-z]/gi, (ch) => { const base = ch === ch.toLowerCase() ? 97 : 65; return String.fromCharCode(((ch.charCodeAt(0) - base + 3) % 26) + base); }),
});
