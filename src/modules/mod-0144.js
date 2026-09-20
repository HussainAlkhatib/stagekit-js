'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0144",
  name: "Mask all but last 9",
  description: "Masks all but the last 9 characters.",
  run: (value) => { const s = String(value); const keep = 9; if (s.length <= keep) return s; return '*'.repeat(s.length - keep) + s.slice(-keep); },
});
