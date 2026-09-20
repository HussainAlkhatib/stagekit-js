'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0244",
  name: "Caesar shift +20",
  description: "Shifts latin letters forward by 20.",
  run: (value) => String(value).replace(/[a-z]/gi, (ch) => { const base = ch === ch.toLowerCase() ? 97 : 65; return String.fromCharCode(((ch.charCodeAt(0) - base + 20) % 26) + base); }),
});
