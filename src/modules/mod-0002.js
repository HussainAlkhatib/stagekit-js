'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0002",
  name: "Caesar shift +1",
  description: "Shifts latin letters forward by 1.",
  run: (value) => String(value).replace(/[a-z]/gi, (ch) => { const base = ch === ch.toLowerCase() ? 97 : 65; return String.fromCharCode(((ch.charCodeAt(0) - base + 1) % 26) + base); }),
});
